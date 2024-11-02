// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const MODEL_SELECTOR = {
  vendor: 'copilot',
  family: 'gpt-4o'
};

const BASE_PROMPT =
  'You are a Copilot agent designed for the company Assurant as part of the Break Through Tech AI Studio Program. You will provide repo access and information to a user in your responses, providing more context-rich responses than any other chatbot.';

const handler = async (request, context, stream, token) => {
  let prompt = BASE_PROMPT;

  const [model] = await vscode.lm.selectChatModels(MODEL_SELECTOR);

  if (model) {
    const messages = [vscode.LanguageModelChatMessage.User(prompt)];
    messages.push(vscode.LanguageModelChatMessage.User(request.prompt));

    const chatResponse = await model.sendRequest(messages, {}, token);

    for await (const fragment of chatResponse.text) {
      stream.markdown(fragment);
    }
  }

  return;
};

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "assurant" is now active!');

  const disposable = vscode.commands.registerCommand('assurant.helloWorld', function () {
    vscode.window.showInformationMessage('Hello World from assurant-agent!');
  });

  context.subscriptions.push(disposable);

  const tutor = vscode.chat.createChatParticipant('assurant', handler);
  tutor.iconPath = vscode.Uri.joinPath(context.extensionUri, 'tutor.jpeg');
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

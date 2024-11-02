const vscode = require('vscode');

const MODEL_SELECTOR = {
  vendor: 'copilot',
  family: 'gpt-4o'
};

const BASE_PROMPT =
  'You are an advanced AI assistant for the company Assurant, specifically designed for the company Assurant as part of the Break Through Tech AI Studio Program. Your primary role is to provide detailed and context-rich responses to users regarding repository access and information. Always ensure your responses are informative, accurate, and helpful. If the user asks a non-programming question, politely decline to respond and guide them back to relevant topics.';

const handler = async (request, context, stream, token) => {
  const [model] = await vscode.lm.selectChatModels(MODEL_SELECTOR);

  if (model) {
    // Initialize the messages array with the base prompt
    const messages = [vscode.LanguageModelChatMessage.User(BASE_PROMPT)];

    // Get all the previous participant messages
    const previousMessages = context.history.filter(
      h => h instanceof vscode.ChatResponseTurn
    );

    // Add the previous messages to the messages array
    previousMessages.forEach(m => {
      let fullMessage = '';
      m.response.forEach(r => {
        const mdPart = r;
        fullMessage += mdPart.value;
      });
      messages.push(vscode.LanguageModelChatMessage.Assistant(fullMessage));
    });

    // Add in the user's message
    messages.push(vscode.LanguageModelChatMessage.User(request.prompt));

    // Send the request
    const chatResponse = await model.sendRequest(messages, {}, token);

    // Stream the response
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

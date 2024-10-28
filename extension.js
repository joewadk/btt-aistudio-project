const vscode = require('vscode');
require('dotenv').config();

function activate(context) {
    console.log('Congratulations, your extension "assurant" is now active!');

    const disposable = vscode.commands.registerCommand('assurant.helloWorld', function () {
        console.log('assurant.helloWorld command executed');
        vscode.window.showInformationMessage('Hello World from assurant-copilot!');

        const panel = vscode.window.createWebviewPanel(
            'catCoding',
            'OpenAI Prompt',
            vscode.ViewColumn.One,
            { enableScripts: true }
        );

        panel.webview.html = getWebviewContent();
        panel.webview.onDidReceiveMessage(async message => {
            if (message.command === 'generate') {
                const prompt = message.prompt;
                const openaiResponse = await generateOpenAIChatResponse(prompt);
                panel.webview.postMessage({ command: 'showResponse', response: openaiResponse });
            }
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OpenAI Prompt</title>
    </head>
    <body>
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
        <h1>OpenAI Prompt Generator</h1>
        <input id="promptInput" type="text" placeholder="Enter your prompt" style="width: 300px;" />
        <button onclick="sendPrompt()">Generate</button>
        <h2>Response:</h2>
        <pre id="response"></pre>
        <script>
            const vscode = acquireVsCodeApi();
            
            function sendPrompt() {
                const prompt = document.getElementById('promptInput').value;
                vscode.postMessage({ command: 'generate', prompt: prompt });
            }

            window.addEventListener('message', event => {
                const message = event.data;
                if (message.command === 'showResponse') {
                    document.getElementById('response').innerText = message.response;
                }
            });
        </script>
    </body>
    </html>`;
}

async function generateOpenAIChatResponse(prompt) {
    const openaiApiKey = process.env.OPENAI_API_KEY;

    try {
        const openai = new OpenAI({
            apiKey: openaiApiKey,
        });
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini', 
            messages: [{ role: 'user', content: prompt }],
        });

        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error with OpenAI API:', error);
        return 'Error generating response.';
    }
}

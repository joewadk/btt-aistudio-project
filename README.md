# BTT AI STUDIO PROJECT
Hello! This project was made by Jawad, Yousra, Linh, and Dineshman.

# Get Started
To get started, make a new directory called `.vscode` in root. Then create the `launch.json` file with the following contents:
```bash
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Run Extension",
			"type": "extensionHost",
			"request": "launch",
			"args": [
				"--extensionDevelopmentPath=${workspaceFolder}"
			],
			"env": {
				"OPENAI_API_KEY": "<your open ai api key>"
			}
		}
	]
}

```
and provide your openai api key.

Now press f5 on your keyboard. This will open up a VSC Extension Development window. Your extension will be live on this window. Now use Ctrl+Shift+P or Command+Shift+P and run the `hello world.assurant` command. This will display as message on the lower right-hand side. That is the basic functionality from the vscode extension boiler plate. It is our job to expand upon this and continue working past this stage.

- Future Modifications are to be done in `test/extension.test.js`
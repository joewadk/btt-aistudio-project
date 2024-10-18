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

Now press f5 on your keyboard. This will open up a VSC Extension Development window. Your extension will be live on this window. Now use Ctrl+Shift+P or Command+Shift+P and run the `hello world.assurant` command. This will display a message on the lower right-hand side, as well as open a tab with our basic chat component. It is our job now to expand upon this and incorporate the selenium scraping/other components as needed.

- Future Modifications are to be done in `test/extension.test.js`


## Obtaining OAuth Credentials

To use the Github API, user will need to obtain a personal access token (OAuth token). Please follow these steps:


1. Go to **Settings > Developer Settings > Personal Access Tokens > Generate new token**
2. Give your token a name and select the scopes and permissions to grant
3. For accessing private repos, you will want to select 'repo'.
4. Click **Generate token**, copy your token, and set as environment variable to run info retrieval script


# BTT AI Studio Project

Welcome to the BTT AI Studio Project, created by **Jawad**, **Yousra**, **Linh**, and **Dineshman**. This project utilizes GitHub's Copilot extension to enhance developer productivity and streamline code assistance.

---

## Prerequisites

- Ensure that GitHub Copilot is installed and accessible in your development environment.
- Install the VS Code shell command code:
  Open VS Code.
  Press Ctrl+Shift+P (or Cmd+Shift+P on Mac) to open the Command Palette.
  Type Shell Command: Install 'code' command in PATH and select it.

---

## Getting Started

To set up the project, follow these steps:

1. **Navigate to the Project Folder**  
   Open your terminal and enter the project directory by running:
   ```bash
   cd assurant
2. **Open the Workspace**
   Launch the workspace in VS Code by executing:
   ```bash
   code .

4. **Run the Extension Sandbox**
   Press `F5` on your keyboard to open the extension sandbox.
   
5. **Activate Github Copilot**
   Open up the Github Copilot and type `@assurant` and begin asking questions or seeking assistance.

6. **Future Development**
   Future Modifications are to be done in `assurant/extension.js` file.


## Obtaining OAuth Credentials

To use the Github API, user will need to obtain a personal access token (OAuth token). Please follow these steps:


1. Go to **Settings > Developer Settings > Personal Access Tokens > Generate new token**
2. Give your token a name and select the scopes and permissions to grant
3. For accessing private repos, you will want to select 'repo'.
4. Click **Generate token**, copy your token, and set as environment variable to run info retrieval script


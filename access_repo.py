"""
This script uses the GitHub REST API to fetch the README and file structure for 
all public and private repositories of the authenticated user. The GitHub personal 
access token (OAuth) is retrieved from the environment variable 'GITHUB_TOKEN'. 
The script first retrieves the list of repositories using the /user/repos endpoint, 
then for each repository, it fetches the README and the file structure from the 
repository contents endpoint.

Ensure the GITHUB_TOKEN environment variable is set before running the script. 
If the token is not set, the script will raise an error.
"""
import requests
import os
import base64

# Get the GitHub token from environment variables
token = os.getenv('GITHUB_TOKEN')

# Verify if token exists, otherwise exit with a message
if not token:
    raise ValueError("GITHUB_TOKEN environment variable not set. Please set it before running the script.")

headers = {
    'Authorization': f'token {token}',
    'Accept': 'application/vnd.github.v3+json'
}

# Add the username of the repository owner
username = 'USERNAME_OF_REPO_OWNER'

url = f'https://api.github.com/users/{username}/repos'

response = requests.get(url, headers=headers)

if response.status_code == 200:
    repos = response.json()
    for repo in repos:
        repo_name = repo['name']
        repo_full_name = repo['full_name']
        print(f'Fetching README and file structure for: {repo_full_name}')
        
        # Get README file
        readme_url = f'https://api.github.com/repos/{repo_full_name}/readme'
        readme_response = requests.get(readme_url, headers=headers)
        
        if readme_response.status_code == 200:
            readme_data = readme_response.json()
            readme_content = readme_data.get('content', '')
            decoded_content = base64.b64decode(readme_content).decode('utf-8')

            print(f"README for {repo_name}:\n{decoded_content}\n")
        else:
            print(f'Failed to retrieve README for {repo_name}: {readme_response.status_code} {readme_response.text}')
        
        # Get file structure
        contents_url = f'https://api.github.com/repos/{repo_full_name}/contents'
        contents_response = requests.get(contents_url, headers=headers)
        
        if contents_response.status_code == 200:
            contents = contents_response.json()
            print(f'File structure for {repo_name}:')
            for item in contents:
                item_type = item['type']
                item_name = item['name']
                print(f"- {item_name} ({item_type})")
            print()
        else:
            print(f'Failed to retrieve file structure for {repo_name}: {contents_response.status_code} {contents_response.text}')
else:
    print(f'Failed to retrieve repositories: {response.status_code} {response.text}')
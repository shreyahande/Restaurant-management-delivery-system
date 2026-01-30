# Git and GitHub Guide for Restaurant Management Delivery System

This guide contains all the essential information for managing the Git repository and GitHub integration for this project.

## Git Configuration

### Current Git Configuration
- Email: sbhande1710@gmail.com

### Setting Git Username and Email

#### For the current repository only:
```
git config user.name "YOUR_USERNAME"
git config user.email "YOUR_EMAIL"
```

#### For all repositories (global setting):
```
git config --global user.name "YOUR_USERNAME"
git config --global user.email "YOUR_EMAIL"
```

## GitHub Repository Information

- Repository URL: https://github.com/shreyahande/Restaurant-management-delivery-system.git
- GitHub Username: shreyahande

## Basic Git Commands

```
git status                           # Check changed files
git add .                            # Stage all changes
git commit -m "Your message"         # Commit changes
git push origin main                 # Push to GitHub
git pull origin main                 # Pull from GitHub
```

## Working with GitHub

### Pushing to GitHub
1. Make your changes to the code
2. Stage the changes: `git add .`
3. Commit the changes: `git commit -m "Description of changes"`
4. Push to GitHub: `git push origin main`

### Pulling from GitHub
If others have made changes to the repository, you can pull those changes:
```
git pull origin main
```

### Creating a New Repository on GitHub (if needed)
1. Go to [GitHub.com](https://github.com/new)
2. Sign in with your username: `shreyahande`
3. Create a new repository named: `Restaurant-management-delivery-system`
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

### Updating Remote URL (if needed)
If you need to change the remote repository URL:
```
git remote set-url origin https://github.com/shreyahande/Restaurant-management-delivery-system.git
```

## Authentication with GitHub

### Using Personal Access Tokens
GitHub no longer accepts password authentication for Git operations. Use a personal access token instead:

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Generate new token
2. Give it a name (e.g., "Restaurant Management System")
3. Select scopes: at minimum, select "repo" for full repository access
4. Click "Generate token"
5. Copy the token immediately (you won't be able to see it again)
6. Use this token instead of your password when Git asks for authentication

## Troubleshooting GitHub Issues

### "Repository not found" Error
If you see "Repository not found" when pushing:
1. Verify the repository exists on GitHub
2. Check that you have the correct URL: `git remote -v`
3. Ensure you have proper access to the repository
4. If using HTTPS, check that your GitHub credentials are correct

### Authentication Problems
If you're having trouble authenticating:
1. For HTTPS: Use a personal access token instead of password
2. For SSH: Verify your SSH key is set up correctly

## Best Practices
- Update README with better documentation
- Add LICENSE file
- Create CONTRIBUTING.md for guidelines
- Regularly commit and push changes to keep GitHub in sync
- Use meaningful commit messages
- Create branches for new features

## Need More Help?
For more detailed information about Git and GitHub, refer to:
- [GitHub Documentation](https://docs.github.com/en/get-started)
- [Git Documentation](https://git-scm.com/doc)
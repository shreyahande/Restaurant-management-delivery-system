@echo off
echo ===================================================
echo Push Repository to GitHub (shreyahande)
echo ===================================================
echo.
echo This script will help you push your repository to GitHub.
echo Before running this script, make sure you have:
echo 1. Created a new repository on GitHub (https://github.com/new)
echo 2. Have your GitHub username and personal access token ready
echo.
echo The remote URL is currently set to:
git remote -v
echo.
echo ===================================================
echo.
echo Pushing repository to GitHub...
echo.
git push -u origin main
echo.
echo ===================================================
echo.
echo If the push was successful, your repository should now be available at:
echo https://github.com/shreyahande/Restaurant-management-delivery-system
echo.
echo If you encountered any errors, please refer to the github_add_repository.md file
echo for troubleshooting steps.
echo.
pause
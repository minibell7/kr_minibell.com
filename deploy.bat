@echo off
echo Starting manual deployment...

echo Adding files...
git add .

echo Committing changes...
git commit -m "Manual deploy: Design updates and Blog system"

echo Pushing to GitHub...
git push origin main

echo Deployment script finished.
pause

---
description: How to deploy your Next.js site to Vercel
---

# Deploying to Vercel

To make your website accessible to everyone on the internet (e.g., `mimibell.com`), you need to **deploy** it. The easiest way for Next.js apps is using **Vercel**.

## Prerequisites
1.  A **GitHub** account (https://github.com/).
2.  A **Vercel** account (https://vercel.com/signup).

## Step 1: Push your code to GitHub
(If you haven't already initialized git)
1.  Open your terminal (or ask me to do this part!).
2.  Run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
3.  Create a new repository on GitHub.
4.  Follow the instructions on GitHub to push your code:
    ```bash
    git remote add origin <your-repo-url>
    git branch -M main
    git push -u origin main
    ```

## Step 2: Connect to Vercel
1.  Go to your Vercel Dashboard (https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Import"** next to your GitHub repository.
4.  Click **"Deploy"**.

## Step 3: Custom Domain (Optional)
1.  Once deployed, go to **Settings** -> **Domains** in your Vercel project.
2.  Add `mimibell.com` (you need to own the domain).
3.  Follow the instructions to configure your DNS records.

## Need Help?
I can help you initialize Git and prepare the code for GitHub!

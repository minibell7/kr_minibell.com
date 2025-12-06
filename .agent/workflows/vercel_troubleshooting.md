# Vercel Deployment Troubleshooting

If the deployment didn't work, please check the following steps:

## 1. Check Vercel Dashboard
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard).
2. Do you see `mimibell-site` in the list of projects?
    - **No**: Click **"Add New..."** -> **"Project"** and try to Import again.
    - **Yes**: Click on the project name.

## 2. Check Deployment Status
On the project page:
- Does it say **"Ready"** (Green)? -> The site is live. Click the domain link.
- Does it say **"Error"** (Red)? -> Click on the error to see the logs.
- Does it say **"Building"** (Blue/Yellow)? -> It's still working. Wait a moment.

## 3. Common Issues
- **"Framework Preset"**: Ensure it is set to **Next.js**. (Vercel usually detects this automatically).
- **"Build Command"**: Should be `next build` (Default).
- **"Output Directory"**: Should be `.next` (Default).

## 4. Try Redeploying
If it failed, you can try again:
1. Go to the **Deployments** tab.
2. Click the three dots (...) next to the latest deployment.
3. Select **"Redeploy"**.

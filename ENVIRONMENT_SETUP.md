# Environment Variables Setup

## Required Environment Variables

Based on your Clerk configuration, you need to set the following environment variables:

### For Local Development (.env.local)

Create a `.env.local` file in your project root with:

```bash
# Required: Clerk Frontend API URL
NEXT_PUBLIC_CLERK_FRONTEND_API=https://handy-cow-68.clerk.accounts.dev

# Required: Clerk Secret Key (get this from your Clerk dashboard)
# Replace with your actual secret key from Clerk dashboard
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
```

### For Netlify Deployment

Set these environment variables in your Netlify dashboard:

1. Go to your Netlify project dashboard
2. Navigate to **Site settings → Build & deploy → Environment**
3. Add these environment variables:

| Variable Name | Value |
|---------------|--------|
| `NEXT_PUBLIC_CLERK_FRONTEND_API` | `https://handy-cow-68.clerk.accounts.dev` |
| `CLERK_SECRET_KEY` | `sk_test_your_actual_secret_key_here` |

## Where to Find Your Secret Key

1. Go to [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Select your application
3. Navigate to **Developers → API Keys**
4. Copy the **Secret Key** (starts with `sk_test_` or `sk_live_`)

## Additional Information

- **Backend API URL**: `https://api.clerk.com` (used internally by Clerk)
- **JWKS URL**: `https://handy-cow-68.clerk.accounts.dev/.well-known/jwks.json` (used for JWT verification)
- **Public Key**: The JWKS URL above provides the public key automatically

## Optional Environment Variables

These have defaults in `next.config.js` but can be customized:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

## Testing Your Setup

After setting the environment variables:

1. **Local testing**: Run `npm run dev`
2. **Production testing**: Set vars in Netlify and deploy

The build should now succeed without the "NEXT_PUBLIC_CLERK_FRONTEND_API environment variable must be set" error.
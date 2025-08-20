# Clerk Authentication Setup Guide

## Issues Fixed

1. **Redirect URL Problems**: Fixed hardcoded Clerk URLs that were causing redirect loops
2. **Cookie Domain Issues**: Configured proper cookie domains for Netlify deployment
3. **Environment Variables**: Removed hardcoded values and set up proper environment variable handling

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Your Clerk publishable key (starts with pk_test_ or pk_live_)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here

# Your Clerk secret key (starts with sk_test_ or sk_live_)
CLERK_SECRET_KEY=sk_test_your_actual_key_here

# Optional: Your Clerk instance domain
NEXT_PUBLIC_CLERK_DOMAIN=handy-cow-68.accounts.dev
```

## Netlify Configuration

### 1. Set Environment Variables in Netlify Dashboard

Go to your Netlify dashboard → Site settings → Environment variables and add:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `CLERK_SECRET_KEY`: Your Clerk secret key
- `NEXT_PUBLIC_CLERK_DOMAIN`: Your Clerk instance domain

### 2. Update Clerk Dashboard Settings

In your Clerk dashboard, update the following settings:

#### Sign-in URLs:
- **Sign-in URL**: `https://midosale.netlify.app/sign-in`
- **After sign-in URL**: `https://midosale.netlify.app/`
- **Sign-in fallback redirect URL**: `https://midosale.netlify.app/`

#### Sign-up URLs:
- **Sign-up URL**: `https://midosale.netlify.app/sign-up`
- **After sign-up URL**: `https://midosale.netlify.app/`
- **Sign-up fallback redirect URL**: `https://midosale.netlify.app/`

#### Allowed Origins:
Add `https://midosale.netlify.app` to your allowed origins in Clerk.

## Local Development

1. Copy `env.example` to `.env.local`
2. Fill in your actual Clerk keys
3. Run `npm run dev`

## Production Deployment

1. Ensure all environment variables are set in Netlify
2. Deploy your site
3. Verify that Clerk authentication works without redirect loops
4. Check that cookies are properly set for your domain

## Troubleshooting

### Cookie Domain Issues
If you still see cookie domain errors, ensure:
- Your Clerk instance domain matches `NEXT_PUBLIC_CLERK_DOMAIN`
- Your production domain is added to Clerk's allowed origins
- The fallback redirect URLs point to your actual domain

### Redirect Loops
If you experience redirect loops:
- Verify all Clerk URLs in your dashboard match your actual domain
- Check that environment variables are properly set in Netlify
- Ensure the middleware is correctly configured

## Files Modified

- `next.config.js` - Removed hardcoded environment variables
- `pages/_app.js` - Updated ClerkProvider configuration
- `middleware.js` - Improved route handling
- `netlify.toml` - Added proper redirects and environment configuration
- `clerk.config.js` - Created Clerk configuration file
- `env.example` - Created environment variables template
#!/bin/bash

echo "Setting up Clerk environment variables..."
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "Warning: .env.local already exists. This will overwrite it."
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 1
    fi
fi

echo "Please enter your Clerk configuration:"
echo ""

# Get Clerk publishable key
read -p "Enter your Clerk publishable key (starts with pk_test_ or pk_live_): " CLERK_PUBLISHABLE_KEY

# Get Clerk secret key
read -p "Enter your Clerk secret key (starts with sk_test_ or sk_live_): " CLERK_SECRET_KEY

# Get Clerk domain (optional)
read -p "Enter your Clerk instance domain (optional, press Enter to skip): " CLERK_DOMAIN

# Create .env.local file
cat > .env.local << EOF
# Clerk Authentication Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=$CLERK_SECRET_KEY
EOF

# Add domain if provided
if [ ! -z "$CLERK_DOMAIN" ]; then
    echo "NEXT_PUBLIC_CLERK_DOMAIN=$CLERK_DOMAIN" >> .env.local
fi

echo ""
echo "✅ Environment variables configured successfully!"
echo "📁 Created .env.local file"
echo ""
echo "Next steps:"
echo "1. Update your Clerk dashboard with the correct redirect URLs:"
echo "   - Sign-in URL: https://midosale.netlify.app/sign-in"
echo "   - After sign-in URL: https://midosale.netlify.app/"
echo "   - Sign-up URL: https://midosale.netlify.app/sign-up"
echo "   - After sign-up URL: https://midosale.netlify.app/"
echo "2. Add https://midosale.netlify.app to your Clerk allowed origins"
echo "3. Set the same environment variables in your Netlify dashboard"
echo ""
echo "For more details, see CLERK_SETUP.md"
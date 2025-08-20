import dynamic from 'next/dynamic'
import '../styles/globals.css'

// Dynamically import Clerk components to prevent build-time errors
const ClerkProvider = dynamic(() => import('@clerk/nextjs').then(mod => mod.ClerkProvider), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const SignInButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignInButton), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const SignedIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedIn), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const SignedOut = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedOut), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

const UserButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.UserButton), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function App({ Component, pageProps }) {
  // Check if Clerk environment variables are available
  const isClerkAvailable = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY

  if (!isClerkAvailable) {
    // Fallback when Clerk is not configured
    return (
      <div>
        <Component {...pageProps} />
      </div>
    )
  }

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
    >
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

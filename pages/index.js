import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Dynamically import SignIn component to prevent build-time errors
const SignIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignIn), {
  ssr: false,
  loading: () => <div className="text-center p-8"><p className="text-white">Loading...</p></div>
})

export default function Home() {
  // Check if Clerk environment variables are available
  const isClerkAvailable = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API && process.env.CLERK_SECRET_KEY

  return (
    <div>
      <Head>
        <title>Clerk with Next.js Starter</title>
        <meta name="description" content="A basic starter to show off Clerk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Project Connection Banner */}
            <div className="mb-8 text-center">
              <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-blue-200 mb-2">
                  🔗 Connected to MidoHub Project
                </h3>
                <p className="text-blue-100 text-sm mb-3">
                  This authentication system is shared with the MidoHub dropshipping platform.
                </p>
                <Link
                  href="https://midostore.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  Visit MidoHub →
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap lg:-mx-px xl:-mx-3">
              <div className="w-full lg:my-px lg:px-px lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                <Image
                  alt="Clerk Logo"
                  width="200px"
                  height="100px"
                  src="/clerk-logo-dark.svg"
                />
                <div>
                  <h2 className="my-4 mt-4 mb-2 text-3xl font-bold leading-tight text-white md:text-5xl">
                    Beautiful sign up, sign in and user profiles.
                    <br />
                  </h2>
                  <h2 className="mt-4 mb-2 text-lg font-medium leading-tight text-white md:text-3xl">
                    {isClerkAvailable ? 'Sign in to see your user profile' : 'Clerk authentication not configured'}
                  </h2>
                  <p className="mt-4 text-blue-200 text-sm">
                    This authentication system powers both this template and the MidoHub platform.
                  </p>
                </div>
              </div>

              <div className="w-full lg:my-px lg:px-px lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                {isClerkAvailable ? (
                  <SignIn signUpUrl="/sign-up" redirectUrl="/user-profile" />
                ) : (
                  <div className="text-center p-8">
                    <p className="text-white mb-4">Please configure Clerk environment variables to enable authentication.</p>
                    <p className="text-gray-300 text-sm">Check ENVIRONMENT_SETUP.md for instructions.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Disable static generation to prevent build-time Clerk errors
export async function getStaticProps() {
  return {
    props: {},
    // Revalidate every hour
    revalidate: 3600,
  }
}

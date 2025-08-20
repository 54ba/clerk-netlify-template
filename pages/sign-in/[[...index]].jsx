import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <SignIn />
    </div>
  )
}

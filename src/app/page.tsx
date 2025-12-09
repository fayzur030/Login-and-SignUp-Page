// import LoginPage from './login/page'
// import SignInPage from './sign-in/page'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SignInPage /> */}
      <div>
        <h1 className='text-5xl text-center mt-3'>Welcome </h1>
      </div>
      <div className='flex justify-center items-center mt-5 gap-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:text-red-500'>
          <Link href='/login'>Login</Link>
        </button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:text-red-500'>
          <Link href='/sign-in'>Sign In</Link>
        </button>
      </div>
    </>
  )
}

import loginImage from '../../assets/login.png'
import Image from 'next/image'
import { SignInForm } from '../components/signin-form'

export default function SignInPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='bg-muted relative hidden lg:block'>
        <Image
          src={loginImage}
          alt='Image'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-md'>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  )
}

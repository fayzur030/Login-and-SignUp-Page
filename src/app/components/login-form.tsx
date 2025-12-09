import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import google from '../../assets/Google.png'
import facebook from '../../assets/Facebook.png'
import inatagram from '../../assets/Instagram.png'
import twitter from '../../assets/Twitter.png'

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import { Label } from '@radix-ui/react-label'

import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from 'lucide-react'
import Image from 'next/image'
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const icons = [
    {
      id: 1,
      image: google,
    },
    {
      id: 2,
      image: facebook,
    },
    {
      id: 3,
      image: inatagram,
    },
    {
      id: 4,
      image: twitter,
    },
  ]
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className=' text-left'>
          <h1 className='text-2xl md:text-5xl font-bold mb-3'>Login</h1>
          <p className='text-muted-foreground text-[#818181] text-sm text-balance'>
            Login your account in a seconds
          </p>
        </div>
        <Field>
          <Input
            id='email'
            type='email'
            placeholder='Email Address'
            required
            className='border border-gray-300 focus:border-blue-100 focus:ring-0 focus:outline-none'
          />
        </Field>
        <Field>
          <Input
            id='password'
            type='password'
            placeholder='Password'
            required
            className='border border-gray-300 focus:border-blue-100 focus:ring-0 focus:outline-none'
          />
        </Field>
        {/* Checkbox */}
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <Checkbox.Root
              id='keep-logged-in'
              className='w-6 h-6 rounded bg-[#7754F6] border border-gray-300 flex items-center justify-center focus:ring-2 focus:ring-blue-500'
            >
              <Checkbox.Indicator>
                <Check className='w-5 h-5 text-white' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label
              htmlFor='keep-logged-in'
              className=' text-sm md:text-base text-[#818181] font-normal '
            >
              Keep me logged in
            </Label>
          </div>
          <div>
            <a className='text-[#7754F6] font-normal text-sm md:text-base underline cursor-pointer hover:text-[#7794F6] pl-4'>
              Forget password?
            </a>
          </div>
        </div>
        <Field className='bg-[#7754F6] text-white rounded-lg'>
          <Button type='submit'>Login</Button>
        </Field>
        <FieldDescription className='text-start text-[#818181] text-sm md:text-base font-medium'>
          Don&apos;t have an account? {''}
          <a href='#' className='text-[#7754F6] '>
            Sign up
          </a>
        </FieldDescription>
        <div className='flex items-center gap-3 my-2'>
          <div className='flex-1 h-px bg-gray-300'></div>
          <FieldSeparator className='text-[#D1D1D1] text-sm md:text-base font-normal'>
            Or continue with
          </FieldSeparator>
          <div className='flex-1 h-px bg-gray-300'></div>
        </div>
        {/* icon */}
        <div className='flex flex-wrap gap-4 justify-center items-center py-4'>
          {icons.map((item) => (
            <div key={item.id} className=''>
              <Image
                src={item.image}
                alt='icon'
                className='w-[68px] h-[65px]'
              />
            </div>
          ))}
        </div>
      </FieldGroup>
    </form>
  )
}

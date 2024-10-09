import { Button } from '@/components/ui/button'
import { Link } from '@/lib/i18n'
import React from 'react'

const NotFoundPage = () => {
  return (
    <main className='flex justify-center items-center h-[calc(100vh-75px)] container'>
      <div className='flex flex-col items-center gap-y-2'>
      <h1 className='text-3xl'>Oops... we can't find the page you're looking for</h1>
      <Link href="/">
        Go to home page
      </Link>

      </div>

    </main>
  )
}

export default NotFoundPage
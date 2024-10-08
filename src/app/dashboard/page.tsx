import React from 'react'
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import { env } from '@/env.mjs'
import { redirect } from 'next/navigation'

const DashboardPage = async() => {
    const session = await auth()
    if(!session?.user) {
       return redirect(`/auth/signin`);
    }
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
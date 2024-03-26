import Link from 'next/link'
import React from 'react'

export const NavigationComponent = () => {
  return (
    <main className='flex w-full px-24 py-8'>
        <div>
            <Link href={'/'} className='border-b-2 border-black hover:border-white p-2'>Home</Link>
        </div>
    </main>
  )
}

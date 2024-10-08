'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className='h-screen'>
        <div className='h-full flex justify-center items-center flex-col text-center'>
            <h1 className='text-4xl font-bold'>Whoops!</h1>
            <h2 className='text-2xl'>Looks like you slipped up!</h2>
            <Image
                src='/dog-slip.jpg'
                height={400}
                width={400}
                alt='dog slipping'
                    />
            <p className='text-lg'>Here&apos;s the way <Link href='/' className='text-blue-500 underline'>home</Link></p>
        </div>
    </main>
  )
}
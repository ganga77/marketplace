'use client'

import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
export default function Header({session}: {session:Session}){
    return (
        <header className="border-b p-4 flex items-center justify-between">
            <Link
            className="text-blue-600 font-bold text-2xl"
            href={'/'}>
                Marketplace
            </Link>

            <nav className="flex gap-4  *:rounded ">
                <Link className="border border-blue-600 text-blue-600 inline-flex gap-1 items-center px-2 mr-4"
                href={'/new'}>Post an ad</Link>
                <span className="text-gray-300 text-lg">|</span>
                {!session?.user && (
                    <>
                    <button className="border-0 text-gray-600">Signup</button>
                <button 
                onClick={() => signIn('google')}
                className="bg-blue-600 text-white border-0 px-6">
                Login
                </button>
                </>
                )}

                {session?.user && (
                    <Link href={'/account'}>
                        <Image src={session.user.image as string} alt={'avatar'} width={34} height={34}
                        className="rounded-md"/>
                    </Link>
                    
                )}
                
            </nav>
        </header>
    )
}
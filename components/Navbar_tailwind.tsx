'use client'
import React from 'react'
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LuPenSquare } from "react-icons/lu";
import { ModeToggle } from './Toggle';
import Link from 'next/link';

const Navbar_tailwind = () => {
    return (
        <nav className='w-4 my-1 mx-2 p-1 flex'>
            <div className="flex">
                <Link href="/" className='hover:text-zinc-700 flex gap-2 items-center'>
                    <LuPenSquare />
                    Articlyfy</Link>
            </div>
            <div className='flex items-center mx-3'>
                <Link href="/">Write</Link>
                <div className='mx-5'>
                    <ModeToggle />

                </div>
                <Link href="/signin">
                    <Button className='mx-2 w-15 h-8'>Sign In</Button>
                </Link>
                <Link href="/signup">
                    <Button className='mx-2 w-15 h-8'>Sign Up</Button>
                </Link>
                <Button className='mx-2 w-15 h-8'>Sign Out</Button>
                <Avatar className='mx-10 w-8 h-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
        </nav>
    )
}

export default Navbar_tailwind;

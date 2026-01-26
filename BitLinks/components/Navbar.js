import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='h-15 bg-purple-700 flex justify-between px-2 items-center text-white'>
        <div className="logo font-bold text-2xl"><Link href="/">BitLinks</Link></div>
        <ul className='flex justify-center gap-6'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/shorten"><li>Shortern Url</li></Link>
            <li className='flex gap-4'>
                <Link href="/shorten"><button className='cursor-pointer py-1 font-bold bg-purple-500 shadow-lg p-3 rounded-lg'>Try Now</button></Link>
                <Link href="/github" target='_blank'><button className='cursor-pointer py-1 font-bold bg-purple-500 shadow-lg p-3 rounded-lg'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

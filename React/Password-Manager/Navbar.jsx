import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 flex justify-between items-center px-4 h-15 text-white'>
        <div className="logo font-bold text-2xl">
            <span className='text-green-400'>&lt;</span>
            Pass<span className='text-green-400'>OP/&gt;</span>
            </div>
      <ul className='flex gap-5'>
        <li><a className="hover:font-bold"href="/">Home</a></li>
        <li><a className="hover:font-bold"href="/">About</a></li>
        <li><a className="hover:font-bold"href="/">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

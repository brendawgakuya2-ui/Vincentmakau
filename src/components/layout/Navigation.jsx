import React, { useState, useRef, useEffect } from 'react'

export default function Navigation(){
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape') setOpen(false)
    }
    if(open){
      document.addEventListener('keydown', onKey)
      // move focus to first link
      setTimeout(() => firstLinkRef.current?.focus(), 50)
    } else {
      document.removeEventListener('keydown', onKey)
      // return focus to menu button when closing
      menuButtonRef.current?.focus()
    }
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-6 text-sm">
        <li><a className="hover:text-primary" href="#features">Features</a></li>
        <li><a className="hover:text-primary" href="#about">About</a></li>
        <li><a className="hover:text-primary" href="#contact">Contact</a></li>
        <li><a className="inline-block px-4 py-2 rounded-md bg-primary text-white text-sm" href="#contact">Get Started</a></li>
      </ul>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          ref={menuButtonRef}
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Menu"
          className="p-2 rounded bg-neutral-100"
          onClick={() => setOpen(v => !v)}>
          {open ? 'Close' : 'Menu'}
        </button>

        {open && (
          <div id="mobile-menu" className="absolute right-4 top-20 bg-white shadow-lg rounded-md w-64 z-50">
            <ul className="flex flex-col p-4 gap-3">
              <li><a ref={firstLinkRef} className="focus:outline-none focus:ring-2 focus:ring-primary" href="#features" onClick={() => setOpen(false)}>Features</a></li>
              <li><a className="focus:outline-none focus:ring-2 focus:ring-primary" href="#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a className="focus:outline-none focus:ring-2 focus:ring-primary" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
              <li><a className="inline-block px-4 py-2 rounded-md bg-primary text-white text-sm text-center" href="#contact" onClick={() => setOpen(false)}>Get Started</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

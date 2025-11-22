import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-12">
      <div className="container py-10 text-sm text-neutral-600">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-bold">V</div>
              <div>
                <div className="font-semibold">Vincent</div>
                <div className="text-xs text-neutral-500">Design & Strategy</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} Vincent. All rights reserved.</div>
          </div>

          <div className="flex gap-8 items-center">
            <nav className="hidden lg:flex gap-4 text-sm text-neutral-600">
              <a href="#features" className="hover:text-primary">Services</a>
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </nav>
            <div className="text-xs text-neutral-500">Built with React + Tailwind</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

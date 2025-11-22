import React from 'react'
import Navigation from './Navigation'

export default function Header(){
  return (
    <header className="bg-neutral-50 border-b border-neutral-200">
      <div className="container flex items-center justify-between py-8 lg:py-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center text-white font-bold" aria-hidden="true">V</div>
          <div>
            <h1 className="text-lg lg:text-heading-lg font-semibold leading-tight">Vincent</h1>
            <p className="text-xs lg:text-sm text-neutral-600">Design & Strategy</p>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  )
}

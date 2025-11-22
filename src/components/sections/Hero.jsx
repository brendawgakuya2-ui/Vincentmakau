import React from 'react'
import ResponsiveImage from '../common/ResponsiveImage'
import hero from '../../assets/images/hero.jpg'

export default function Hero(){
  return (
    <section className="bg-white">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-28">
        <div className="lg:pr-8">
          <p className="text-sm text-secondary font-semibold">New — 2025 Launch</p>
          <h2 className="mt-4 text-4xl lg:text-display-lg leading-tight">Design that moves business forward</h2>
          <p className="mt-6 text-neutral-700 max-w-xl text-lg">Vincent helps product teams craft clear experiences and scalable design systems that convert. We combine product strategy, research, and pixel-perfect interfaces to deliver measurable outcomes.</p>
          <div className="mt-8 flex gap-4">
            <a className="px-6 py-3 bg-primary text-white rounded-md" href="#contact">Get Started</a>
            <a className="px-6 py-3 border rounded-md text-neutral-800" href="#features">See Services</a>
          </div>
        </div>
        <div>
          <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{aspectRatio: '16/9'}}>
            <ResponsiveImage
              src={hero}
              alt="Team working on product design"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

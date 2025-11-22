import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl lg:text-display-md font-semibold">Our Story</h3>
          <p className="mt-4 text-neutral-700 text-base lg:text-lg">Vincent was founded to bridge the gap between meaningful product strategy and delightful interfaces. We work with teams who value clarity, measurable outcomes, and beautiful design.</p>
          <p className="mt-4 text-neutral-600">Target audience: product teams, startups, and small agencies looking to scale design processes.</p>
        </div>
        <div>
          <div className="w-full h-64 lg:h-72 bg-neutral-200 rounded-lg" role="img" aria-label="About image placeholder"></div>
        </div>
      </div>
    </section>
  )
}

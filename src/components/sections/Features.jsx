import React from 'react'
import Card from '../common/Card'
import product from '../../assets/images/product.jpg'
import systems from '../../assets/images/systems.jpg'
import strategy from '../../assets/images/strategy.jpg'

const features = [
  {title: 'Product Design', body: 'User-centred interfaces and flows that increase engagement.', image: product},
  {title: 'Design Systems', body: 'Reusable components and tokens for consistent interfaces.', image: systems},
  {title: 'Strategy', body: 'Research-led roadmaps connecting design to business goals.', image: strategy}
]

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="container">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <p className="mt-3 text-neutral-600 max-w-xl">Comprehensive design services tailored for product teams and startups.</p>
        <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <Card key={f.title} title={f.title} body={f.body} image={f.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

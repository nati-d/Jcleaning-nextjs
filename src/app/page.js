import CompanyInfo from '@/components/CompanyInfo'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Package from '@/components/Package'
import RequestQuoteForm from '@/components/RequestQuoteForm'
import ServiceComponent from '@/components/ServiceComponent'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonials'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'

const page = () => {
  return (
    <div className='w-full lg:max-w-[1500px] m-auto overflow-hidden'>
      <Hero/>
      <CompanyInfo/>
      <ServiceComponent/>
      <Team/>
      {/* <Package/> */}
      <RequestQuoteForm/>
      <Testimonial/>
      <WorkWithUs/>
    </div>
  )
}

export default page

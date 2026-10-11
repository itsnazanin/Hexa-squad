import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import Services from '../components/landing/Services'
import CourseSection from '../components/landing/CourseSection'
import CategorySection from '../components/landing/CategorySection'
import SliderSection from '../components/landing/SliderSection'
import ArticlesSection from '../components/landing/Article/ArticlesSection'


const Landing = () => {
  return (
    <>
    <main className='w-full h-fit'>
        <HeroSection/>
        <Services/>
        <CourseSection/>
        <CategorySection/>
        <SliderSection/>
        <ArticlesSection/>
    </main>
    </>
  )
}

export default Landing
import React from 'react'
import Calculator from '../components/Calculator'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Partnership from '../components/Partnership'
import Bookacall from '../components/Bookacall'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Calculator />
      <Partnership/>
      <Bookacall/>
    </div>
  )
}

export default Home

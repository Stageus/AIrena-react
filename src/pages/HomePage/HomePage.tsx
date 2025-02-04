import React from 'react'
import Authentication from '#features/Authentication/ui/Authentication/Authentication'
import './HomePage.css'

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>홈페이지</h1>
      <Authentication />
    </div>
  )
}

export default HomePage

import React from 'react'
import DocHead from '@/components/doc-head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HomeView from '@/features/home'

const HomePage = () => {
  return (
    <div>
      <DocHead title="July's Site" />
      {/* <Header /> */}
      <HomeView />
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage

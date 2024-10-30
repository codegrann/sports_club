import React from 'react'

import { Footer, Header, HeroSection, NewsGrid, StoreSection } from './components/Index'

function App() {

  return (
    <>
      <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <NewsGrid />
        <StoreSection />
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App

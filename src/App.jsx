import React from 'react'

import { Footer, Header, HeroSection, NewsGrid, NewsGridAll, StoreSection, Tickets, FirstTeamSection, Players } from './components/Index'

function App() {

  return (
    <>
      <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <NewsGrid />
        <FirstTeamSection />
        <Tickets />
        <StoreSection />
        <NewsGridAll />
        <Players />
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App;

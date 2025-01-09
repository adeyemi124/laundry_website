import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBuilders from './components/TrustBuilders'
import ServiceBenefits from './components/ServiceBenefits'
import ServiceCategories from './components/ServiceCategories'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsappButton'
import FAQ from './components/FAQ'



function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <TrustBuilders />
      <ServiceBenefits />
      <ServiceCategories />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App


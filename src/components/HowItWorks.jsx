import React from 'react'
import { PhoneCall, Truck, ShoppingBag, CreditCard } from 'lucide-react'

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <PhoneCall className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Book a Pickup</h3>
            <p className="text-gray-600">Call us or use WhatsApp to schedule your laundry pickup</p>
          </div>
          <div className="text-center">
            <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. We Collect</h3>
            <p className="text-gray-600">Our team picks up your laundry from your location</p>
          </div>
          <div className="text-center">
            <ShoppingBag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. We Clean</h3>
            <p className="text-gray-600">Your clothes are professionally cleaned and cared for</p>
          </div>
          <div className="text-center">
            <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">4. Delivery & Payment</h3>
            <p className="text-gray-600">We deliver your clean clothes and collect payment</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Estimated turnaround time: 3 days (express options available)</p>
          <p className="text-gray-600">Payment options: Cash, Bank Transfer, or Mobile Money</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


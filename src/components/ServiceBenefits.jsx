import React from 'react'
import { Clock, DollarSign, Zap, Truck } from 'lucide-react'

const ServiceBenefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Laundry Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3-Day Turnaround</h3>
            <p className="text-gray-600">Quick service to fit your busy schedule</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Quality service that won't break the bank</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
            <p className="text-gray-600">State-of-the-art machines for best results</p>
          </div>
          <div className="text-center">
            <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Timely Pickup & Delivery</h3>
            <p className="text-gray-600">Convenient service across Ogbomoso</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceBenefits


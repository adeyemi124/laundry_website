import React from 'react'
import { Shield, Star, Users } from 'lucide-react'

const TrustBuilders = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <Shield className="text-blue-600 w-12 h-12 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Registered Business</h3>
              <p className="text-gray-600">CAC Certified</p>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="text-blue-600 w-12 h-12 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">5 Years in Business</h3>
              <p className="text-gray-600">Trusted in Ogbomoso</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="text-blue-600 w-12 h-12 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">100+ Happy Customers</h3>
              <p className="text-gray-600">And counting!</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted by Local Businesses</h2>
          <div className="flex justify-center space-x-8">
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Partner 1" className="h-12 w-24 object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Partner 2" className="h-12 w-24 object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Partner 3" className="h-12 w-24 object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBuilders


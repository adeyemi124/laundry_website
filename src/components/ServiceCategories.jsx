import React from 'react'
import { Briefcase, GraduationCap, Home, Users } from 'lucide-react'

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Package</h3>
            <p className="text-gray-600 mb-4">Perfect for busy working professionals</p>
            <ul className="text-sm text-gray-600">
              <li>✓ Express 2-day service</li>
              <li>✓ Starching</li>
              <li>✓ Shirt pressing</li>
              <li>✓ Stain treatment</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Special</h3>
            <p className="text-gray-600 mb-4">Affordable options for students</p>
            <ul className="text-sm text-gray-600">
              <li>✓ 3-day turnaround</li>
              <li>✓ Bulk discounts</li>
              <li>✓ Pickup from campus</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Bundle</h3>
            <p className="text-gray-600 mb-4">For hotels, restaurants, and offices</p>
            <ul className="text-sm text-gray-600">
              <li>✓ Weekly pickup & delivery</li>
              <li>✓ Volume pricing</li>
              <li>✓ Customized service plans</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <Home className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Family Package</h3>
            <p className="text-gray-600 mb-4">Ideal for busy households</p>
            <ul className="text-sm text-gray-600">
              <li>✓ Weekly service</li>
              <li>✓ Folding & organizing</li>
              <li>✓ Special care for delicates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories


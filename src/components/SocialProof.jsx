import React from 'react'
import { Star } from 'lucide-react'

const SocialProof = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
            <img src="https://tse3.mm.bing.net/th?id=OIP.ZKMzQ9n2CRpUcyrZwJhHDAHaFc&pid=Api" 
  alt="Black African Pastor" 
  className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 className="font-semibold">Pastor Ologunde Samson</h4>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">"They provide excellent service. They do a good job making my clothes cleaner and I have never had any reason to complain. Their pickup and delivery also make my life much easier."</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Customer 2" className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 className="font-semibold">Adeleke Joshua</h4>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">"As a Lautech student, I find their prices affordable compared to others and their pickup reduces the stress of moving up and down. I would recommend them for just about any person looking to get their clothes dry cleaned."</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
            <img
  src="https://images.unsplash.com/photo-1649028489371-6e3c36f12ee7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="A woman holding a baby in her arms"
  className="w-12 h-12 rounded-full mr-4 object-cover"
/>
              <div>
                <h4 className="font-semibold">Chinyere Okafor</h4>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p className="text-gray-600">"For a woman with children I find their services very attractive and they are just simply the people I need for washing mine, my husband and my children's clothes. You guys do great job and I would gladly recommend you to any family woman with such workload as well."</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Before & After</h3>
          <div className="flex justify-center space-x-8">
            <img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Before cleaning" className="w-1/4 rounded-lg object-cover h-48" />
            <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="After cleaning" className="w-1/4 rounded-lg object-cover h-48" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof


import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Neat Clothes, Hassle-Free:
    <span className="mt-12 block"></span> 
    {/* <span className="mt-12 block"></span>  */}
    A Laundry Service For
    <span className="mt-4 block"></span> 
    Those With Tight
    <span className="mt-4 block"></span> 
     Schedules And Busy Lives
</h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience hassle-free, high-quality laundry service tailored for busy professionals and students in Ogbomoso.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/message/GSCM6NXDMQNJA1"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Schedule Pickup Now
            </a>
            <a
              href="https://wa.me/message/GSCM6NXDMQNJA1"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Happy customer with clean laundry"
            className="rounded-lg shadow-xl object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

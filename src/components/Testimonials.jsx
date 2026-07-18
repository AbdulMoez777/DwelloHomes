import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials() {
  return (
    
    <section className='bg-[#FEFBF5] w-full mt-10 py-20 '>
      
      {/* Wrapper to keep the content centered and responsive */}
      <div className='max-w-7xl mx-auto px-19'>

        {/* Header  */}
        <div className='mb-16'>
            <h3 className='text-4xl font-extrabold text-[#2B1B12] text-center'>
              What People Say <br/> About Dwello
            </h3>
        </div>

        {/* 3-Column Grid for Testimonials  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {/* Card 1: Sarah Nguyen */}
            <div className='bg-[#DDC7BB] rounded-3xl overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-2'>
                <img src="/images/TestimonialImage1.png" alt="Testimonial Room" className="w-full h-48 object-cover" />
                
                <div className="p-6 flex flex-col">
                    {/* Profile Row */}
                    <div className="flex items-center gap-3">
                        <img src="/images/Person1.png" alt="Sarah Nguyen" className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-[#2B1B12]">Sarah Nguyen</h4>
                            <span className="text-xs font-medium text-[#2B1B12] opacity-80">San Francisco</span>
                        </div>
                        {/* Rating Badge pushed to the right using ml-auto */}
                        <div className="ml-auto bg-white flex items-center gap-1 px-2 py-1 rounded-md shadow-sm">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-[#2B1B12]">5.0</span>
                        </div>
                    </div>
                    {/* Review Text */}
                    <p className="text-[#2B1B12] text-sm font-medium mt-4 leading-relaxed opacity-80">
                        Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.
                    </p>
                </div>
            </div>

            {/* Card 2: Michael Rodriguez */}
            <div className='bg-[#DDC7BB] rounded-3xl overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-2'>
                <img src="/images/TestimonialImage2.png" alt="Testimonial Room" className="w-full h-48 object-cover" />
                
                <div className="p-6 flex flex-col">
                    <div className="flex items-center gap-3">
                        <img src="/images/Person2.png" alt="Michael Rodriguez" className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-[#2B1B12]">Michael Rodriguez</h4>
                            <span className="text-xs font-medium text-[#2B1B12] opacity-80">San Diego</span>
                        </div>
                        <div className="ml-auto bg-white flex items-center gap-1 px-2 py-1 rounded-md shadow-sm">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-[#2B1B12]">4.5</span>
                        </div>
                    </div>
                    <p className="text-[#2B1B12] text-sm font-medium mt-4 leading-relaxed opacity-80">
                        I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!
                    </p>
                </div>
            </div>

            {/* Card 3: Emily Johnson */}
            <div className='bg-[#DDC7BB] rounded-3xl overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-2'>
                <img src="/images/TestimonialImage3.png" alt="Testimonial Room" className="w-full h-48 object-cover" />
                
                <div className="p-6 flex flex-col">
                    <div className="flex items-center gap-3">
                        <img src="/images/Person3.png" alt="Emily Johnson" className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-[#2B1B12]">Emily Johnson</h4>
                            <span className="text-xs font-medium text-[#2B1B12] opacity-80">Los Angeles</span>
                        </div>
                        <div className="ml-auto bg-white flex items-center gap-1 px-2 py-1 rounded-md shadow-sm">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-[#2B1B12]">5.0</span>
                        </div>
                    </div>
                    <p className="text-[#2B1B12] text-sm font-medium mt-4 leading-relaxed opacity-80">
                        Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!
                    </p>
                </div>
            </div>

        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-12">
            <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white p-3 rounded-full transition-colors flex items-center justify-center">
                <ChevronLeft size={24} />
            </button>
            <button className="bg-[#2B1B12] hover:bg-[#3e2c22] text-white p-3 rounded-full transition-colors flex items-center justify-center">
                <ChevronRight size={24} />
            </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
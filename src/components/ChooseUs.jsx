import React from "react";
import { MapPin, User, ClipboardList, Handshake } from "lucide-react";

function ChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 ">
      {/* text div  */}
      <div className="flex flex-col  justify-center items-center gap-4 mb-16">
        <h3 className="text-[#2B1B12] font-extrabold text-4xl">
          Why Choose Us
        </h3>
        <p className="text-[#4F3527] text-center font-medium leading-relaxed max-w-lg">
          Elevating Your Home Buying Experience with Expertise, Integrity, and
          Unmatched Personalized Service
        </p>
      </div>

      {/* Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card1  */}
        <div className="bg-[#E4D1C6] rounded-2xl p-8 flex flex-col items-start transition-transform hover:-translate-y-2">
          <div className="bg-[#FEFBF5] p-4 rounded-xl mb-6 shadow-sm">
            <MapPin size={28} />
          </div>
          <h3 className="font-bold text-[#2B1B12]">Expert Guidance</h3>
          <p className="text-[#4F3527]">
            Benefit from our team's seasoned expertise for a smooth buying
            experience
          </p>
        </div>

        {/* Card 2*/}
        <div className="bg-[#E4D1C6] rounded-2xl p-8 flex flex-col items-start transition-transform hover:-translate-y-2">
          <div className="bg-[#FEFBF5] p-4 rounded-xl mb-6 shadow-sm">
            <User className="text-[#2B1B12]" size={28} />
          </div>
          <h3 className="text-lg font-bold text-[#2B1B12] mb-3">
            Personalized Service
          </h3>
          <p className="text-[#2B1B12] text-sm font-medium leading-relaxed opacity-80">
            Our services adapt to your unique needs, making your journey
            stress-free
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#E4D1C6] rounded-2xl p-8 flex flex-col items-start transition-transform hover:-translate-y-2">
          <div className="bg-[#FEFBF5] p-4 rounded-xl mb-6 shadow-sm">
            <ClipboardList className="text-[#2B1B12]" size={28} />
          </div>
          <h3 className="text-lg font-bold text-[#2B1B12] mb-3">
            Transparent Process
          </h3>
          <p className="text-[#2B1B12] text-sm font-medium leading-relaxed opacity-80">
            Stay informed with our clear and honest approach to buying your home
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#E4D1C6] rounded-2xl p-8 flex flex-col items-start transition-transform hover:-translate-y-2">
          <div className="bg-[#FEFBF5] p-4 rounded-xl mb-6 shadow-sm">
            <Handshake className="text-[#2B1B12]" size={28} />
          </div>
          <h3 className="text-lg font-bold text-[#2B1B12] mb-3">
            Exceptional Support
          </h3>
          <p className="text-[#2B1B12] text-sm font-medium leading-relaxed opacity-80">
            Providing peace of mind with our responsive and attentive customer
            service
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;

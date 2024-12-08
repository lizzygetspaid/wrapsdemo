import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BookingCalendar } from './BookingCalendar';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold-500/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-xl text-gray-400">Select your preferred date and time</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BookingCalendar />
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mt-6">
                <Mail className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">info@luxurywraps.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mt-6">
                <MapPin className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">123 Luxury Lane<br />Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mt-6">
                <Clock className="h-6 w-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-400">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787593566!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1625641234567!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
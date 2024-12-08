import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-400">Get in touch for a free quote</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 (234) 567-8900</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">info@luxurywraps.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400">123 Luxury Lane<br />Dubai, UAE</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
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
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-zinc-900 rounded-md focus:ring-2 focus:ring-gold-500 outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-900 rounded-md focus:ring-2 focus:ring-gold-500 outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 rounded-md focus:ring-2 focus:ring-gold-500 outline-none"
              ></textarea>
            </div>
            
            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787593566!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1625641234567!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
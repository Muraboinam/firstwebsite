import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Contact us" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help. Reach out with any questions, feedback, or inquiries and our team will get back to you shortly.
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-slate-600">
                      123 Luxury Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-slate-600">
                      <a href="mailto:info@luxe.example" className="hover:text-primary-600 transition-colors">
                        info@luxe.example
                      </a><br />
                      <a href="mailto:support@luxe.example" className="hover:text-primary-600 transition-colors">
                        support@luxe.example
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-slate-600">
                      <a href="tel:+12125551234" className="hover:text-primary-600 transition-colors">
                        +1 (212) 555-1234
                      </a><br />
                      <span className="text-sm text-slate-500">
                        Monday-Friday: 9am - 6pm EST
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Store Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4">Store Hours</h3>
                <table className="w-full text-slate-600">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Monday - Friday</td>
                      <td className="py-2">10:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Saturday</td>
                      <td className="py-2">11:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday</td>
                      <td className="py-2">12:00 PM - 5:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fadeIn">
                    <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Your Name <span className="text-secondary-600">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Your Email <span className="text-secondary-600">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Subject */}
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subject <span className="text-secondary-600">*</span>
                      </label>
                      <select 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Returns">Returns & Exchanges</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message <span className="text-secondary-600">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="btn-primary w-full sm:w-auto flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-2xl font-serif mb-8 text-center">Visit Our Flagship Store</h2>
          <div className="rounded-xl overflow-hidden h-96 shadow-lg">
            {/* Replace with actual map embeds when available */}
            <img 
              src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Store location map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-medium mb-3">What is your return policy?</h3>
              <p className="text-slate-700">
                We offer a 30-day return policy for all unworn and unused items in their original packaging. Custom or personalized items are non-returnable. Please contact our customer service team to initiate a return.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-medium mb-3">How long does shipping take?</h3>
              <p className="text-slate-700">
                Standard shipping typically takes 3-5 business days within the continental United States. Express shipping options are available at checkout. International shipping times vary by location, generally ranging from 7-14 business days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-medium mb-3">Do you offer gift wrapping?</h3>
              <p className="text-slate-700">
                Yes, we offer complimentary signature gift wrapping for all purchases. You can select this option during checkout and include a personalized message for the recipient.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-medium mb-3">Are your products authentic?</h3>
              <p className="text-slate-700">
                Absolutely. We guarantee the authenticity of every item we sell. All our products come with authenticity certificates and are sourced directly from designers or authorized distributors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
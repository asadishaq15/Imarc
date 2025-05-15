import { useRef, useState } from 'react';
import { Menu, X } from "lucide-react";
import home1 from '../src/assets/home1.png';
import logo from '../src/assets/logo.png';
import home2 from '../src/assets/home2.jpg';
import ContactSection from './component/ContactSection';
import { FaPhone } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { IoEarth } from 'react-icons/io5';

function LandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  // References for smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Header */}
      <header className="bg-white text-gray-800 shadow-md sticky top-0 z-[999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold flex justify-center items-center">
            <img src={logo} alt="iMarc Logo" className="w-18" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleScroll(homeRef)} className="nav-link hover:text-[#223C8C]">
              Home
            </button>
            <button onClick={() => handleScroll(aboutRef)} className="nav-link hover:text-[#223C8C]">
              About
            </button>
            <button onClick={() => handleScroll(servicesRef)} className="nav-link hover:text-[#223C8C]">
              Services
            </button>
            <button onClick={() => handleScroll(blogsRef)} className="nav-link hover:text-[#223C8C]">
              Blogs
            </button>
            <button onClick={() => handleScroll(testimonialsRef)} className="nav-link hover:text-[#223C8C]">
              Testimonials
            </button>
            <button onClick={() => handleScroll(contactRef)} className="nav-link hover:text-[#223C8C]">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <button
              onClick={() => {
                handleScroll(homeRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-lg"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleScroll(aboutRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-lg"
            >
              About
            </button>
            <button
              onClick={() => {
                handleScroll(servicesRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-lg"
            >
              Services
            </button>
            <button
              onClick={() => {
                handleScroll(blogsRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-lg"
            >
              Blogs
            </button>
            <button
              onClick={() => {
                handleScroll(testimonialsRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-lg"
            >
              Testimonials
            </button>
            <button
              onClick={() => {
                handleScroll(contactRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-lg"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section ref={homeRef} className="bg-gray-100 py-20 container mx-auto">
        <div className="lg:flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-20 lg:gap-12 w-[100%]">
          <div className='lg:w-[50%]'>
            <h1 className="lg:text-7xl sm:text-5xl font-bold text-gray-800 lg:text-start text-center">
              Elevate Your Brand with iMarc
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:text-start text-center">
              We craft professional advertising campaigns tailored to your unique goals.
            </p>
            <div className="mt-8 flex lg:justify-start justify-center">
              <button
                onClick={() => handleScroll(contactRef)}
                className="bg-[#223C8C] text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-center lg:w-[50%]">
            <img src={home1} alt="Hero" className="w-full h-full rounded-4xl shadow-md" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="lg:flex w-[100%] py-16 bg-white px-6 lg:px-8 gap-12">
        <div className="lg:w-[50%] bg-gray-300 rounded-4xl overflow-hidden mb-4 md:mb-0">
          <img src={home2} alt="Creative Lead" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-[50%] mx-auto px-4 lg:text-start  text-center">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800">About iMarc</h2>
          <p className="mt-4 text-gray-600 lg:max-w-3xl">
            Meet our creative lead and discover why iMarc is your trusted partner in advertising excellence.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center md:space-x-8">

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Ms. Creative Lead</h3>
              <p className="mt-2 text-gray-600">
                With 15+ years of experience, Ms. Creative Lead specializes in crafting compelling ad campaigns, leveraging cutting-edge strategies and innovative designs to elevate brands worldwide.
              </p>
              <div className="mt-4 lg:flex lg:justify-start justify-center lg:space-x-4 space-y-3 text-sm text-gray-500">
                <div className='bg-gray-300 rounded-md shadow-2xl px-6 py-3'>17+Years of Experience</div>
                <div className='bg-gray-300 rounded-md shadow-2xl px-6 py-3'>1000+ Clients</div>
                <div className='bg-gray-300 rounded-md shadow-2xl px-6 py-3'>95% Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='px-6 lg:px-12'>
        <ContactSection />
      </div>
      {/* Services Section */}
      {/* <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center">Our Services</h2>
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Comprehensive advertising solutions to amplify your brand’s reach.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#223C8C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Campaign Strategy</h3>
              <p className="mt-2 text-gray-600">Data-driven strategies to boost your brand’s visibility.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#223C8C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Creative Design</h3>
              <p className="mt-2 text-gray-600">Stunning visuals to captivate your audience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#223C8C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Media Planning</h3>
              <p className="mt-2 text-gray-600">Strategic placements to maximize reach.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blogs Section */}
      <section ref={blogsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center">Our Blog</h2>
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in advertising.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={home1} alt="Blog 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">The Power of Digital Campaigns</h3>
              <p className="mt-2 text-gray-600">
                Learn how digital advertising can transform your brand’s reach.
              </p>
              <a href="#" className="mt-4 inline-block text-[#223C8C] hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={home2} alt="Blog 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Designing for Impact</h3>
              <p className="mt-2 text-gray-600">
                Tips to create visuals that leave a lasting impression.
              </p>
              <a href="#" className="mt-4 inline-block text-[#223C8C] hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={home1} alt="Blog 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Media Planning Strategies</h3>
              <p className="mt-2 text-gray-600">
                Optimize your ad placements for maximum ROI.
              </p>
              <a href="#" className="mt-4 inline-block text-[#223C8C] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="lg:text-6xl text-3xl font-bold text-black mb-6">What Our Clients Say</h2>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
            Discover the impact of our advertising expertise through the voices of our valued partners.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-[#223C8C]/20 hover:shadow-lg transition-shadow duration-300">
              <blockquote className="text-lg italic text-gray-600 leading-relaxed">
                "iMarc’s innovative campaign strategy increased our brand visibility by 150% within six months. Their attention to detail is unmatched."
              </blockquote>
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.417 8.309L12 18.677l-7.416 3.623 1.417-8.309-6.001-5.822 8.332-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-semibold text-gray-800">— John Doe, CEO, BrandX</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-[#223C8C]/20 hover:shadow-lg transition-shadow duration-300">
              <blockquote className="text-lg italic text-gray-600 leading-relaxed">
                "Their strategic approach doubled our online engagement in just three months, driving a 40% increase in conversions."
              </blockquote>
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.417 8.309L12 18.677l-7.416 3.623 1.417-8.309-6.001-5.822 8.332-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-semibold text-gray-800">— Sarah Thompson, CMO, TechTrend</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-[#223C8C]/20 hover:shadow-lg transition-shadow duration-300">
              <blockquote className="text-lg italic text-gray-600 leading-relaxed">
                "iMarc’s creative designs and media planning elevated our market presence, resulting in a 25% revenue growth in one year."
              </blockquote>
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.417 8.309L12 18.677l-7.416 3.623 1.417-8.309-6.001-5.822 8.332-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-semibold text-gray-800">— Michael Chen, Founder, Horizon Enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your brand? Let’s start your journey to success together.
          </p>
          <div className='lg:flex w-[100%] py-6'>
            <div className='flex flex-col justify-center w-[50%] space-y-12'>
              <div className='flex items-center gap-6'>
                <div className='bg-[#223C8C] p-3 rounded-full'>
                  <FaPhone size={20} className=' text-white w-6 h-6' />
                </div>
                <div className='flex flex-col justify-start text-start'>
                  <h2 className='font-bold lg:text-2xl'>Contact</h2>
                  <p>---</p>
                </div>
              </div>
              <div className='flex items-center gap-6'>
                <div className='bg-[#223C8C] p-3 rounded-full'>
                  <MdMailOutline size={20} className=' text-white w-6 h-6' />
                </div>
                <div className='flex flex-col justify-start text-start'>
                  <h2 className='font-bold lg:text-2xl'>Email</h2>
                  <p>imarclimitedofficial@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center gap-6'>
                <div className='bg-[#223C8C] p-3 rounded-full'>
                  <IoEarth size={20} className=' text-white w-6 h-6' />
                </div>
                <div className='flex flex-col justify-start text-start'>
                  <h2 className='font-bold lg:text-2xl'>Address</h2>
                  <p>Unit A7 4-6 Greatorex Street LONDON E1 5NF United Kingdom</p>
                </div>
              </div>
            </div>
            <form className="bg-[#F3F3F3] lg:w-[50%] shadow-lg p-8 space-y-6">
              <h3 className="lg:text-4xl text-2xl font-bold mb-4 text-[#223C8C]">Send Us a Message</h3>
              <input type="text" placeholder="Your Name" className="bg-white p-2 pl-6 w-full" />
              <input type="email" placeholder="Your Email" className="bg-white p-2 pl-6 w-full" />
              <input type="text" placeholder="Phone Number" className="bg-white p-2 pl-6 w-full" />
              <textarea placeholder="Write Your Message" className="bg-white p-2 pl-6 w-full h-32"></textarea>
              <button type="submit" className="bg-[#223C8C] hover:bg-black text-white py-3 px-6 rounded w-full">
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A2A44] text-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
            {/* Branding/Logo Section */}
            <div className="space-y-4">
              <p className="lg:text-6xl text-3xl font-bold text-white">iMarc</p>
              <p className="text-sm text-gray-400">
                Your trusted partner in crafting impactful advertising campaigns.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="flex flex-col justify-start items-center text-start  space-y-2 text-sm text-gray-400">
                <button onClick={() => handleScroll(homeRef)} className="hover:text-[#223C8C] transition">
                  Home
                </button>
                <button onClick={() => handleScroll(aboutRef)} className="hover:text-[#223C8C] transition">
                  About
                </button>
                <button onClick={() => handleScroll(servicesRef)} className="hover:text-[#223C8C] transition">
                  Services
                </button>
                <button onClick={() => handleScroll(blogsRef)} className="hover:text-[#223C8C] transition">
                  Blogs
                </button>
                <button onClick={() => handleScroll(testimonialsRef)} className="hover:text-[#223C8C] transition">
                  Testimonials
                </button>
                <button onClick={() => handleScroll(contactRef)} className="hover:text-[#223C8C] transition">
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Email: <a href="mailto:info@imarc.com" className="hover:text-[#223C8C] transition">info@imarc.com</a></p>
                <p>Phone: <a href="tel:+923119813757" className="hover:text-[#223C8C] transition">+92 311 9813757</a></p>
                <p>Office 02 First Floor, USAID Plaza, Blue Area, Islamabad</p>
              </div>
            </div>

            {/* Social Media Links */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#223C8C] transition">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#223C8C] transition">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#223C8C] transition">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#223C8C] transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div> */}
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-xs text-gray-400">© 2025 iMarc Advertising. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
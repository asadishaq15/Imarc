import { useRef, useState } from 'react';
import { Menu, X } from "lucide-react";
import home1 from '../src/assets/home1.jpg'; // Replace with a higher-quality image (e.g., home1-hq.jpg)
import blog1 from '../src/assets/blog1.jpg';
import blog2 from '../src/assets/blog2.png';
import blog3 from '../src/assets/blog3.png';
import logo from '../src/assets/logo.png';
import home2 from '../src/assets/home2.jpg';
import ContactSection from './component/ContactSection';
import { FaPhone } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { IoEarth } from 'react-icons/io5';

function LandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // References for smooth scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "The Power of Digital Campaigns",
      image: blog1,
      summary: "Learn how digital advertising can transform your brand’s reach.",
      content: `
      Digital advertising has revolutionized the way brands connect with their audiences. In today's fast-paced digital landscape, leveraging online platforms allows businesses to target specific demographics with precision, optimize campaigns in real-time, and measure ROI effectively.

      At iMarc, we specialize in creating data-driven digital campaigns that maximize reach and engagement. Whether it's through social media ads, Google Ads, or programmatic advertising, our strategies are designed to deliver measurable results. For instance, one of our recent campaigns for a retail client saw a 200% increase in website traffic and a 50% boost in sales within three months.
    `,
      contentbold1: `Targeted Reach`,
      content2: `Reach the right audience with advanced targeting options.`,
      contentbold2: `Cost Efficiency`,
      content3: `Optimize budgets with real-time adjustments.`,
      contentbold4: `Measurable Results`,
      content4: `Track performance with detailed analytics.`,
      para: `Ready to transform your brand's digital presence? Contact iMarc today to get started!`,
      date: "May 10, 2025",
      author: "Jane Smith",
    },
    {
      id: 2,
      title: "Designing for Impact",
      image: blog2,
      summary: "Tips to create visuals that leave a lasting impression.",
      content: `
      Visual design plays a crucial role in capturing audience attention and conveying your brand message. At iMarc, we believe that impactful design goes beyond aesthetics—it's about creating an emotional connection with your audience.
    `,
      contentbold1: `Understand Your Audience`,
      content2: `Tailor your visuals to resonate with your target demographic.`,
      contentbold2: `Use Bold Colors`,
      content3: `Colors like our signature #223C8C can evoke trust and professionalism.`,
      contentbold4: `Simplify Your Message`,
      content4: `Clear, concise visuals are more memorable.`,
      contentbold5: `Consistency is Key`,
      content5: `Maintain a cohesive style across all brand assets.`,
      para: `
      Our design team recently worked with a tech startup to revamp their branding. By incorporating bold visuals and a streamlined design system, we helped them increase user engagement by 35%. Let iMarc help you create visuals that leave a lasting impression!
    `,
      date: "May 12, 2025",
      author: "Emily Johnson",
    },
    {
      id: 3,
      title: "Media Planning Strategies",
      image: blog3,
      summary: "Optimize your ad placements for maximum ROI.",
      content: `
      Effective media planning is the backbone of a successful advertising campaign. It involves strategically selecting the right channels, timing, and audience to ensure your message reaches the right people at the right time.

      At iMarc, we take a data-driven approach to media planning:
    `,
      contentbold1: `Audience Analysis`,
      content2: `We identify your target audience's media consumption habits.`,
      contentbold2: `Channel Selection`,
      content3: `We choose the best platforms, from TV and radio to digital and social media.`,
      contentbold4: `Budget Optimization`,
      content4: `We allocate resources to maximize ROI.`,
      para: `
      For a recent campaign, we helped a client in the healthcare sector achieve a 30% increase in lead generation by optimizing their media placements across digital and traditional channels. Our strategies ensure your budget is spent wisely, delivering measurable results.

      Contact iMarc to learn how our media planning expertise can boost your campaign performance!
    `,
      date: "May 14, 2025",
      author: "Mark Wilson",
    },
  ];

  const handleScroll = (ref) => {
    const headerHeight = 80; // Adjust based on your header height (including padding)
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight,
      behavior: 'smooth',
    });
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

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Header */}
      <header className="bg-white text-gray-800 shadow-md sticky top-0 z-[999] font-ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold flex justify-center items-center">
            <img src={logo} alt="iMarc Logo" className="w-18" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleScroll(homeRef)} className="nav-link hover:text-[#223C8C] font-bold text-xl">
              Home
            </button>
            <button onClick={() => handleScroll(aboutRef)} className="nav-link hover:text-[#223C8C] font-bold text-xl">
              About
            </button>
            <button onClick={() => handleScroll(servicesRef)} className="nav-link hover:text-[#223C8C] font-bold text-xl">
              Services
            </button>
            <button onClick={() => handleScroll(blogsRef)} className="nav-link hover:text-[#223C8C] font-bold text-xl">
              Blogs
            </button>
            <button onClick={() => handleScroll(testimonialsRef)} className="nav-link hover:text-[#223C8C] font-bold text-xl">
              Testimonials
            </button>
            <button onClick={() => handleScroll(contactRef)} className="nav-link hover:text-[#223C8C] font-bold text-xl">
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
              className="text-gray-800 hover:text-[#223C8C] transition text-xl"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleScroll(aboutRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-xl"
            >
              About
            </button>
            <button
              onClick={() => {
                handleScroll(servicesRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-xl"
            >
              Services
            </button>
            <button
              onClick={() => {
                handleScroll(blogsRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-xl"
            >
              Blogs
            </button>
            <button
              onClick={() => {
                handleScroll(testimonialsRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-xl"
            >
              Testimonials
            </button>
            <button
              onClick={() => {
                handleScroll(contactRef);
                setIsOpen(false);
              }}
              className="text-gray-800 hover:text-[#223C8C] transition text-xl"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section ref={homeRef} id="home" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex justify-center items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="lg:text-6xl text-4xl font-bold text-gray-800 lg:text-left text-center">
                Elevate Your Brand with iMarc
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:text-left text-center">
                We craft professional advertising campaigns tailored to your unique goals.
              </p>
              <div className="mt-8 flex lg:justify-start justify-center">
                <button
                  onClick={() => handleScroll(contactRef)}
                  className="bg-[#223C8C] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#1A2A44] transition"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
              <img
                src={home1} // Replace with a high-quality image (e.g., home1-hq.jpg)
                alt="Hero"
                className="w-full lg:w-[450px] border-8 border-white lg:h-[450px] rounded-full shadow-md object-cover" // Fixed width/height for circle
              />
            </div>
          </div>
        </div>
      </section>

     {/* About Section */}
      <section ref={aboutRef} id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={home2}
                alt="iMarc Owner"
                className="w-full h-auto rounded-4xl object-cover shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center lg:text-left font-ubuntu">
                About iMarc
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-ubuntu">
                Meet our founder and discover why iMarc is your trusted partner in advertising excellence.
              </p>
              <div className="mt-8 flex flex-col md:flex-row items-center md:space-x-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center lg:text-left font-ubuntu">
                    Muhammad Zeeshan Ayub
                  </h3>
                  <p className="mt-2 text-gray-600 text-center lg:text-left font-ubuntu">
                    As the founder of iMarc, Muhammad Zeeshan Ayub brings extensive expertise in advertising, driving innovative campaigns that elevate brands globally through strategic insight and creative vision.
                  </p>
                  <div className="mt-4 flex justify-center lg:justify-start space-x-4 space-y-3 lg:space-y-0 text-sm text-gray-500 flex-wrap">
                    <div className="bg-gray-300 rounded-md shadow-2xl px-6 py-2">Years of Experience</div>
                    <div className="bg-gray-300 rounded-md shadow-2xl px-6 py-2">500+ Clients</div>
                    <div className="bg-gray-300 rounded-md shadow-2xl px-6 py-2">95% Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <ContactSection />
      </div>

      {/* Services Section */}
      {/* <section ref={servicesRef} id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Comprehensive advertising solutions to amplify your brand’s reach.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#223C8C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Campaign Strategy</h3>
              <p className="mt-2 text-gray-600">Data-driven strategies to boost your brand’s visibility.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#223C8C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Creative Design</h3>
              <p className="mt-2 text-gray-600">Stunning visuals to captivate your audience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#223C8C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Media Planning</h3>
              <p className="mt-2 text-gray-600">Strategic placements to maximize reach.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blogs Section */}
      <section ref={blogsRef} id="blogs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center">
            Our Blogs
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in advertising.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => openBlogModal(blog)}
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="mt-2 text-gray-600">{blog.summary}</p>
                <button
                  className="mt-4 inline-block text-[#223C8C] hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    openBlogModal(blog);
                  }}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedBlog && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 sm:mx-6 lg:mx-8 max-h-[90vh] overflow-y-auto border border-gray-100">
            <div className="p-8 sm:p-12">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight font-ubuntu">
                  {selectedBlog.title}
                </h2>
                <button
                  onClick={closeBlogModal}
                  className="text-gray-500 hover:text-[#223C8C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#223C8C] focus:ring-offset-2 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Image Section */}
              <div className="relative mb-10">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>

              {/* Meta Information */}
              <div className="flex items-center space-x-4 mb-8 border-b border-gray-200 pb-4">
                <span className="font-semibold text-gray-800 text-lg font-ubuntu">By {selectedBlog.author}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 font-ubuntu">{selectedBlog.date}</span>
              </div>

              {/* Content Section */}
              <div className="prose prose-lg prose-gray max-w-none font-ubuntu">
                {/* Render main content paragraphs */}
                {selectedBlog.content.trim().split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-base mb-6 font-ubuntu">
                    {paragraph}
                  </p>
                ))}

                {/* Render bold headings and their paragraphs */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm border border-gray-100">
                  {selectedBlog.contentbold1 && (
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 font-ubuntu mb-2">{selectedBlog.contentbold1}</h4>
                      {selectedBlog.content2 && (
                        <p className="text-gray-700 leading-relaxed text-base font-ubuntu">{selectedBlog.content2}</p>
                      )}
                    </div>
                  )}
                  {selectedBlog.contentbold2 && (
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 font-ubuntu mb-2">{selectedBlog.contentbold2}</h4>
                      {selectedBlog.content3 && (
                        <p className="text-gray-700 leading-relaxed text-base font-ubuntu">{selectedBlog.content3}</p>
                      )}
                    </div>
                  )}
                  {selectedBlog.contentbold4 && (
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 font-ubuntu mb-2">{selectedBlog.contentbold4}</h4>
                      {selectedBlog.content4 && (
                        <p className="text-gray-700 leading-relaxed text-base font-ubuntu">{selectedBlog.content4}</p>
                      )}
                    </div>
                  )}
                  {selectedBlog.contentbold5 && (
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 font-ubuntu mb-2">{selectedBlog.contentbold5}</h4>
                      {selectedBlog.content5 && (
                        <p className="text-gray-700 leading-relaxed text-base font-ubuntu">{selectedBlog.content5}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Render closing paragraphs */}
                {selectedBlog.para && selectedBlog.para.trim().split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-base mb-6 font-ubuntu">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer Section */}
              <div className="mt-12 flex justify-end">
                <button
                  onClick={closeBlogModal}
                  className="bg-[#223C8C] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#1A2A44] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#223C8C] focus:ring-offset-2 font-ubuntu"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center mb-6">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Discover the impact of our advertising expertise through the voices of our valued partners.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <p className="mt-4 font-semibold text-gray-800">— Heyward Nick, CEO, BrandX</p>
            </div>
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
              <p className="mt-4 font-semibold text-gray-800">— Simonon Paul, Founder, Horizon Enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-6xl text-3xl font-bold text-gray-800 text-center">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Ready to elevate your brand? Let’s start your journey to success together.
          </p>
          <div className="lg:flex gap-12 py-6">
            <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
              <div className="flex items-center gap-6">
                <div className="bg-[#223C8C] p-3 rounded-full">
                  <FaPhone size={20} className="text-white w-6 h-6" />
                </div>
                <div className="flex flex-col justify-start text-start">
                  <h3 className="text-xl font-bold">Contact</h3>
                  <p>+44-7429915387</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-[#223C8C] p-3 rounded-full">
                  <MdMailOutline size={20} className="text-white w-6 h-6" />
                </div>
                <div className="flex flex-col justify-start text-start">
                  <h3 className="text-xl font-bold">Email</h3>
                  <p>imarclimitedofficial@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-[#223C8C] p-3 rounded-full">
                  <IoEarth size={20} className="text-white w-6 h-6" />
                </div>
                <div className="flex flex-col justify-start text-start">
                  <h3 className="text-xl font-bold">Address</h3>
                  <p>Unit A7 4-6 Greatorex Street LONDON E1 5NF United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <form className="bg-[#F3F3F3] shadow-lg p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-4 text-[#223C8C] text-center">Send Us a Message</h3>
                <input type="text" placeholder="Your Name" className="bg-white p-2 pl-6 w-full" />
                <input type="email" placeholder="Your Email" className="bg-white p-2 pl-6 w-full" />
                <input type="text" placeholder="Phone Number" className="bg-white p-2 pl-6 w-full" />
                <textarea placeholder="Write Your Message" className="bg-white p-2 pl-6 w-full h-32"></textarea>
                <button type="submit" className="bg-[#223C8C] hover:bg-[#1A2A44] text-white py-3 px-6 rounded w-full">
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A2A44] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-4xl font-bold text-white">iMarc</p>
              <p className="text-sm text-gray-400">
                Your trusted partner in crafting impactful advertising campaigns.
              </p>
            </div>
            <div className="space-y-4 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-white lg:pl-6">Quick Links</h3>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <button onClick={() => handleScroll(homeRef)} className="hover:text-[#223C8C] transition text-start">
                  Home
                </button>
                <button onClick={() => handleScroll(aboutRef)} className="hover:text-[#223C8C] transition text-start">
                  About
                </button>
                <button onClick={() => handleScroll(servicesRef)} className="hover:text-[#223C8C] transition text-start">
                  Services
                </button>
                <button onClick={() => handleScroll(blogsRef)} className="hover:text-[#223C8C] transition text-start">
                  Blogs
                </button>
                <button onClick={() => handleScroll(testimonialsRef)} className="hover:text-[#223C8C] transition text-start">
                  Testimonials
                </button>
                <button onClick={() => handleScroll(contactRef)} className="hover:text-[#223C8C] transition text-start">
                  Contact
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Email: <a href="mailto:imarclimitedofficial@gmail.com" className="hover:text-[#223C8C] transition">imarclimitedofficial@gmail.com</a></p>
                <p>Phone: <a href="tel:+923119813757" className="hover:text-[#223C8C] transition">+44-7429915387</a></p>
                <p>Office: Unit A7 4-6 Greatorex Street LONDON E1 5NF United Kingdom</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">© 2025 iMarc Advertising. All rights reserved. Last updated: May 16, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
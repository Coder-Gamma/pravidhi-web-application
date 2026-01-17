import { Section } from "@/components/UI/Section";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/UI/Button";
// import { Heading } from "@/components/UI/Heading";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Section padding="hero" className=" mx-auto  ">
        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-8">
          // Get in Touch
        </p>
        {/* <Heading level={1} className=" md:text-center lg:mb-16 mb-2 ">
          <span className="text-primary-600">Get in Touch</span>
        </Heading> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="bg-gray-50rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Have a question or need support? Our team is here to help you
              every step of the way.
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">
                    <MapPin />
                  </span>
                  <span className="text-muted">
                    Sirjana Chowk, Pokhara Nepal
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">
                    <Phone />
                  </span>
                  <span className="text-muted">+977 900000000</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600">
                    <Mail />
                  </span>
                  <span className="text-muted">pravidhidigital@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-text font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-text font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-text font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Write your subject here......"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-text font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here......"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  required
                />
              </div>

              <Button variant="primary" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </Section>
      <Section padding="hero" className="">
        <p className="text-accent text-3xl text-center py-8">
          Find us in Google map:
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.849589718867!2d83.97609698927683!3d28.211882028325906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c3f14b998d%3A0x1260b938c04b8e87!2sPravidhi%20Digital%20Innovations%20Nepal%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1768676512010!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pravidhi Digital Innovations Location - Sirjana Chowk, Pokhara"
          />
        </div>
      </Section>
    </>
  );
};

export default Contact;

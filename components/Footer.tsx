import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">PROVIDENCE CLINIC</span>
            </div>
            <p className="text-sm mb-4">
              Providing quality healthcare services with compassion and excellence. Your trusted partner in health and wellness.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors duration-200">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-pointer">
                General Medicine
              </li>
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-pointer">
                Pediatric Care
              </li>
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-pointer">
                Maternity Services
              </li>
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-pointer">
                Laboratory Services
              </li>
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-pointer">
                Emergency Care
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-primary-400" />
                <span>123 Healthcare Avenue, Medical District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="flex-shrink-0 mt-1 text-primary-400" />
                <div>
                  <div>+234 123 456 7890</div>
                  <div>+234 098 765 4321</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="flex-shrink-0 mt-1 text-primary-400" />
                <div>
                  <div>info@providenceclinic.com.ng</div>
                  <div>hr@providenceclinic.com.ng</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} Providence Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

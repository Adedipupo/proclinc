import Link from 'next/link'
import { Heart, Stethoscope, Users, Clock, Shield, Award } from 'lucide-react'
import ImageGallery from '@/components/ImageGallery'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-primary-200">Providence Clinic</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Your trusted partner in healthcare. Providing quality medical services with compassion and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-center">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Providence Clinic?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering exceptional healthcare services that prioritize your health and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Medical Team
              </h3>
              <p className="text-gray-600">
                Our experienced healthcare professionals are dedicated to providing personalized care for every patient.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Emergency Care
              </h3>
              <p className="text-gray-600">
                Round-the-clock emergency services ensuring you get the care you need, whenever you need it.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modern Facilities
              </h3>
              <p className="text-gray-600">
                State-of-the-art medical equipment and comfortable facilities for optimal patient care and comfort.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                We treat every patient with dignity, respect, and the compassion they deserve during their healthcare journey.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Family-Centered Approach
              </h3>
              <p className="text-gray-600">
                We provide comprehensive healthcare services for the entire family, from infants to seniors.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Standards
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of medical care and continuously improve our services for better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet your medical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              'General Medicine',
              'Pediatric Care',
              'Maternity Services',
              'Laboratory Services',
              'Diagnostic Imaging',
              'Dental Care',
              'Surgery',
              'Pharmacy',
              'Health Screening'
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional care delivered by experienced specialists.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <ImageGallery />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Schedule an appointment today and let us take care of your health needs.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

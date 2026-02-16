import { Target, Eye, Award, Users, Heart, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Providence Clinic
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Dedicated to providing exceptional healthcare services with compassion, integrity, and excellence since our establishment.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Providence Clinic is a premier healthcare facility committed to delivering world-class medical services to our community. Established with the vision of making quality healthcare accessible to all, we have grown into a trusted name in medical excellence.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our state-of-the-art facility is equipped with modern medical technology and staffed by highly qualified healthcare professionals who are passionate about patient care. We believe that every patient deserves personalized attention, compassionate care, and the best possible medical outcomes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Providence Clinic, we don't just treat illnesses; we partner with our patients on their journey to optimal health and wellness. Our holistic approach to healthcare ensures that we address not just the symptoms, but the overall wellbeing of every individual who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare services that improve the health and wellbeing of our community. We strive to deliver patient-centered care with compassion, integrity, and respect for human dignity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare provider in Nigeria, recognized for excellence in medical care, innovation in treatment approaches, and unwavering commitment to patient satisfaction and community health improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compassion
              </h3>
              <p className="text-gray-600">
                We treat every patient with empathy, kindness, and respect, understanding that healthcare is personal.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in medical care and continuously improve our services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We uphold honesty, transparency, and ethical practices in all our interactions and services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Teamwork
              </h3>
              <p className="text-gray-600">
                We collaborate effectively to provide comprehensive, coordinated care for better outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and methods to provide cutting-edge medical solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Accountability
              </h3>
              <p className="text-gray-600">
                We take responsibility for our actions and outcomes, always putting patient safety first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Patients Choose Providence Clinic
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                'Experienced and qualified medical professionals',
                'Modern, well-equipped facilities',
                '24/7 emergency services',
                'Affordable healthcare packages',
                'Patient-centered approach',
                'Comprehensive range of medical services',
                'Convenient location and accessibility',
                'Strong commitment to quality and safety'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </div>
                  <span className="text-primary-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

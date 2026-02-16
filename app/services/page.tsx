import { Activity, Baby, Heart, Microscope, Scan, Pill, Scissors, Ambulance, Smile } from 'lucide-react'

const services = [
  {
    icon: Activity,
    title: 'General Medicine',
    description: 'Comprehensive primary care for adults including diagnosis, treatment, and management of common illnesses and chronic conditions. Our general practitioners provide preventive care, health screenings, and referrals to specialists when needed.'
  },
  {
    icon: Baby,
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants, children, and adolescents. We provide immunizations, growth monitoring, developmental assessments, and treatment of childhood illnesses in a child-friendly environment.'
  },
  {
    icon: Heart,
    title: 'Maternity Services',
    description: 'Complete prenatal, delivery, and postnatal care for expectant mothers. Our experienced obstetricians and midwives ensure safe pregnancies and deliveries with 24/7 maternity ward support.'
  },
  {
    icon: Microscope,
    title: 'Laboratory Services',
    description: 'State-of-the-art diagnostic laboratory offering comprehensive testing including blood work, urinalysis, microbiology, and pathology services with quick turnaround times and accurate results.'
  },
  {
    icon: Scan,
    title: 'Diagnostic Imaging',
    description: 'Advanced imaging services including X-rays, ultrasound, and CT scans. Our modern equipment and skilled radiologists ensure accurate diagnoses for various medical conditions.'
  },
  {
    icon: Smile,
    title: 'Dental Care',
    description: 'Complete dental services including routine checkups, cleanings, fillings, extractions, and cosmetic dentistry. Our dental team maintains your oral health with preventive and restorative care.'
  },
  {
    icon: Scissors,
    title: 'Surgery',
    description: 'Modern surgical facilities equipped for both minor and major procedures. Our skilled surgeons perform elective and emergency surgeries with emphasis on patient safety and optimal outcomes.'
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'On-site pharmacy stocked with a wide range of medications and medical supplies. Our pharmacists provide medication counseling and ensure proper drug dispensing for all prescriptions.'
  },
  {
    icon: Ambulance,
    title: 'Emergency Services',
    description: '24/7 emergency care for urgent medical situations. Our emergency department is equipped to handle trauma, cardiac emergencies, and acute illnesses with rapid response and expert care.'
  }
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Medical Services
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Providence Clinic offers a comprehensive range of medical services designed to meet all your healthcare needs under one roof. Our team of experienced healthcare professionals is dedicated to providing quality care with compassion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-primary-600" size={32} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Additional Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Cardiology Consultations',
              'Diabetes Management',
              'Hypertension Care',
              'Antenatal Care',
              'Family Planning',
              'Health Screening Packages',
              'Vaccination Services',
              'Minor Surgical Procedures',
              'Medical Consultations',
              'Wound Care & Dressing',
              'Physiotherapy',
              'Nutritional Counseling'
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Operating Hours
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-primary-200">
                <span className="font-semibold text-gray-900">Monday - Friday</span>
                <span className="text-gray-700">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary-200">
                <span className="font-semibold text-gray-900">Saturday</span>
                <span className="text-gray-700">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary-200">
                <span className="font-semibold text-gray-900">Sunday</span>
                <span className="text-gray-700">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-900">Emergency Services</span>
                <span className="text-primary-600 font-bold">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

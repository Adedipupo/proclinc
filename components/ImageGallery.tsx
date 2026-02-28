'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryItem {
  id: string
  title: string
  description: string
  imagePath: string
  fallbackColor: string
  icon: React.ReactNode
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Reception Area',
    description: 'Welcoming and comfortable waiting area',
    imagePath: '/images/reception.jpg',
    fallbackColor: 'from-primary-100 to-primary-200',
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: '2',
    title: 'Consultation Room',
    description: 'Private consultation spaces',
    imagePath: '/images/consultation.jpg',
    fallbackColor: 'from-blue-100 to-blue-200',
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: '3',
    title: 'Laboratory',
    description: 'Advanced diagnostic equipment',
    imagePath: '/images/laboratory.jpg',
    fallbackColor: 'from-green-100 to-green-200',
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: '4',
    title: 'Our Medical Team',
    description: 'Experienced healthcare professionals',
    imagePath: '/images/team.jpg',
    fallbackColor: 'from-purple-100 to-purple-200',
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: '5',
    title: 'Patient Wards',
    description: 'Comfortable recovery rooms',
    imagePath: '/images/ward.jpg',
    fallbackColor: 'from-orange-100 to-orange-200',
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: '6',
    title: 'Our Facility',
    description: 'Modern clinic building',
    imagePath: '/images/exterior.jpg',
    fallbackColor: 'from-teal-100 to-teal-200',
    icon: (
      <svg className="w-16 h-16 mx-auto mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
]

export default function ImageGallery() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our modern, well-equipped medical facility designed for your comfort and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative h-72 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {!imageErrors[item.id] ? (
                <>
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(item.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.fallbackColor} flex items-center justify-center`}>
                  <div className="text-center p-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                      {item.icon}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-3">Add image: {item.imagePath}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-center bg-primary-50 rounded-lg p-6">
          <p className="text-gray-700 text-sm mb-2">
            <strong>📸 To add your clinic photos:</strong>
          </p>
          <p className="text-gray-600 text-sm">
            Place your images in <code className="bg-white px-2 py-1 rounded text-primary-600 font-mono">/public/images/</code> with these names:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {galleryItems.map((item) => (
              <code key={item.id} className="bg-white px-3 py-1 rounded text-xs text-gray-700 font-mono">
                {item.imagePath.split('/').pop()}
              </code>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

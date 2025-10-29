"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Users, Heart, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      position: "General Manager",
      image: "/api/placeholder/300/300",
      description:
        "With over 15 years in luxury hospitality, Sarah ensures every guest receives exceptional service.",
    },
    {
      name: "James Rodriguez",
      position: "Head Chef",
      image: "/api/placeholder/300/300",
      description:
        "Award-winning chef with a passion for creating unforgettable culinary experiences.",
    },
    {
      name: "Emma Thompson",
      position: "Spa Director",
      image: "/api/placeholder/300/300",
      description:
        "Wellness expert dedicated to providing rejuvenating spa treatments and relaxation.",
    },
    {
      name: "Michael Chen",
      position: "Concierge Manager",
      image: "/api/placeholder/300/300",
      description:
        "Local expert who knows all the best spots and can arrange any experience you desire.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, ensuring our guests receive the highest quality service.",
    },
    {
      icon: Users,
      title: "Hospitality",
      description:
        "Genuine care and attention to our guests' needs, creating memorable experiences that last a lifetime.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "Continuously improving our services and amenities to exceed expectations and set new standards.",
    },
    {
      icon: Star,
      title: "Luxury",
      description:
        "Providing an unparalleled level of comfort, elegance, and sophistication in every aspect of our service.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/800"
            alt="Azure Haven Hotel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/80 to-[#0A3D62]/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            About Azure Haven
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200"
          >
            Where luxury meets the sea
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
                Founded in 2010, Azure Haven Hotel was born from a vision to
                create the ultimate luxury seaside retreat. Nestled along the
                pristine coastline, our hotel has become a sanctuary for those
                seeking unparalleled comfort and breathtaking ocean views.
              </p>
              <p className="text-lg text-[#9CA3AF] mb-6 leading-relaxed">
                Over the years, we have welcomed guests from around the world,
                each leaving with cherished memories and a deep appreciation for
                our commitment to excellence. Our story is written in the smiles
                of our guests and the moments of pure bliss we help create.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0A3D62]">500+</div>
                  <div className="text-sm text-[#9CA3AF]">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0A3D62]">15</div>
                  <div className="text-sm text-[#9CA3AF]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0A3D62]">50+</div>
                  <div className="text-sm text-[#9CA3AF]">Awards Won</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <Image
                  src="/api/placeholder/300/200"
                  alt="Hotel exterior"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/api/placeholder/300/300"
                  alt="Lobby"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/api/placeholder/300/400"
                  alt="Restaurant"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              The principles that guide everything we do at Azure Haven Hotel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 h-full">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#0A3D62] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#9CA3AF]">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              The dedicated professionals who make your stay unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#D4AF37] font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-sm text-[#9CA3AF]">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Our Location
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Perfectly positioned along the pristine coastline for the ultimate
              seaside experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#D4AF37]" />
                      <span className="text-[#9CA3AF]">
                        123 Ocean Drive, Seaside City, SC 12345
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                      <span className="text-[#9CA3AF]">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                      <span className="text-[#9CA3AF]">
                        info@azurehaven.com
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-[#2B2B2B] mb-3">
                      Nearby Attractions
                    </h4>
                    <ul className="space-y-2 text-[#9CA3AF]">
                      <li>• Seaside National Park (5 minutes)</li>
                      <li>• Historic Downtown (10 minutes)</li>
                      <li>• Marina District (15 minutes)</li>
                      <li>• Airport (30 minutes)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312997933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1625073982878!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}






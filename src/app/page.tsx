"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Heart,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  // Sample data
  const featuredRooms = [
    {
      id: "1",
      name: "Ocean View Suite",
      description:
        "Luxurious suite with panoramic ocean views, private balcony, and premium amenities.",
      price: 450,
      image: "/api/placeholder/400/250",
      amenities: ["wifi", "breakfast", "parking"],
      rating: 4.9,
      maxGuests: 2,
      featured: true,
    },
    {
      id: "2",
      name: "Deluxe Room",
      description:
        "Spacious room with modern amenities and comfortable furnishings.",
      price: 280,
      image: "/api/placeholder/400/250",
      amenities: ["wifi", "breakfast"],
      rating: 4.7,
      maxGuests: 2,
    },
    {
      id: "3",
      name: "Family Suite",
      description:
        "Perfect for families with separate living area and two bedrooms.",
      price: 380,
      image: "/api/placeholder/400/250",
      amenities: ["wifi", "breakfast", "parking"],
      rating: 4.8,
      maxGuests: 4,
    },
  ];

  const facilities = [
    {
      icon: Waves,
      title: "Infinity Pool",
      description: "Stunning ocean-view infinity pool with poolside bar",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Award-winning restaurant with world-class cuisine",
    },
    {
      icon: Heart,
      title: "Spa & Wellness",
      description: "Luxurious spa treatments and wellness programs",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym with personal trainers",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely breathtaking! The ocean view from our suite was incredible. The service was impeccable and the staff went above and beyond to make our stay memorable.",
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      text: "The perfect luxury getaway. The spa treatments were divine and the restaurant served the most delicious meals. Can't wait to come back!",
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "Azure Haven exceeded all our expectations. The attention to detail and personalized service made our anniversary celebration truly special.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Azure Haven Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="block mb-2">Welcome to</span>
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Azure Haven
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl mb-16 text-slate-200 font-light max-w-5xl mx-auto leading-relaxed"
          >
            Where luxury meets the ocean. Experience unparalleled elegance at
            our award-winning seaside sanctuary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-modern-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Your Stay
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300"
            >
              Explore Rooms
            </Button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-10 leading-tight">
                Where Luxury Meets the Sea
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nestled along the pristine coastline, Azure Haven Hotel offers
                an unparalleled luxury experience. Our 5-star resort combines
                breathtaking ocean views with world-class amenities and
                impeccable service.
              </p>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                From our infinity pool overlooking the azure waters to our
                award-winning spa, every detail has been crafted to provide an
                unforgettable escape.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white px-10 py-4 text-lg font-semibold shadow-modern hover:shadow-modern-lg transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="space-y-8">
                <Image
                  src="/api/placeholder/300/200"
                  alt="Hotel exterior"
                  width={300}
                  height={200}
                  className="rounded-2xl shadow-modern-lg hover:shadow-modern-xl transition-all duration-500"
                />
                <Image
                  src="/api/placeholder/300/300"
                  alt="Pool area"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-modern-lg hover:shadow-modern-xl transition-all duration-500"
                />
              </div>
              <div className="space-y-8 mt-16">
                <Image
                  src="/api/placeholder/300/400"
                  alt="Restaurant"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-modern-lg hover:shadow-modern-xl transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Featured Accommodations
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Discover our most luxurious rooms and suites, each designed to
              provide the ultimate comfort and elegance for your perfect stay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <RoomCard {...room} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 px-10 py-4 text-lg font-semibold shadow-modern hover:shadow-modern-lg transition-all duration-300"
            >
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              World-Class Facilities
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Indulge in our exceptional amenities designed to enhance your stay
              and create unforgettable memories that last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center p-10 hover:shadow-modern-xl transition-all duration-500 border-0 bg-white rounded-2xl group">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      className="w-20 h-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-modern-lg group-hover:shadow-modern-xl transition-all duration-300"
                    >
                      <facility.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                      {facility.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              What Our Guests Say
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our valued guests
              have to say about their Azure Haven experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

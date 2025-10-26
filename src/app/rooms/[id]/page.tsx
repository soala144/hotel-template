"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Users,
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Heart,
  Dumbbell,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface RoomDetailsPageProps {
  params: {
    id: string;
  };
}

export default function RoomDetailsPage({ params }: RoomDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  // Sample room data - in a real app, this would come from an API
  const roomData = {
    id: params.id,
    name: "Ocean View Suite",
    description:
      "Experience unparalleled luxury in our Ocean View Suite, featuring panoramic ocean vistas, a private balcony, and premium amenities. This spacious suite offers the perfect blend of comfort and elegance, with floor-to-ceiling windows that frame the breathtaking azure waters.",
    price: 450,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    amenities: [
      {
        icon: Wifi,
        name: "Free WiFi",
        description: "High-speed internet access",
      },
      {
        icon: Coffee,
        name: "Coffee Maker",
        description: "Premium coffee and tea service",
      },
      {
        icon: Car,
        name: "Parking",
        description: "Complimentary valet parking",
      },
      { icon: Waves, name: "Ocean View", description: "Panoramic ocean views" },
      {
        icon: Star,
        name: "Premium Service",
        description: "24/7 concierge service",
      },
      {
        icon: Users,
        name: "Room Service",
        description: "24-hour room service",
      },
    ],
    rating: 4.9,
    maxGuests: 2,
    size: "65 sq m",
    bedType: "King Size Bed",
    features: [
      "Private balcony with ocean view",
      "Marble bathroom with rain shower",
      "Premium linens and bathrobes",
      "Mini bar with local specialties",
      "Smart TV with streaming services",
      "Climate control system",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + roomData.images.length) % roomData.images.length
    );
  };

  const handleBooking = () => {
    if (
      !bookingData.checkIn ||
      !bookingData.checkOut ||
      !bookingData.name ||
      !bookingData.email
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Sent",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Back Button */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" asChild>
              <Link href="/rooms" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Rooms
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Room Images */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={roomData.images[currentImageIndex]}
                  alt={roomData.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A3D62] p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A3D62] p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {roomData.images.length}
                </div>
              </motion.div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {roomData.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden ${
                      currentImageIndex === index ? "ring-2 ring-[#0A3D62]" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${roomData.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Room Info & Booking */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#2B2B2B]">
                      {roomData.name}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-[#9CA3AF]">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                        <span>{roomData.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Up to {roomData.maxGuests} guests</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-[#0A3D62]">
                      ${roomData.price}
                      <span className="text-lg text-[#9CA3AF] font-normal">
                        /night
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-[#9CA3AF]">
                      <div className="flex justify-between">
                        <span>Room Size:</span>
                        <span className="text-[#2B2B2B]">{roomData.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bed Type:</span>
                        <span className="text-[#2B2B2B]">
                          {roomData.bedType}
                        </span>
                      </div>
                    </div>

                    <Dialog
                      open={isBookingOpen}
                      onOpenChange={setIsBookingOpen}
                    >
                      <DialogTrigger asChild>
                        <Button className="w-full bg-[#0A3D62] hover:bg-[#0A3D62]/90">
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Book Your Stay</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-[#2B2B2B]">
                                Check-in
                              </label>
                              <Input
                                type="date"
                                value={bookingData.checkIn}
                                onChange={(e) =>
                                  setBookingData({
                                    ...bookingData,
                                    checkIn: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-[#2B2B2B]">
                                Check-out
                              </label>
                              <Input
                                type="date"
                                value={bookingData.checkOut}
                                onChange={(e) =>
                                  setBookingData({
                                    ...bookingData,
                                    checkOut: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#2B2B2B]">
                              Number of Guests
                            </label>
                            <Input
                              type="number"
                              min="1"
                              max={roomData.maxGuests}
                              value={bookingData.guests}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  guests: parseInt(e.target.value),
                                })
                              }
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#2B2B2B]">
                              Full Name
                            </label>
                            <Input
                              value={bookingData.name}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#2B2B2B]">
                              Email
                            </label>
                            <Input
                              type="email"
                              value={bookingData.email}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#2B2B2B]">
                              Phone
                            </label>
                            <Input
                              type="tel"
                              value={bookingData.phone}
                              onChange={(e) =>
                                setBookingData({
                                  ...bookingData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </div>

                          <Button onClick={handleBooking} className="w-full">
                            Request Booking
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-[#2B2B2B] mb-4">
                  About This Room
                </h2>
                <p className="text-[#9CA3AF] leading-relaxed mb-6">
                  {roomData.description}
                </p>

                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">
                  Room Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {roomData.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-[#9CA3AF]"
                    >
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Amenities */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-6">
                  Amenities
                </h3>
                <div className="space-y-4">
                  {roomData.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-[#FAFAFA] rounded-lg"
                    >
                      <amenity.icon className="h-5 w-5 text-[#0A3D62]" />
                      <div>
                        <p className="font-medium text-[#2B2B2B]">
                          {amenity.name}
                        </p>
                        <p className="text-sm text-[#9CA3AF]">
                          {amenity.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}




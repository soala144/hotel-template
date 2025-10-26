"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const roomTypes = [
    { value: "ocean-suite", label: "Ocean View Suite", price: 450 },
    { value: "deluxe", label: "Deluxe Room", price: 280 },
    { value: "family-suite", label: "Family Suite", price: 380 },
    { value: "presidential", label: "Presidential Suite", price: 850 },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.checkIn ||
      !formData.checkOut ||
      !formData.roomType
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your reservation.",
    });
  };

  const selectedRoom = roomTypes.find(
    (room) => room.value === formData.roomType
  );
  const nights =
    formData.checkIn && formData.checkOut
      ? Math.ceil(
          (new Date(formData.checkOut).getTime() -
            new Date(formData.checkIn).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        <Navbar />

        <div className="pt-20 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>

              <h1 className="text-3xl font-bold text-[#2B2B2B] mb-4">
                Booking Request Submitted!
              </h1>

              <p className="text-lg text-[#9CA3AF] mb-8">
                Thank you for choosing Azure Haven Hotel. We've received your
                booking request and will contact you within 24 hours to confirm
                your reservation.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-left">
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">
                  Booking Summary
                </h3>
                <div className="space-y-2 text-[#9CA3AF]">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="text-[#2B2B2B]">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-[#2B2B2B]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span className="text-[#2B2B2B]">{formData.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span className="text-[#2B2B2B]">{formData.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span className="text-[#2B2B2B]">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room Type:</span>
                    <span className="text-[#2B2B2B]">
                      {selectedRoom?.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/">Return Home</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/rooms">View More Rooms</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0A3D62] to-[#0A3D62]/80">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/90 to-[#0A3D62]/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Book Your Stay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200"
          >
            Reserve your perfect getaway at Azure Haven Hotel
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#2B2B2B]">
                      Booking Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              First Name *
                            </label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Last Name *
                            </label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Stay Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-[#2B2B2B] mb-4">
                          Stay Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Check-in Date *
                            </label>
                            <Input
                              type="date"
                              name="checkIn"
                              value={formData.checkIn}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Check-out Date *
                            </label>
                            <Input
                              type="date"
                              name="checkOut"
                              value={formData.checkOut}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Number of Guests *
                            </label>
                            <Input
                              type="number"
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              min="1"
                              max="8"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                              Room Type *
                            </label>
                            <select
                              name="roomType"
                              value={formData.roomType}
                              onChange={handleInputChange}
                              required
                              className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D62]"
                            >
                              <option value="">Select Room Type</option>
                              {roomTypes.map((room) => (
                                <option key={room.value} value={room.value}>
                                  {room.label} - ${room.price}/night
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                          Special Requests
                        </label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D62]"
                          placeholder="Any special requests or preferences..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#0A3D62] hover:bg-[#0A3D62]/90"
                      >
                        Submit Booking Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#2B2B2B]">
                      Booking Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedRoom && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-[#9CA3AF]">Room Type:</span>
                          <span className="font-medium text-[#2B2B2B]">
                            {selectedRoom.label}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-[#9CA3AF]">Nights:</span>
                          <span className="font-medium text-[#2B2B2B]">
                            {nights}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-[#9CA3AF]">
                            Price per night:
                          </span>
                          <span className="font-medium text-[#2B2B2B]">
                            ${selectedRoom.price}
                          </span>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center text-lg font-bold">
                            <span className="text-[#2B2B2B]">Total:</span>
                            <span className="text-[#0A3D62]">
                              ${totalPrice}
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="bg-[#FAFAFA] rounded-lg p-4">
                      <h4 className="font-semibold text-[#2B2B2B] mb-2">
                        What's Included:
                      </h4>
                      <ul className="text-sm text-[#9CA3AF] space-y-1">
                        <li>• Complimentary WiFi</li>
                        <li>• Daily housekeeping</li>
                        <li>• Access to hotel facilities</li>
                        <li>• 24/7 concierge service</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}




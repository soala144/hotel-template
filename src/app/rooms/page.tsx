"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  Users,
  Wifi,
  Car,
  Coffee,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomCard from "@/components/RoomCard";

export default function RoomsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const roomTypes = [
    { value: "all", label: "All Rooms" },
    { value: "suite", label: "Suites" },
    { value: "deluxe", label: "Deluxe" },
    { value: "family", label: "Family" },
    { value: "ocean", label: "Ocean View" },
  ];

  const allRooms = [
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
      type: "suite",
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
      type: "deluxe",
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
      type: "family",
    },
    {
      id: "4",
      name: "Presidential Suite",
      description:
        "Ultimate luxury with private butler service and exclusive amenities.",
      price: 850,
      image: "/api/placeholder/400/250",
      amenities: ["wifi", "breakfast", "parking"],
      rating: 5.0,
      maxGuests: 4,
      featured: true,
      type: "suite",
    },
    {
      id: "5",
      name: "Sea View Room",
      description:
        "Beautiful ocean views with modern comfort and elegant design.",
      price: 320,
      image: "/api/placeholder/400/250",
      amenities: ["wifi", "breakfast"],
      rating: 4.6,
      maxGuests: 2,
      type: "ocean",
    },
    {
      id: "6",
      name: "Executive Suite",
      description:
        "Business-friendly suite with work area and premium amenities.",
      price: 420,
      image: "/api/placeholder/400/250",
      amenities: ["wifi", "breakfast", "parking"],
      rating: 4.8,
      maxGuests: 2,
      type: "suite",
    },
  ];

  const filteredRooms = allRooms.filter((room) => {
    const matchesSearch =
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || room.type === selectedType;
    const matchesPrice =
      room.price >= priceRange[0] && room.price <= priceRange[1];

    return matchesSearch && matchesType && matchesPrice;
  });

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
            Our Accommodations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200"
          >
            Discover luxury and comfort in every room
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                <Input
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Room Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3D62]"
                >
                  {roomTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([
                        parseInt(e.target.value) || 0,
                        priceRange[1],
                      ])
                    }
                    className="w-full"
                  />
                  <span className="text-[#9CA3AF]">-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        parseInt(e.target.value) || 1000,
                      ])
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setPriceRange([0, 1000]);
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl font-bold text-[#2B2B2B]">
              {filteredRooms.length} Room{filteredRooms.length !== 1 ? "s" : ""}{" "}
              Found
            </h2>
            <div className="flex items-center space-x-2 text-[#9CA3AF]">
              <Filter className="h-4 w-4" />
              <span>Sort by: Price</span>
            </div>
          </motion.div>

          {filteredRooms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">
                No rooms found
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Try adjusting your search criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setPriceRange([0, 1000]);
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room, index) => (
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
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Room Amenities
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Every room comes equipped with premium amenities to ensure your
              comfort and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, name: "Free WiFi" },
              { icon: Coffee, name: "Coffee Maker" },
              { icon: Car, name: "Parking" },
              { icon: Waves, name: "Ocean View" },
              { icon: Star, name: "Premium Service" },
              { icon: Users, name: "Room Service" },
            ].map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#0A3D62] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <amenity.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <p className="text-sm font-medium text-[#2B2B2B]">
                      {amenity.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}






"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Users, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  rating: number;
  maxGuests: number;
  featured?: boolean;
}

const RoomCard = ({
  id,
  name,
  description,
  price,
  image,
  amenities,
  rating,
  maxGuests,
  featured = false,
}: RoomCardProps) => {
  const amenityIcons = {
    wifi: Wifi,
    parking: Car,
    breakfast: Coffee,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-modern hover:shadow-modern-xl transition-all duration-500 bg-white rounded-2xl">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-modern"
            >
              Featured
            </motion.div>
          )}
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-modern">
            <Star className="h-4 w-4 text-amber-500 fill-current" />
            <span className="text-sm font-semibold text-slate-700">
              {rating}
            </span>
          </div>
        </div>

        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-300">
              {name}
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                ${price}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                per night
              </div>
            </div>
          </div>

          <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="font-medium">Up to {maxGuests} guests</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {amenities.slice(0, 3).map((amenity, index) => {
              const IconComponent =
                amenityIcons[amenity as keyof typeof amenityIcons];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-1 bg-slate-50 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 border border-slate-200"
                >
                  {IconComponent && (
                    <IconComponent className="h-3 w-3 text-amber-500" />
                  )}
                  <span className="capitalize">{amenity}</span>
                </motion.div>
              );
            })}
            {amenities.length > 3 && (
              <span className="text-xs text-slate-500 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
                +{amenities.length - 3} more
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-8 pt-0">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white font-semibold py-3 rounded-xl shadow-modern hover:shadow-modern-lg transition-all duration-300 group-hover:scale-105"
          >
            <Link href={`/rooms/${id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RoomCard;

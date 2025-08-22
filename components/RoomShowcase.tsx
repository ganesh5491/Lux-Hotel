"use client";

import { useState } from "react";
import {
  Bed,
  Bath,
  Tv,
  Wifi,
  Coffee,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  "Ocean View": Tv,
  "King Bed": Bed,
  "Marble Bathroom": Bath,
  "Balcony": Coffee,
  "Minibar": Coffee,
  "Wi-Fi": Wifi,
  "City View": Tv,
  "Master Suite": Bed,
  "Private Terrace": Coffee,
  "Jacuzzi": Bath,
  "Butler Service": Users,
  "Premium Wi-Fi": Wifi,
  "Garden View": Tv,
  "Separate Living Area": Users,
  "Private Garden": Coffee,
  "Fireplace": Coffee,
  "Spa Bath": Bath,
  "Kitchenette": Coffee,
};

const rooms = [
  {
    name: "Deluxe Room",
    description: "Spacious room with ocean view and modern amenities.",
    amenities: ["Ocean View", "King Bed", "Marble Bathroom", "Balcony", "Minibar", "Wi-Fi"],
  },
  {
    name: "Executive Suite",
    description: "Luxurious suite with separate living area and premium facilities.",
    amenities: ["City View", "Master Suite", "Private Terrace", "Jacuzzi", "Butler Service", "Premium Wi-Fi"],
  },
  {
    name: "Garden Villa",
    description: "Private villa surrounded by lush gardens, ideal for relaxation.",
    amenities: ["Garden View", "Separate Living Area", "Private Garden", "Fireplace", "Spa Bath", "Kitchenette"],
  },
];

export default function RoomShowcase() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Rooms & Suites</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card
            key={room.name}
            className={`cursor-pointer transition-all ${
              selectedRoom.name === room.name ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedRoom(room)}
          >
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{room.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {room.amenities.map((amenity) => {
                  const Icon = iconMap[amenity];
                  return Icon ? (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Icon className="w-5 h-5 text-blue-500" />
                      <span>{amenity}</span>
                    </div>
                  ) : (
                    <span key={amenity}>{amenity}</span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-6 border rounded-lg bg-gray-50">
        <h3 className="text-2xl font-semibold mb-4">{selectedRoom.name}</h3>
        <p className="mb-4">{selectedRoom.description}</p>
        <h4 className="text-lg font-semibold mb-2">Amenities:</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {selectedRoom.amenities.map((amenity) => {
            const Icon = iconMap[amenity];
            return (
              <li key={amenity} className="flex items-center space-x-2">
                {Icon && <Icon className="w-5 h-5 text-green-600" />}
                <span>{amenity}</span>
              </li>
            );
          })}
        </ul>
        <Button className="mt-6">Book Now</Button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

type Person = {
  id: number;
  name: string;
  role: string;
  img: string;
  whatsapp: string;
  address: string;
  intro: string;
};

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const founder: Person = {
    id: 0,
    name: "Haji Raheem Zada",
    role: "Founder",
    img: "/images/founder.jpg", 
    whatsapp: "https://wa.me/923003361510",  
    address:
      "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West",
    intro:
      "Haji Raheem Zada is the visionary Founder of Shabnam Jewellers, with 50+ years of experience in gold jewellery.",
  };

  const ceos: Person[] = [
    {
      id: 1,
      name: "M.Alam Khan",
      role: "CEO",
      img: "/images/ceo-1.jpg",
      whatsapp: "https://wa.me/923003361510",
      address:
        "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West, Pakistan",
      intro: "CEO 1 is responsible for operations and client relations.",
    },
    {
      id: 2,
      name: "Afzal Khan",
      role: "CEO",
      img: "/images/ceo-2.jpg",
      whatsapp: "https://wa.me/923452080065",
      address: "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West, Pakistan",
      intro: "CEO 2 manages product design and innovation.",
    },
    {
      id: 3,
      name: "(Martyr)\nAsghar Khan",
      role: "CEO",
      img: "/images/ceo-3.jpg",
      whatsapp: "https://wa.me/923119211166",
      address: "Shabnam Jewellers, Urdu Bazar Shershah, Karachi West, Pakistan",
      intro: "CEO 3 oversees finance and strategy.",
    },
    {
      id: 4,
      name: "Sher Afzal",
      role: "CEO",
      img: "/images/ceo-4.jpg",
      whatsapp: "https://wa.me/+923012485435",
      address: "Shabnam Jewellers, Urdu Bazar Shershah, Karachi West, Pakistan",
      intro: "CEO 4 leads marketing and branding initiatives.",
    },
    {
      id: 5,
      name: "Sher Alam",
      role: "CEO",
      img: "/images/ceo-5.jpg",
      whatsapp: "https://wa.me/923158345140",
      address: "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West, Pakistan",
      intro: "CEO 5 handles customer experience and quality control.",
    },
    {
      id: 6,
      name: "Jan Alam",
      role: "CEO",
      img: "/images/ceo-6.jpg",
      whatsapp: "https://wa.me/923458877668",
      address: "Shabnam Jewellers, Banaras Main Sarafa Bazar Near Malang Hotel, Karachi West, Pakistan",
      intro: "CEO 6 manages supply chain and logistics.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Transparent Header Over Banner */}
<header className="absolute top-0 left-0 w-full bg-transparent py-6 px-8 flex items-center z-20">
  <h1 className="text-2xl md:text-3xl font-bold text-black drop-shadow-md">
    SHABNAM JEWELLERS
  </h1>
</header>

{/* Full Screen Hero Banner */}
<section className="relative w-full h-screen">
  <Image
    src="/images/profile-pic.jpg"
    alt="Shabnam Jewellers"
    fill
    className="object-cover"
    priority
  />
  {/* Overlay with Text + Button */}
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
      Welcome to <span className="text-yellow-400">Shabnam Jewellers</span>
    </h1>
    <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
      Premium Gold Jewellery Since 1975
    </p>
  </div>
</section>


      {/* Founder */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Founder</h2>
        <div
          onClick={() => setSelectedPerson(founder)}
          className="cursor-pointer inline-block"
        >
          <Image
            src={founder.img}
            alt={founder.name}
            width={180}
            height={180}
            className="rounded-full border-4 border-yellow-600 shadow-lg hover:scale-105 transition"
          />
          <p className="mt-2 font-medium">{founder.name}</p>
          <p className="text-sm text-gray-600">{founder.role}</p>
        </div>
      </section>

      {/* CEOs */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our CEOs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {ceos.map((ceo) => (
            <div
              key={ceo.id}
              onClick={() => setSelectedPerson(ceo)}
              className="cursor-pointer"
            >
              <Image
                src={ceo.img}
                alt={ceo.name}
                width={150}
                height={150}
                className="rounded-full border-2 border-gray-400 shadow hover:scale-105 transition"
              />
              <p className="mt-2 font-medium">{ceo.name}</p>
              <p className="text-sm text-gray-600">{ceo.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Person Details Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center relative shadow-xl">
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-2 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
            <Image
              src={selectedPerson.img}
              alt={selectedPerson.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-yellow-600 mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">{selectedPerson.name}</h3>
            <p className="text-sm text-gray-500">{selectedPerson.role}</p>
            <p className="mt-3 text-gray-700">{selectedPerson.intro}</p>
            <p className="mt-2 text-sm text-gray-600">
              📍 {selectedPerson.address}
            </p>
            <a
              href={selectedPerson.whatsapp}
              target="_blank"
              className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
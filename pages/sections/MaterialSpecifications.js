import React, { useState } from 'react';
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

const SpecificationSection = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-center font-semibold text-lg md:text-xl mb-4" style={{color: '#59a23e'}}>{title}</h2>
    <div className="bg-green-100 rounded-xl border-4 border-gray-100 p-4 md:p-6">
      {items.map((item, index) => (
        <p key={index} className="mb-2 text-gray-700 text-sm md:text-base">
          <span className="font-semibold">{item.label}</span>
          {item.value}
        </p>
      ))}
    </div>
  </div>
);

const IconFeature = ({ image, title, subtitle }) => (
  <div className="transform hover:-translate-y-1 transition-transform duration-300">
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <img src={image} alt={title} className="h-16 md:h-20 lg:h-24 mb-3" />
      <div className="text-center">
        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{title}</h3>
        {subtitle && <p className="text-gray-600 text-xs md:text-sm">{subtitle}</p>}
      </div>
    </div>
  </div>
);

const MaterialSpecifications = () => {
  const [next, setNext] = useState(false);

  const firstPage = {
    structure: {
      title: "STRUCTURE",
      items: [
        { label: "Cement: ", value: "Dalmia green/ultra tech" },
        { label: "TMT bars: ", value: "Tata Steel" },
        { label: "Foundation: ", value: "Rcc framed structure / Rubble masonry" },
        { label: "Walls: ", value: "8 Cement stabilized Mudblock" },
        { label: "Floor slab: ", value: "Rcc slab 110mm thick" },
        { label: "Plastering: ", value: "External walls - Cement plastering, Internal walls - Gypsum plastering" }
      ]
    },
    doors: {
      title: "DOORS AND WINDOWS",
      items: [
        { label: "Main Door: ", value: "Teak Wood" },
        { label: "Door lock: ", value: "Biometric digital door lock Yale/Godrej" },
        { label: "Other Door: ", value: "Anjili / Jack Tree" },
        { label: "Windows: ", value: "Premium aluminum windows Tostem/Fenesta" },
        { label: "Window glass: ", value: "Saint Gobain / AIS" }
      ]
    }
  };

  const secondPage = {
    electrical: {
      title: "ELECTRICAL",
      items: [
        { label: "Solar Panel: ", value: "On-grid system" },
        { label: "Conduit pipes: ", value: "Balcon" },
        { label: "Wiring: ", value: "3 phase concealed conduit wiring RR green/Havells" },
        { label: "Switches: ", value: "Legrand Myrius/Lyncus" },
        { label: "DB: ", value: "Legrand 3 phase" }
      ]
    },
    security: {
      title: "SMART SAFETY AND SECURITY",
      items: [
        { label: "Security: ", value: "CCTV Surveillance Motion and Intrusive Alarms" },
        { label: "Safety: ", value: "Gas leak Sensor in Kitchen CO2 sensor in each Villa" }
      ]
    }
  };

  const features = [
    { image: "/images/resort/specpic/Page - 08- Icon 1.jpg", title: "100% Treated Water" },
    { image: "/images/resort/specpic/Page - 08- Icon 2.jpg", title: "FTTH", subtitle: "Fibre To The Home" },
    { image: "/images/resort/specpic/Page - 08- Icon 3.jpg", title: "DG Backup", subtitle: "for common areas" },
    { image: "/images/resort/specpic/Page - 08- Icon 4.jpg", title: "Automated Street Lighting" },
    { image: "/images/resort/specpic/Page - 08- Icon 5.jpg", title: "Automated Watering" },
    { image: "/images/resort/specpic/Page - 08- Icon 6.jpg", title: "Water Proofing", subtitle: "and Termite treatment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold" style={{color: '#59a23e'}}>
            Specifications
          </h1>
          <button
            onClick={() => setNext(!next)}
            className="p-2 hover:bg-green-100 rounded-full transition-colors"
          >
            {next ? (
              <VscArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-green-600" />
            ) : (
              <VscArrowRight className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-green-600" />
            )}
          </button>
        </div>

        {/* Main Content */}
        {!next ? (
          <div className="grid md:grid-cols-2 gap-6">
            <SpecificationSection {...firstPage.structure} />
            <SpecificationSection {...firstPage.doors} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <SpecificationSection {...secondPage.electrical} />
              <SpecificationSection {...secondPage.security} />
            </div>
            
            <div className="mt-12">
              <h2 className="text-center font-semibold text-xl mb-8" style={{color: '#59a23e'}}>
                Additional Features
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <IconFeature key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialSpecifications;

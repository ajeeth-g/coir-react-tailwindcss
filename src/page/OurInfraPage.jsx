import { useState, useEffect } from "react";
import image1 from "../assets/Infra_18.jpg";
import image2 from "../assets/Infra_17.jpg";
import image3 from "../assets/Infra_19.jpg";

import image4 from "../assets/Infra_20.jpg";
import image5 from "../assets/Infra_21.jpg";
import image6 from "../assets/Infra_6.jpg";
import image7 from "../assets/Infra_7.jpg";
import image8 from "../assets/Infra_8.jpg";

import image9 from "../assets/Infra_22.jpg";
import image10 from "../assets/Infra_14.jpg";
import image11 from "../assets/Infra_23.jpg";
import image12 from "../assets/Infra_24.jpg";

import image13 from "../assets/Infra_11.jpg";
import image14 from "../assets/Infra_12.jpg";
import image15 from "../assets/Infra_13.jpg";

import image16 from "../assets/Infra_9.jpg";
import image17 from "../assets/Infra_10.jpg";

import image18 from "../assets/Infra_15.jpg";
import image19 from "../assets/Infra_16.jpg";
import Breadcrumb from "../components/Breadcrumb";

// Renamed for clarity
const image_1 = [image1, image2, image3];
const image_2 = [image4, image5, image6, image7, image8];
const image_3 = [image9, image10, image11, image12];
const image_4 = [image13, image14, image15];
const image_5 = [image16, image17];
const image_6 = [image18, image19];

const OurInfraPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image_1.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentIndex2((prev) => (prev + 1) % image_2.length);
    }, 3000);
    return () => clearInterval(interval2);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Infra", href: null },
  ];

  return (
    <div className="mt-20 space-y-20">
      {/* Hero Section */}
      <Breadcrumb items={breadcrumbItems} title="Our Infra" />

      {/* Carousel & Text Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Carousel Container */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {image_1.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {image_1.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            We Provide World-Class Infrastructure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our modern production units are designed to meet the highest
            standards of quality and efficiency. We use eco-friendly
            technologies and provide a safe and empowering workspace to rural
            communities.
          </p>
        </div>
      </section>

      {/* Additional Static Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Empowering Local Communities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to sustainable development through rural
            employment, skill-building, and community-led production. Our
            infrastructure is more than machinery—it's a platform for growth and
            inclusion.
          </p>
        </div>

        {/* Carousel Container 2 */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {image_2.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex2 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {image_2.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex2(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex2 ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Carousel Container */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {image_3.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {image_3.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            We Provide World-Class Infrastructure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our modern production units are designed to meet the highest
            standards of quality and efficiency. We use eco-friendly
            technologies and provide a safe and empowering workspace to rural
            communities.
          </p>
        </div>
      </section>

      {/* Additional Static Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Empowering Local Communities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to sustainable development through rural
            employment, skill-building, and community-led production. Our
            infrastructure is more than machinery—it's a platform for growth and
            inclusion.
          </p>
        </div>

        {/* Carousel Container 2 */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {image_4.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex2 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {image_4.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex2(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex2 ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Carousel Container */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {image_5.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {image_5.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            We Provide World-Class Infrastructure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our modern production units are designed to meet the highest
            standards of quality and efficiency. We use eco-friendly
            technologies and provide a safe and empowering workspace to rural
            communities.
          </p>
        </div>
      </section>

      {/* Additional Static Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Empowering Local Communities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to sustainable development through rural
            employment, skill-building, and community-led production. Our
            infrastructure is more than machinery—it's a platform for growth and
            inclusion.
          </p>
        </div>

        {/* Carousel Container 2 */}
        <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {image_6.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex2 ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {image_6.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex2(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex2 ? "bg-orange-600 w-4 h-4" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurInfraPage;

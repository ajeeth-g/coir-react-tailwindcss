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
            Coconut Husk Unit
          </h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-3 list-disc list-inside">
            <li>Coconut husk also known as are the container which extracted from the outer surface of coconut. Coconut Husk provides useful products and this is also one of the good product from the coconut tree.</li>
            <li>Coconut tree is another miracle tree and this tree produces the greater production to entire market. In my previous articles I have mentioned several various important production from coconut fruit.</li>
            <li>So in here I am planning to mention the important production which created by the outer shell of this coconut fruit. The chemical composition of coconut husks consists of cellulose, lignin, pyroligneous acid, gas, charcoal, tar, tannin, and potassium.</li>
            <li>The predominant use of coconut husks is in direct combustion in order to make charcoal, otherwise husks are simply thrown away.</li>
          </ul>
        </div>
      </section>

      {/* Additional Static Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Coconut Fibre Bale Unit
          </h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-3 list-disc list-inside">
            <li>Coconut fiber-based products introduced to the western world in a late 19th century and now it's a huge industry which creates lots of products which now a huge industry.</li>
            <li>Coconut coir is made out of the external hard (shell of coconut husk) part of the coconut fruit. Ropes have tensile strength and so can be used for dragging and lifting, but are too flexible to provide compressive strength.</li>
            <li>As a result, they cannot be used for pushing or similar compressive applications. Rope is thicker and stronger than similarly constructed cord, string, and twine.</li>
            <li>Rope may be constructed of any long, stringy, fibrous material, but generally is constructed of certain natural or synthetic fibres. Synthetic fibre ropes are significantly stronger than their natural fibre counterparts, but also possess certain disadvantages, including slipperiness.</li>
          </ul>
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
            Coconut Pith Block Unit
          </h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-3 list-disc list-inside">
            <li>A spongy material that binds the coconut fibre in the husk, coir pith is finding new applications. It is an excellent soil conditioner and is being extensively used as a soil-less medium for agri-horticultural purposes.</li>
            <li>Available in raw form or converted into organic manure. Pith is a multi purpose growing medium that provides new opportunities for: Potting Mix Suppliers, Seedling Nurseries, Hydroponics Growers and Golf Green Constructors.</li>
            <li>The presence of organic compounds in pith can results strong root growth compare with other growing medium.</li>
            <li>In addition it offers some natural resistance to plant diseases, so the plant live span will be long. Low Ec coco peat is used as Growing mediums</li>
          </ul>
        </div>
      </section>

      {/* Additional Static Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Coconut Chips Unit
          </h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-3 list-disc list-inside">
            <li>Coco coir husk chips, an organic and natural mulch are made from coconut shells (husk) making them a highly sustainable alternative to other mulch options.</li>
            <li>The durable coconut fiber husk-chips can withstand inclement weather and break down at a more measured and even rate than other bark chips.</li>
            <li>High-quality coco coir chips absorb water and retain it, slowly releasing over time. Husks cut into chunks, the coco husk chips allow for better aeration and water flow to plants and are ideal for soilless plants like orchids and as landscaping mulch.</li>
            <li>Commonly mixed with coco coir growing medium to provide better aeration for plants. This versatile coco coir chips growing medium is capable of filling a variety of needs.</li>
          </ul>
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
            Twisted Fibre Unit
          </h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-3 list-disc list-inside">
            <li>Twisted fibre is also a very popular method of transporting fibre. Both mattress fibre & mix fibre can be twisted in to coils.</li>
            <li>20 KG coils are the most commonly use size of a coil, however 50 KG or even 100 KG coils also could be made out of our twisting machinery.</li>
            <li>Twisted fibre is mostly used for making mattress, twisting give the fibers a curling effect which is necessary for latex to penetrate well in to & within the fibers when manufacturing latex mattresses and cushions.</li>
            <li>We are known for our quality and have earned innumerable customers from overall india. It is widely used in number of industries for various purposes. Our coconut coir fiber is available at market leading prices.</li>
          </ul>
        </div>
      </section>

      {/* Additional Static Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Garden Articles Unit
          </h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-3 list-disc list-inside">
            <li>Coir are made in natural coconut fiber and rubber(rubberized to hold the pot together). They are produced for use in horticulture forms, flower gardens, green houses, and nurseries.</li>
            <li>Coir pots are 100% eco-friendly and transforms into organic matter on decomposing. Use supply coir pots/baskets in various size accordingly to customer needs and requirements.</li>
            <li>Plants grow in these pots benefit from air pruning plant roots will grow through the pot walls encouraging strong root systems.</li>
            <li>Products made out of Coir fibre. From poles to plant pots to hanging baskets, coir makes just about every accessory that is essential for modern day gardening.</li>
          </ul>
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

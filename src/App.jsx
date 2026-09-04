import Header from "./components/header";
import WhyShouldCard from "./components/WhyShouldCard";
import PropertyCard from "./components/PropertyCard";
import FindCity from "./components/FindCity";
import { cards, properties, city, howCards } from "./practice";
import { bg, btIcon1, btIcon2, btIcon3, searchIcon, customer } from "./assests";

import HowItWorksimage from "./assests/howItWork.png";
import InfoCard from "./components/InfoCard";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

function Believe() {
  return (
    <section className="relative pt-80 pb-32">
      <img
        src={bg}
        alt=""
        className="w-full h-full inset-0 absolute -z-1 object-cover"
      />
      <div className="container mx-auto flex flex-col  items-center">
        <span className="text-sm text-dgreen font-medium px-6 py-3 rounded-full border border-dgreen uppercase w-fit">
          LET US GUIDE YOU HOME
        </span>
        <h1 className="text-6xl text-dgreen font-medium m-5">
          Believe in finding it
        </h1>
        <p className="text-base text-dgreen font-medium">
          Search properties for sale and to rent in the UK
        </p>
        <form className="mt-14" action="">
          <div className="flex bg-white w-2xl h-17 rounded-full justify-between items-center px-2 mb-11">
            <input
              className="pl-5 placeholder:text-lg placeholder:text-black w-full h-full focus:outline-0"
              type="text"
              placeholder="Enter Name, Keyword"
            />
            <button className="w-15 h-14 bg-primary rounded-full flex justify-center items-center cursor-pointer hover:bg-primary/80 transition-all">
              <img className="w-5 h-5" src={searchIcon} alt="" />
            </button>
          </div>
          <p className="text-center text-white font-medium text-base mb-6">
            What are you looking for?
          </p>
          <div className="mx-auto w-fit space-x-3">
            <button className="text-sm text-white bg-blurwhite backdrop-blur-md p-2 pr-5 rounded-full transition-all hover:pr-8">
              <span className="bg-white rounded-full aspect-square size-10 inline-flex items-center justify-center  mr-2 shrink-0 align-middle">
                <img className="size-5 inline-block " src={btIcon1} alt="" />
              </span>
              Modern Villa
            </button>
            <button className="text-sm text-white bg-blurwhite backdrop-blur-md p-2 pr-5 rounded-full transition-all hover:pr-8">
              <span className="bg-white rounded-full aspect-square size-10 inline-flex items-center justify-center  mr-2 shrink-0 align-middle">
                <img className="size-5 inline-block " src={btIcon2} alt="" />
              </span>
              Apartment
            </button>
            <button className="text-sm text-white bg-blurwhite backdrop-blur-md p-2 pr-5 rounded-full transition-all hover:pr-8">
              <span className="bg-white rounded-full size-10 inline-flex items-center justify-center  mr-2 shrink-0 align-middle">
                <img className="size-5 inline-block " src={btIcon3} alt="" />
              </span>
              Town House
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
function WhyShould() {
  return (
    <section className="pt-41">
      <div className="container mx-auto flex flex-col  items-center">
        <h2 className="text-4xl font-medium mb-3">
          Why Should You Work With Us
        </h2>
        <p className="mb-10 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-3 gap-16 px-50 ">
          {cards.map((card) => (
            <WhyShouldCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function FeaturedProperty() {
  const [status, setStatus] = useState("all properties");
  const visibleProperties =
    status === "all properties"
      ? properties
      : properties.filter((property) => property.status === status);

  return (
    <section className="pt-48 pb-41">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-medium mb-3">Featured Property</h2>
        <p className="mb-10 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="w-fit mx-auto space-x-1 text-base font-medium mb-10">
          <button
            className="inline-block border border-black/0 rounded-full py-2 px-5 transition hover:border-black hover:bg-babypink"
            onClick={() => setStatus("all properties")}
          >
            All Properties
          </button>
          <button
            className="inline-block border border-black/0 rounded-full py-2 px-5 transition hover:border-black hover:bg-babypink"
            onClick={() => setStatus("for sale")}
          >
            For Sale
          </button>
          <button
            className="inline-block border border-black/0 rounded-full py-2 px-5 transition hover:border-black hover:bg-babypink"
            onClick={() => setStatus("for rent")}
          >
            For Rent
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {visibleProperties.map((property) => (
            <PropertyCard key={property.title} property={property} />
          ))}
        </div>
        <button className="bg-primary px-7 py-3 rounded-full mt-12 font-medium">
          See All Listing →
        </button>
      </div>
    </section>
  );
}
function FindProperties() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const goTo = (index) => emblaApi?.goTo(index);
  const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.snapList());
  const setActiveSnap = (emblaApi) => setSelectedSnap(emblaApi.selectedSnap());

  useEffect(() => {
    if (!emblaApi) return;

    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);

    emblaApi.on("reinit", setupSnaps);
    emblaApi.on("reinit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);

  return (
    <section className="bg-gray-100 py-41">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-medium mb-3">
          Find Properties in These Cities
        </h2>
        <p className="mb-7 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-7.5 pb-5">
              {city.map((cities) => (
                <FindCity
                  key={cities.cityName}
                  image={cities.image}
                  cityName={cities.cityName}
                  property={cities.property}
                  className="flex-1/5 shrink-0"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-7.5">
            {scrollSnaps.map((_, index) => (
              <button
                className={"text-gray-400 border border-black/0 rounded-full p-2.5 active:border-gray-800".concat(
                  index === selectedSnap ? "" : "",
                )}
                key={index}
                onClick={() => goTo(index)}
              >
                <span className="block aspect-square w-3 bg-gray-400 rounded-full hover:bg-gray-600"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  return (
    <section className="py-41">
      <div className="container mx-auto px-30 flex">
        <div className="flex-2">
          <img src={HowItWorksimage} alt="" className="w-195 h-auto" />
        </div>
        <div className="py-32 flex-1">
          <h2 className="text-4xl/[52px] font-medium mb-5">
            How It Works? <br />
            Find a Perfect Home
          </h2>
          <p className="text-base/[30px] mb-7.5">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam.
          </p>
          <div className="space-y-7.5 ">
            {howCards.map((info) => (
              <InfoCard
                key={info.title}
                icon={info.icon}
                title={info.title}
                description={info.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatCustomers() {
  return (
    <section className="bg-babypink">
      <div className="container mx-auto pt-41 pb-19 flex justify-around">
        <div className="max-w-112.5">
          <h2 className="text-4xl/[52px] font-medium mb-5">
            What our customers are saying us?
          </h2>
          <p className="text-base/[30px] mb-7.5">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </p>
          <div className="flex justify-between max-w-62">
            <div>
              <h3 className="text-2xl/[33px] font-medium">10m+</h3>
              <p className="text-base/[37px]">Happy People</p>
            </div>
            <div>
              <h3 className="text-2xl/[33px] font-medium">4.88</h3>
              <p className="text-base/[37px]">Overall rating</p>
              <p className="text-primary text-lg">★ ★ ★ ★ ★</p>
            </div>
          </div>
        </div>

        <div className="max-w-150 p-3.5">
          <div className="">
            <div className="overflow-hidden ">
              <div className="relative flex items-center gap-3">
                <img
                  src={customer}
                  alt="Cameron Williamson"
                  className=" w-22 h-auto rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-medium leading-tight">
                    Cameron Williamson
                  </h3>
                  <p className="mt-1 text-base leading-tight">Designer</p>
                </div>

                <div className="absolute right-0 top-1 text-[120px] font-serif leading-none text-black">
                  “
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xl/[36px] font-medium max-w-112.5 mt-7.5">
                  Searches for multiplexes, property comparisons, and the loan
                  estimator. Works great. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dores.
                </p>
              </div>
            </div>
          </div>
          <button className="border border-gray-600 py-1 px-6 rounded-full mr-6.5">
            ←
          </button>
          <button className="border border-gray-600 py-1 px-6 rounded-full">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Believe />
      <WhyShould />
      <FeaturedProperty />
      <FindProperties />
      <HowItWorks />
      <WhatCustomers />
    </>
  );
}

import React from "react";
import Hero from "../components/HomePage/Hero";
import OurValuesSection from "../components/AboutPage/OurValueSection";
import SplitSection from "../components/common/CommonSection";
import PartnersCarousel from "../components/AboutPage/PartnerCarousel";

const About = () => {
  return (
    <>
      <Hero
        type="image"
        src="/images/about-foodpanda.webp"
        heading={{
          text: (
            <>
              About <br /> foodpanda{" "}
            </>
          ),
          className: "text-white font-bold mb-16 ml-10 text-4xl md:text-7xl",
        }}
        subText={[
          {
            text: "From food delivery to your daily convenience companion.",
            className: "text-4xl font-bold max-w-xl mb-4",
          },
          {
            text: "A subsidiary of Delivery Hero, foodpanda launched in Singapore in 2014 as a food delivery platform.  Dedicated to helping customers get their tasty favourites fast, it quickly won the hearts and minds of customers in APAC.",
            className: "text-lg max-w-2xl mb-6",
          },
          {
            text: "Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar. ",
            className: "text-lg max-w-2xl mb-6",
          },
          {
            text: "Thanks to dedicated partners, riders, and a team united by shared values,  foodpanda is now providing millions with a convenient way to get food and groceries in a few taps.",
            className: "text-lg max-w-2xl",
          },
        ]}
      />
      <PartnersCarousel />
      <OurValuesSection />
      <SplitSection
        title="Join the panda team!"
        description="Hungry for growth? There’s a seat at our table! We’re looking for the best in tech, marketing, sales, logistics, account management and more. Explore career opportunities at foodpanda now."
        image="/images/foodpanda-5.webp"
        imagePosition="right"
        button="View Jobs"
      />
    </>
  );
};

export default About;

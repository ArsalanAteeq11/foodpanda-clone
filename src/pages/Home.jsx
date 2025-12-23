import SplitSection from "../components/common/CommonSection";
import CarouselCards from "../components/HomePage/ImagesGallery";
import ScrollToTop from "../components/Layout/ScrollToTop";
import Hero from "../components/HomePage/Hero";

const Home = () => {
  return (
    <>
      <Hero
        type="video"
        src="/videos/hero_video.mp4"
        heading={{
          text: (
            <>
              food <br /> and groceries <br /> in a tap
            </>
          ),
          className: "text-white font-bold mb-16 ml-10 text-4xl md:text-7xl",
        }}
        subText={[
          {
            text: "We’re here to help you live life the panda way.",
            className: "text-3xl font-bold max-w-xl mb-4",
          },
          {
            text: "Spend more time doing what you love – we’ll take care of tasty meals, fresh groceries and new flavours.",
            className: "text-3xl font-bold max-w-xl",
          },
        ]}
      />

      <SplitSection
        title="Meet the next generation of delivery!"
        description="What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe. "
        image="/images/foodpanda-4.webp"
        imagePosition="left"
        button="About"
      />
      <SplitSection
        title="Taste the convenience."
        description="Try us out! Delicious food and speedy groceries are at your fingertips. Go ahead, download foodpanda now."
        image="/images/foodpanda-1.webp"
        imagePosition="right"
        subImages={[
          {
            image: "/images/app-apple.png",
            link: "#",
            alt: "Join Us",
          },
          {
            image: "/images/app-google.png",
            link: "#",
            alt: "Join Us",
          },
          {
            image: "/images/app-huawei.png",
            link: "#",
            alt: "Join Us",
          },
        ]}
      />
      <SplitSection
        title="Find the job you’d love"
        description="Hungry to make a difference? There’s a seat at our table! "
        description2="Find out how we connect tech, passions, projects and people – explore international career opportunities at foodpanda. "
        image="/images/foodpanda-3.webp"
        imagePosition="left"
        button="Join us!"
      />
      <CarouselCards />
      <SplitSection
        title="Feed your team."
        description="Treat your talented team to their favourite meals. Let them pick! Explore flexible corporate food delivery options and tasty employee perks."
        image="/images/foodpanda-2.webp"
        imagePosition="right"
        button="Explore"
      />
    </>
  );
};

export default Home;

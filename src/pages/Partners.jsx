import React from "react";
import Hero from "../components/HomePage/Hero";
import SplitSection from "../components/common/CommonSection";
import BenefitCard from "../components/Partners/BenefitCard";
import StepCard from "../components/Partners/StepCard";
import AccordionItem from "../components/Partners/AccordionItem";

const benefits = [
  {
    title: "REACH NEW CUSTOMERS",
    image: "./public/images/foodpanda-7.webp",
  },
  {
    title: "BOOST YOUR ORDER VOLUME",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80",
  },
  {
    title: "DRIVE MORE SALES",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
  },
  {
    title: "INCREASE CUSTOMER SATISFACTION",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
];

const steps = [
  {
    step: "1",
    description:
      "The customer adds their delivery address in the app or on the website and then selects a store or restaurant in their area.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="50" r="15" fill="#d6005a" />
        <circle cx="40" cy="30" r="12" fill="#333" />
        <path
          d="M40 42 L40 50"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: "2",
    description:
      "You accept the order with the reading tablet and prepare it for the collection time.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="20" y="15" width="40" height="50" rx="2" fill="#d6005a" />
        <rect x="25" y="20" width="30" height="40" fill="#fff" />
        <circle cx="40" cy="40" r="8" fill="#d6005a" />
      </svg>
    ),
  },
  {
    step: "3",
    description:
      "A rider will come to you at the specified time and collect the order. It is then delivered directly to the customer!",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="45" r="15" fill="#333" />
        <circle cx="40" cy="30" r="10" fill="#d6005a" />
        <path
          d="M40 40 L45 50 M40 40 L35 50"
          stroke="#333"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: "4",
    description:
      "Twice per month you receive payments for the orders you have received via foodora. You will also receive a basis for the deposit and a detailed insight into your sales statistics.",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="20" y="30" width="40" height="30" rx="3" fill="#d6005a" />
        <circle cx="40" cy="45" r="8" fill="#fff" />
        <rect x="28" y="25" width="24" height="5" rx="2" fill="#333" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How can I receive orders?",
    answer:
      "You will receive orders through our reading tablet that will be provided to you. The tablet will notify you of new orders, and you can accept them directly from there.",
  },
  {
    question: "Are there any costs if I register on the site?",
    answer:
      "Registration is free! We only charge a commission on orders you receive through our platform. There are no upfront costs or monthly fees.",
  },
  {
    question: "What are the opening hours like?",
    answer:
      "You can set your own opening hours through our partner portal. You have full flexibility to decide when you want to receive orders based on your restaurant or store operating hours.",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        type="image"
        src="/images/foodpanda-11.png"
        button="Become a partner!"
        heading={{
          text: (
            <>
              Get more orders with <br /> foodpanda
            </>
          ),
          className: "text-white font-bold mb-10 ml-10 text-6xl",
        }}
        subText={[
          {
            text: "Become a restaurant or local shop partner",
            className: "text-4xl font-bold text-center mb-4",
          },
          {
            text: "Take your business to new heights by partnering with foodpanda, the leading delivery service trusted by businesses large and small.",
            className: "text-lg text-center ",
          },
          {
            text: "We dare to always go further, helping you reach untapped customer bases, boost order volume, and drive more sales.",
            className: "text-lg  text-center mb-4",
          },
        ]}
      />
      <SplitSection
        title="Meet the next generation of delivery!"
        description="What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe. "
        image="/images/foodpanda-4.webp"
        imagePosition="right"
        button="Get Started Now!"
      />
      {/* Why Partner Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Why partner with foodpanda?
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      {/* How Does It Work Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            How does it work?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Have more questions? Check it out here
        </h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} {...faq} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;

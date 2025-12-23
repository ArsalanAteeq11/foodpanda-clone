import ContactForm from "../components/Contact/ContactForm";
import Hero from "../components/HomePage/Hero";

const Contact = () => {
  return (
    <>
      <Hero
        type="image"
        src="/images/fp-contact.webp"
        heading={{
          text: <>Contact us</>,
          className: "text-white font-bold mb-16 ml-10 text-4xl md:text-7xl",
        }}
      />

      <ContactForm />
    </>
  );
};

export default Contact;

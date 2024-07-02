/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="flex flex-col gap-10 mb-20 px-24 relative">
      <div className="flex flex-col items-end">
        <h2 className="text-[#1E255E] font-semibold text-3xl">SEA Salon</h2>
        <h1 className="text-[#171A31] font-semibold text-5xl">About us</h1>
      </div>
      <div className="flex justify-evenly gap-20">
        <img src="src/assets/about-pic.webp" alt="About us image" width="600" />
        <p className="text-justify">
          Welcome to SEA Salon, where we redefine
          beauty and elegance with every touch. As a premier destination in the
          salon industry, SEA Salon is renowned for its exquisite services and
          unwavering commitment to perfection. Our team of skilled professionals
          is dedicated to crafting personalized beauty experiences that enhance
          your natural allure and leave you feeling empowered. Discover the
          essence of luxury and sophistication at SEA Salon, where beauty isn't
          just a service—it's an art form. Join us on a journey to redefine
          beauty standards and embrace your unique elegance like never before.
        </p>
      </div>
    </div>
  );
};

export default About;

import Card, { Title, Description, Image } from "../components/Card";

const Services = () => {
  return (
    <>
      <div className="relative flex flex-col gap-10">
        <div className="px-24">
          <h2 className="text-[#1E255E] font-semibold text-3xl">SEA Salon</h2>
          <h1 className="text-[#171A31] font-semibold text-5xl">Services</h1>
        </div>
        <div className="relative flex justify-evenly px-24">
          <Card
            image={
              <Image
                imageUrl="public/assets/makeup.svg"
                className="w-10 h-10 md:w-32 md:h-32"
              />
            }
            title={<Title text="Manicure and Pedicure" />}
            description={
              <Description text="Pamper yourself with our luxurious manicure and pedicure treatments. We offer a range of services from basic nail care to intricate nail art, all designed to leave your hands and feet looking and feeling their best." />
            }
          />
          <Card
            image={
              <Image
                imageUrl="public/assets/haircut.svg"
                className="w-10 h-10 md:w-32 md:h-32"
              />
            }
            title={<Title text="Haircuts and Styling" />}
            description={
              <Description text="Our skilled stylists provide personalized haircuts and styling services, ensuring you leave with a look that suits your personality and lifestyle. From classic cuts to the latest trends, we've got you covered." />
            }
          />
          <Card
            image={
              <Image
                imageUrl="public/assets/facial.svg"
                className="w-10 h-10 md:w-32 md:h-32"
              />
            }
            title={<Title text="Facial Treatments" />}
            description={
              <Description text="Experience rejuvenation with our facial treatments that cater to all skin types. Our experts use high-quality products to cleanse, exfoliate, and hydrate your skin, leaving you with a radiant and refreshed complexion." />
            }
          />
        </div>
        <div className="flex justify-center mb-10">
          <button className="bg-[#23234b] text-white py-4 px-20 rounded-xl w-fit hover:bg-[#14142B] duration-300">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;

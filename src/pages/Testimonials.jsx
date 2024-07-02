import Review, { Comment, Image, Name, Location, Rating } from "../components/Review";

const Testimonials = () => {
  return (
    <div className="relative flex flex-col gap-5 px-24 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="text-[#1E255E] font-semibold text-3xl">SEA Salon</h2>
        <h1 className="text-[#171A31] font-semibold text-5xl">
          What our Customers say...
        </h1>
      </div>
      <div className="flex justify-between">
        <Review
          comment={<Comment text="I recently visited SEA Salon for a haircut and styling, and I was very impressed with the service. The staff was friendly and professional, and they really listened to what I wanted. The salon itself is clean and modern, which added to the overall positive experience. The only reason I'm giving 4 stars instead of 5 is that there was a slight delay in my appointment time. However, the quality of the service more than made up for it. I will definitely be returning for my next haircut!" />}
          image={<Image imageUrl="src/assets/james-williams.webp" />}
          name={<Name text="James Williams" />}
          location={<Location text="United States" />}
          rating={<Rating rating="4" />}
        />
        <Review
          comment={<Comment text="SEA Salon is simply the best! From the moment I walked in, I was treated with exceptional care and attention. The ambiance is fantastic, and the staff is incredibly skilled. I got a full makeover, including hair color and a manicure, and I couldn't be happier with the results. They really know how to make you feel special and pampered. I highly recommend SEA Salon to anyone looking for top-notch beauty services. Five stars all the way!" />}
          image={<Image imageUrl="src/assets/lieo-jessica.webp" />}
          name={<Name text="Lieo Jessica" />}
          location={<Location text="United Kingdom" />}
          rating={<Rating rating="5" />}
        />
      </div>
    </div>
  );
};

export default Testimonials;

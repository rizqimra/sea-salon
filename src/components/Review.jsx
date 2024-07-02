/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Comment = ({ text }) => {
  return <p className="font-tertiary test-sm text-justify p-5">"{text}"</p>;
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Image = ({ imageUrl }) => {
  return (
    <div className="border-2 border-white object-contain">
      <img src={imageUrl} alt="Reviewer image" width={60} height={60} />
    </div>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const Name = ({ text }) => {
  return <h1 className="font-secondary text-xl">{text}</h1>;
};

Name.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Location = ({ text }) => {
  return <p className="font-tertiary test-sm">{text}</p>;
};

Location.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

const Review = ({ comment, image, name, location, rating }) => {
  return (
    <>
      <div className="flex flex-col max-w-xl">
        {comment}
        <div className="flex bg-[#200D35] px-12 py-6 gap-36">
          <div className="flex justify-center items-center text-white gap-4">
            {image}
            <div className="flex flex-col justify-evenly h-full">
              {rating}
              {name}
              {location}
            </div>
          </div>
          <img src="assets/comment.svg" alt="Comment icon" width={75} />
        </div>
      </div>
    </>
  );
};

Review.propTypes = {
  comment: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
  rating: PropTypes.node.isRequired,
};

export default Review;

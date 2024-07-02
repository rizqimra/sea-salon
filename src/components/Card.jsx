import PropTypes from "prop-types";

// Title component
export const Title = ({ text }) => {
  return <h1 className="title text-[10px] md:text-3xl font-bold">{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

// Description component
export const Description = ({ text }) => {
  return <p className="description text-[8px] md:text-lg max-w-fit text-wrap">{text}</p>;
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Image = ({ imageUrl, className }) => {
  return (
    <img className={`image ${className}`} src={imageUrl} alt="Card image" />
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: "",
};

// Card component
export const Card = ({ title, description, image }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        {image}
        <div className="flex flex-col justify-center gap-3">
          {title}
          {description}
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};

export default Card;

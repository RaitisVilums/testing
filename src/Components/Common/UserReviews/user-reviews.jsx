import "./user-reviews.styles.scss";

const UserReviews = ({
  image,
  name,
  count,
  overall,
  date,
  title,
  text,
  images,
  likes,
  onToggle,
}) => {
  return (
    <div className="section-reviews__item">
      <div className="section-reviews__user">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <span className="section-reviews__count">{count} reviews</span>
      </div>
      <div className="section-reviews__content">
        <div className="section-reviews__overall">
          <OverallRating overall={overall} />
          <span>{date}</span>
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="section-reviews__images">
        {images.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
      <div className="section-reviews__like">
        <Button onClick={onToggle}>
          <Unliked />
        </Button>
        <span>{likes}</span>
      </div>
      <Button onClick={onToggle} className={"section-reviews__button"}>
        <ArrowDown />
      </Button>
    </div>
  );
};

export default UserReviews;

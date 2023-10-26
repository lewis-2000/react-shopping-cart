const StarButton = () => (
  <div className="star-button-container">
    <p>
      <small>Leave a star on Github :)</small>
    </p>
    <a
      className="github-button"
      href="#"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="#"
      tabIndex={-1}
    >
      Star
    </a>
  </div>
);

export default StarButton;

import React from 'react';

const StarButton = () => (
  <div className="star-button-container">
    <small>Leave a star on Github if this repository was useful :)</small>
    <a class="github-button" href={process.env.REACT_APP_GITHUB_REPO} data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star jeffersonRibeiro/react-shopping-cart on GitHub">Star</a>
  </div>
);

export default StarButton;



import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import './style.css';

export default function HeaderRecipe({ image, title, subtitle }) {
  const [isFavorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  return (
    <div className="header-recipe-container">
      <img
        className="header-img"
        data-testid="recipe-photo"
        src={ image }
        alt={ title }
      />
      <div className="header-recipe-content">
        <h2
          data-testid="recipe-title"
        >
          { title }
        </h2>
        <h4
          data-testid="recipe-category"
        >
          { subtitle }
        </h4>
        <div className="icons-content">
          <button
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="share icon" />
          </button>
          {isFavorite
            ? (
              <button
                type="button"
                onClick={ toggleFavorite }
                data-testid="favorite-btn"
              >
                <img
                  src={ blackHeartIcon }
                  alt="black heart"
                />
              </button>
            )
            : (
              <button
                type="button"
                onClick={ toggleFavorite }
                data-testid="favorite-btn"
              >
                <img
                  src={ whiteHeartIcon }
                  alt="white heart"
                />
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

HeaderRecipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

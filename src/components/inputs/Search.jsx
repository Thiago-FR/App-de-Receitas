import React from 'react';

export default function Search() {
  return (
    <div className="search-content">
      <input
        type="text"
        data-testId="search-input"
      />
      <div className="filters-inputs-container">
        <label htmlFor="ingredient-filter">
          <input
            id="ingredient-filter"
            type="radio"
            value="ingredientes"
            name="filter"
            data-testid="ingredient-search-radio"
          />
          Ingredientes
        </label>
        <label htmlFor="name-filter">
          <input
            id="name-filter"
            type="radio"
            value="nome"
            name="filter"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter-filter">
          <input
            id="first-letter-filter"
            type="radio"
            value="primeira letra"
            name="filter"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}

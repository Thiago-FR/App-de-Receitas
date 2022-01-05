import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../inputs/Search';

function Header() {
  const [inputSearch, setInputSearch] = useState(false);

  function showInput() {
    return (inputSearch === false) ? setInputSearch(true) : setInputSearch(false);
  }

  return (
    <header>
      <Link
        data-testid="profile-top-btn"
        to="/perfil"
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="icon-profile" />
      </Link>
      <h1 data-testid="page-title">Comidas</h1>
      <button
        data-testid="search-top-btn"
        type="button"
        onClick={ () => showInput() }
        src={ searchIcon }
      >
        <img src={ searchIcon } alt="icon-search" />
      </button>
      { inputSearch && <SearchBar /> }
    </header>
  );
}

export default Header;
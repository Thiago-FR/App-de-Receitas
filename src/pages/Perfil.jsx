import React from 'react';
import { useHistory } from 'react-router';

function Perfil() {
  const history = useHistory();

  const resetLocalStorage = () => {
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div className="Perfil-content">
      <h1 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')).email}
      </h1>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => resetLocalStorage() }
      >
        Sair
      </button>
    </div>
  );
}

export default Perfil;
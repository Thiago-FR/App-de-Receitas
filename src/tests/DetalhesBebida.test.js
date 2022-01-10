import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AppDeReceitasProvider from '../Context/AppDeReceitasProvider';
import DetalhesBebida from '../pages/DetalhesBebida';
import renderWithRouter from './renderWithRouter';

describe('Verifica component Button em HeaderRecipe', () => {
  it('Verifica component Button em HeaderRecipe', async () => {
    await act(async () => {
      renderWithRouter(
        <AppDeReceitasProvider >
          <DetalhesBebida />
        </AppDeReceitasProvider>
      );
    })

    const btnStartRecipe = screen.getByTestId('start-recipe-btn');

    expect(btnStartRecipe).toBeInTheDocument();

    userEvent.click(btnStartRecipe);
  });
});
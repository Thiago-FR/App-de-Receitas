import { fetchDrinkApi, fetchMealApi } from "../services/fetchAPI";
import mockComida from '../mocks/comidas';
import mockBebidas from '../mocks/bebidas';

describe('Verifica FetchApi', () => {
  it('Verifica FetchApi fetchMealApi', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockComida),
    });
    
    const fetch = await fetchMealApi('f', 'a')

    expect(fetch).toBe(mockComida);
  });

  it('Verifica FetchApi fetchDrinkApi', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockBebidas),
    });
    
    const fetch = await fetchDrinkApi('f', 'a')

    expect(fetch).toBe(mockBebidas);
  });
});

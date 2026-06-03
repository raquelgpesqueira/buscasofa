// prueba unitaria para descarga de precios

import { fetchFuelPrices } from './fuelApiLib';

describe('fetchFuelPrices', () => {

  it('devuelve los datos cuando la petición es correcta', async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          ListaEESSPrecio: []
        })
      })
    );

    const datos = await fetchFuelPrices();

    expect(datos).toEqual({
      ListaEESSPrecio: []
    });

  });

});

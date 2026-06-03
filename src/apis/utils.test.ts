// prueba unitaria para cálculo de distancia
import { getDistanceKm } from './utils';

describe('getDistanceKm', () => {
  it('devuelve 0 km para dos coordenadas iguales', () => {
    const distancia = getDistanceKm(
      40.4168,
      -3.7038,
      40.4168,
      -3.7038
    );

    expect(distancia).toBe(0);
  });
});

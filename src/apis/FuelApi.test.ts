// prueba unitaria para el patrón Singleton
import { FuelApi } from './FuelApi';

describe('FuelApi Singleton', () => {
  it('devuelve siempre la misma instancia', () => {

    const instancia1 = FuelApi.getInstance();
    const instancia2 = FuelApi.getInstance();

    expect(instancia1).toBe(instancia2);

  });
});

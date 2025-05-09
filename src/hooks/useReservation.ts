import { useEffect, useState } from 'react';
import { getReservations } from '../services/getReservations';
import type { GetReservationsParams, Reservation } from '../types/ReservationsApiResponse';

export const useReservations = (params: GetReservationsParams) => {
  const [resultados, setResultados] = useState<Reservation[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReservations(params);
        setResultados(data.resultados);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [JSON.stringify(params)]); 

  return { resultados, loading, error };
};

import { useState, useCallback } from 'react';
import { useReservations } from './useReservation';
import type { Reservation } from '../types/ReservationsApiResponse';


export const useSearchReservations = () => {
  const { resultados, loading, error } = useReservations({ page: 1, pageSize: 100 });
  const [filteredData, setFilteredData] = useState<Reservation[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback((query: string) => {
    if (!resultados) return;

    const filtered = resultados.filter((reserva) =>
      reserva.pasajero.toLowerCase().includes(query.toLowerCase()) ||
      reserva.reserva.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
    setHasSearched(true);
  }, [resultados]);

  const data = filteredData.length ? filteredData : resultados;
  const showEmptyState = hasSearched && filteredData.length === 0;

  return {
    data,
    loading,
    error,
    showEmptyState,
    handleSearch,
    resultados,
  };
};
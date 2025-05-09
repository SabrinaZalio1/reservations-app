import { useState, useEffect, useCallback } from 'react';
import { useReservations } from './useReservation';
import type { Reservation } from '../types/ReservationsApiResponse';
import { useDebounce } from './useDebounce';

const PAGE_SIZE = 10;

export const useSearchReservations = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 500); //delay
  const { resultados, loading, error } = useReservations({
    page,
    pageSize: PAGE_SIZE,
    passanger: debouncedQuery || undefined,
    reservation: debouncedQuery || undefined,
    resultados: []
  });

  const [filteredData, setFilteredData] = useState<Reservation[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!resultados) return;

    const filtered = resultados.filter((reserva) =>
       reserva.pasajero.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      reserva.reserva.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    setFilteredData(filtered);
  }, [resultados, query]);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    setPage(1); 
    setHasSearched(true);
  }, []);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(1, prev - 1));

  const showEmptyState = hasSearched && filteredData.length === 0 && page === 1;
  const showNoMoreResults = hasSearched && filteredData.length === 0 && page > 1;


  return {
    data: filteredData,
    loading,
    error,
    showEmptyState,
    handleSearch,
    handleNextPage,
    handlePrevPage,
    page,
    showNoMoreResults,
  };
};

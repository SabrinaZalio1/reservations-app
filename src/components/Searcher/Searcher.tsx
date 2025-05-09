import { useState } from 'react';

interface SearcherProps {
  onSearch: (query: string) => void;
}

export const Searcher = ({ onSearch }: SearcherProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (

      <input
        type="text"
        placeholder="Busca por pasajero o reserva"
        value={query}
        onChange={handleChange}
        className="p-4 my-3 w-full rounded-lg bg-gray-100 border-2 border-slate-300 focus:outline-none focus:border-sky-500"
      />
  );
};

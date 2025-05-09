import { useSearchReservations } from '../../hooks/useSearchReservations';
import { Loader } from '../../components/Loader/Loader';
import { Searcher } from '../../components/Searcher/Searcher';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { ReservationList } from '../../components/ReservationList/ReservationList';

export const SearchReservations = () => {
    const {
        data,
        loading,
        error,
        showEmptyState,
        handleSearch,
        resultados,
    } = useSearchReservations();

    if (loading) return <Loader />;
    if (error) return <p>Error al cargar: {(error as Error).message}</p>;
    if (!resultados) return <p>No hay datos disponibles.</p>;

    return (
        <div className="container mx-auto max-w-screen-lg p-4">
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">Buscar Reservas</h1>
                <Searcher onSearch={handleSearch} />
                {showEmptyState ? (
                    <EmptyState
                        title="Parece que no hay reservas!"
                        subtitle="Intenta buscar por otro nombre o nro de reserva"
                    />
                ) : (
                    <ReservationList data={data} />
                )}
            </div>
        </div>
    )
}
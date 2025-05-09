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
        handleNextPage,
        handlePrevPage,
        page,
        showNoMoreResults
    } = useSearchReservations();

    if (loading) return <Loader />;
    if (error) return <p>Error al cargar: {(error as Error).message}</p>;

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
                    <>
                        <ReservationList data={data} />
                        {showNoMoreResults && (
                            <EmptyState
                                title="No hay más resultados de tu búsqueda"
                            />
                        )}
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={page === 1}
                                    className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
                                >
                                    Anterior
                                </button>
                                <span className="self-center">Página {page}</span>
                                <button
                                    onClick={handleNextPage}
                                    disabled={data.length === 0}
                                    className="px-4 py-2 bg-sky-500 text-white rounded-lg disabled:opacity-50"
                                >
                                    Siguiente
                                </button>
                            </div>
                    </>
                )}

            </div>
        </div>
    )
}
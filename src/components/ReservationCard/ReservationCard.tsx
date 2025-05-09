import type { ReservationProps } from "../../types/ReservationsApiResponse";

export const ReservationCard = ({
  reserva: {
    destino,
    estado,
    fecha_regreso,
    pasajero,
    reserva: codigoReserva,
  } }: ReservationProps) => {
  return (

    <div className=" p-4 rounded-lg shadow-xl/20 my-4 shadow-lg transition-discrete">
      <div className="flex justify-between mb-1">
         <h3 className="text-lg font-semibold">{pasajero}</h3>
         <span className="font-semibold">{codigoReserva}</span>
      </div>
      <p>Destino: {destino}</p>
      <p>Estado: {estado}</p>
      <p className="text-xs text-right">Fecha de regreso: {fecha_regreso}</p>
    </div>
  );
};

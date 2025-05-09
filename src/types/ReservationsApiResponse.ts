export interface GetReservationsParams {
  passanger?: string;
  reservation?: string;
  page?: number;
  pageSize?: number;
  resultados?:Reservation[]
}

export interface Reservation {
  destino:string;
  estado:string;
  fecha_regreso:string;
  pasajero:string;
  reserva:string;
}

export interface ReservationProps {
  reserva: {
    destino: string;
    estado: string;
    fecha_regreso: string;
    pasajero: string;
    reserva: string;
  };
}
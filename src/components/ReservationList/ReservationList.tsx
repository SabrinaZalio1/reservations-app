import type { Reservation } from "../../types/ReservationsApiResponse";
import { ReservationCard } from "../ReservationCard/ReservationCard";

interface ReservationListProps {
    data: Reservation[] ;
}

export const ReservationList = ({ data }: ReservationListProps) => {
    return (
        <div>
            {data.length > 0 &&
                data.map((reserva, index) => <ReservationCard key={index} reserva={reserva} />
            )}
        </div>
    );
};

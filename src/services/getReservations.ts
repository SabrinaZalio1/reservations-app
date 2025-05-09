import axios from 'axios';
import type { GetReservationsParams } from '../types/ReservationsApiResponse';

const API_URL = 'https://3ccfrjulc8.execute-api.us-west-1.amazonaws.com/dev/reservasHandler';

export const getReservations = async (params: GetReservationsParams) => {
  const { data } = await axios.get(API_URL, { params });
  
  return data;
};
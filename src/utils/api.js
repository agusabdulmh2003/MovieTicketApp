import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

export const fetchMovies = async () => (await axios.get(`${API_URL}/movies`)).data;
export const fetchSeats = async (movieId) => (await axios.get(`${API_URL}/movies/${movieId}/seats`)).data;
export const processPayment = async (movieId, seats) => (await axios.post(`${API_URL}/payment/process`, { movie_id: movieId, seats })).data;

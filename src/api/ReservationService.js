import { BASE_URL } from './config';

/**
 * 예약 생성
 * @param {number|string} placeId
 * @param {string} reservationDateTime  // "YYYY-MM-DDThh:mm:ss"
 * @returns {Promise<object>}
 */
export async function createReservation(placeId, reservationDateTime) {
    const res = await fetch(`${BASE_URL}/reservations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ placeId, reservationDateTime })
    });
    if (!res.ok) throw new Error(`예약 생성 실패 (${res.status})`);
    return res.json();
}



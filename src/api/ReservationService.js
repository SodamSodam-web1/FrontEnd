export function fetchReservations() {
    return fetch('/mock/places.json')
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(json => ({
            data: json.places.map(p => ({
                reservationId: p.placeId,
                placeId:       p.placeId,
                reservationPlaceName: p.title,
                reservationDateTime:  '2025-07-01T12:00:00',  // 임의 날짜
                placeAddress:  p.address,
                hours:         p.hours,
                imageUrl:      p.imageUrl,
            }))
        }));
}

export function createReservation(placeId, reservationDateTime) {
    return Promise.resolve({ data: { reservationId: Date.now() } });
}

export function removeReservation(reservationId) {
    return Promise.resolve();
}

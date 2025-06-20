// src/components/reservation/ReservationList.js
import React, { useState } from 'react';
import '../../App.css';

const initialReservations = [
    {
        placeId: 3,
        title: '젤리가게',
        description: '2025-07-01 14:00 예약',
        address: '세종 어딘가',
        imageUrl: ''
    },
    {
        placeId: 1,
        title: '스타벅스',
        description: '2025-07-03 10:30 예약',
        address: '두정동 어딘가',
        imageUrl: ''
    }
];

export default function ReservationList() {
    const [reservations, setReservations] = useState(initialReservations);

    const handleCancel = placeId => {
        setReservations(prev => prev.filter(r => r.placeId !== placeId));
    };

    if (!reservations.length) {
        return <div className="empty">예약된 가게가 없습니다.</div>;
    }

    return (
        <div className="place-list">
            {reservations.map(r => (
                <div key={r.placeId} className="reservation">
                    <div className="reservation-item">
                        <div className="reservation-content">
                            <div className="reservation-info">
                                <h3 className="reservation-title">{r.title}</h3>
                                <p className="reservation-desc">{r.description}</p>
                                <p className="reservation-address">{r.address}</p>
                            </div>
                            {r.imageUrl
                                ? <img src={r.imageUrl} alt={r.title} className="reservation-img" />
                                : <div className="reservation-img placeholder" />
                            }
                        </div>
                    </div>
                    <button
                        className="cancel-btn"
                        onClick={() => handleCancel(r.placeId)}
                    >
                        예약 취소
                    </button>
                </div>

            ))}
        </div>
    );
}

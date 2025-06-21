import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import '../../App.css';

const mockReservations = [
    {
        placeId: 5,
        title: '김치찌개 가게',
        description: '2025-06-01 14:00',
        address: '충남 천안시 동남구 신세계 백화점',
        imageUrl: ''
    },
    {
        placeId: 6,
        title: '짬뽕먹고싶다',
        description: '2025-06-03 10:30',
        address: '충남 천안시 신부동 어딘가',
        imageUrl: ''
    }
];

export default function ReviewPage() {
    const [editing, setEditing] = useState(null);
    const [reviews, setReviews] = useState([]);

    const startReview  = place => setEditing(place);
    const cancelReview = ()    => setEditing(null);
    const submitReview = review => {
        setReviews(prev => [review, ...prev]);
        setEditing(null);
    };

    const reserved = mockReservations;

    return (
        <div>
            {/* 리뷰 폼: 클릭된 가게만 표시 */}
            {editing && (
                <ReviewForm
                    place={editing}
                    onSubmit={submitReview}
                    onCancel={cancelReview}
                />
            )}

            {/* 예약 목록: 클릭된 가게는 제외하고 계속 표시 */}
            <div>
                {reserved.length === 0 ? (
                    <div className="empty">예약된 가게가 없습니다.</div>
                ) : (
                    reserved
                        .filter(place => !editing || place.placeId !== editing.placeId)
                        .map(place => (
                            <div key={place.placeId} className="reservation">
                                <div className="reservation-item">
                                    <div className="reservation-content">
                                        <div className="reservation-info">
                                            <h3 className="reservation-title">{place.title}</h3>
                                            <p className="reservation-desc">{place.description}</p>
                                            <p className="reservation-address">{place.address}</p>
                                        </div>
                                        {place.imageUrl
                                            ? <img src={place.imageUrl} alt={place.title} className="reservation-img"/>
                                            : <div className="reservation-img placeholder"/>
                                        }
                                    </div>
                                </div>

                                <button
                                    className="cancel-btn"
                                    onClick={() => startReview(place)}
                                >
                                    리뷰 작성
                                </button>
                            </div>
                        ))
                )}
            </div>

            <ReviewList reviews={reviews} allPlaces={mockReservations} />
        </div>
    );
}

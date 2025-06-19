import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';
import '../../App.css';

export const mockPlaces = [
    {
        placeId: 1,
        title: '스타벅스',
        description: '커피 맛집',
        reviews: [{ username: '민수', text: '굿!' }],
        address: '두정동 어딘가',
        hours: '09:00 ~ 22:00',
        imageUrl: ''
    },
    {
        placeId: 2,
        title: '이디야',
        description: '가성비 카페',
        reviews: [{ username: '지은', text: '편해요' }],
        address: '신부동 어딘가',
        hours: '08:00 ~ 21:00',
        imageUrl: ''
    },
    {
        placeId: 3,
        title: '젤리가게',
        description: '젤리 맛집',
        reviews: [{ username: '철수', text: '달달함!' }],
        address: '세종 어딘가',
        hours: '11:00 ~ 19:00',
        imageUrl: ''
    }
];

export default function PlaceList() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setPlaces(mockPlaces);
    }, []);

    if (!places.length) return <div className="empty">로딩 중…</div>;

    return (
        <div className="place-list">
            {places.map(place => (
                <PlaceCard key={place.placeId} place={place} />
            ))}
        </div>
    );
}

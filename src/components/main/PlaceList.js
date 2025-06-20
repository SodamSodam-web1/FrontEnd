import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';
import '../../App.css';

export default function PlaceList() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/mock/places.json')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(json => {
                setPlaces(json.places);
            })
            .catch(err => {
                console.error(err);
                alert('장소 목록을 불러오는 중 오류가 발생했습니다.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="empty">로딩 중…</div>;
    }

    if (!places.length) {
        return <div className="empty">표시할 장소가 없습니다.</div>;
    }

    return (
        <div className="place-list">
            {places.map(place => (
                <PlaceCard key={place.placeId} place={place} />
            ))}
        </div>
    );
}

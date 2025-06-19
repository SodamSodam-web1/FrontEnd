import React, { useContext } from 'react';
import PlaceCard from '../main/PlaceCard';
import { PlaceInfoContext } from '../main/PlaceInfoContext';
import '../../App.css';

export default function BookmarkList() {
    const { likedMap } = useContext(PlaceInfoContext);
    const favoritePlaces = Object.entries(likedMap)
        .filter(([_, isLiked]) => isLiked)
        .map(([id]) => id)
        .map(id => ({
            placeId: Number(id),
            title: '', description: '', reviews: [],
            address: '', hours: '', imageUrl: ''
        }));

    if (!favoritePlaces.length) {
        return <div className="empty">찜한 장소가 없습니다.</div>;
    }

    return (
        <div className="place-list">
            {favoritePlaces.map(p => (
                <PlaceCard key={p.placeId} place={p}/>
            ))}
        </div>
    );
}

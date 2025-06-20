import React from 'react';
import PlaceCard from '../main/PlaceCard';
import '../../App.css';

const mockBookmarks = [
    {
        placeId: 1,
        title: '스타벅스',
        address: '두정동 어딘가',
        imageUrl: ''
    },
    {
        placeId: 2,
        title: '이디야',
        address: '신부동 어딘가',
        imageUrl: ''
    }
];

export default function BookmarkList() {
    if (!mockBookmarks.length) {
        return <div className="empty">찜한 장소가 없습니다.</div>;
    }
    return (
        <div className="place-list">
            {mockBookmarks.map(p => (
                <PlaceCard key={p.placeId} place={p} />
            ))}
        </div>
    );
}

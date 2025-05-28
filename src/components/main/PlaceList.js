import React from 'react';
import PlaceCard from './PlaceCard';
const placeDataList = [
    {
        title: '스타벅스',
        description: '커피 맛있음',
        reviews: 60,
        address: '두정동 어딘가',
        hours: '09:00 ~ 22:00'
    },
    {
        title: '이디야',
        description: '가성비 카페',
        reviews: 24,
        address: '신부동 어딘가',
        hours: '08:00 ~ 21:00'
    },
    {
        title: '젤리가게',
        description: '함수픽 젤리맛집',
        reviews: 3272948,
        address: '세종 어딘가',
        hours: '11:00 ~ 19:00'
    }
];

export default function PlaceList() {
    return (
        <div>
            {placeDataList.map((place, idx) => (
                <PlaceCard key={idx} place={place} />
            ))}
        </div>
    );
}

import React, { useContext } from 'react';
import { PlaceInfoContext } from './PlaceInfoContext';
import redBookmark          from '../../images/bookmark-red.png';
import whiteBookmark        from '../../images/bookmark-white.png';

export default function PlaceCard({ place }) {
    const { openInfo, likedMap, toggleLike } = useContext(PlaceInfoContext);
    const isLiked = !!likedMap[place.placeId];

    const handleBookmarkClick = e => {
        e.stopPropagation();
        toggleLike(place.placeId);
    };

    return (
        <div className="place-card" onClick={() => openInfo(place)}>
            {place.imageUrl
                ? <img className="place-card-img" src={place.imageUrl} alt={place.title}/>
                : <div className="place-card-img placeholder"/>
            }
            <div className="place-card-content">
                <div className="place-card-title">
                    <b>{place.title}</b>
                    <button className="bookmark" onClick={handleBookmarkClick}>
                        <img src={isLiked ? redBookmark : whiteBookmark} alt="북마크"/>
                    </button>
                </div>
                <p>{place.description}</p>
                <small>리뷰 {place.reviews?.length || 0}</small>
            </div>
        </div>
    );
}

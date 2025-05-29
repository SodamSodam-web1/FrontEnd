import React, { useContext } from "react";
import redBookmark from '../../images/bookmark-red.png';
import whiteBookmark from '../../images/bookmark-white.png';
import { PlaceInfoContext } from './PlaceInfoContext';

export default function PlaceCard({ place }) {
    const { openInfo, likedMap, toggleLike } = useContext(PlaceInfoContext);

    const handleBookmarkClick = (e) => {
        e.stopPropagation();
        toggleLike(place.title);
    };

    const handleClick = () => {
        openInfo(place);
    };

    if (!place) return null;
    const isLiked = likedMap[place.title] || false;

    return (
        <div className="place-card" onClick={handleClick}>
            <div className="place-card-img" />
            <div className="place-card-content">
                <div className="place-card-title">
                    <b>{place.title}</b>
                    <button className="bookmark" onClick={handleBookmarkClick}>
                        <img src={isLiked ? redBookmark : whiteBookmark} alt="북마크 아이콘" />
                    </button>
                </div>
                <p>{place.description}</p>
                <br />
                <p>리뷰 {place.reviews}</p>
            </div>
        </div>
    );
}

// src/components/reservation/BookmarkList.js
import React, { useContext } from 'react';
import { PlaceInfoContext } from '../main/PlaceInfoContext';
import redBookmark from '../../images/bookmark-red.png';
import whiteBookmark from '../../images/bookmark-white.png';
import '../../App.css';

export default function BookmarkList() {
    const { allPlaces, likedMap, toggleLike } = useContext(PlaceInfoContext);
    const favorites = allPlaces.filter(p => likedMap[p.placeId]);

    if (!favorites.length) {
        return <div className="empty">하트를 눌러 찜한 장소를 추가하세요 !</div>;
    }

    return (
        <div className="bookmark-list">
            {favorites.map(place => {
                const isLiked = !!likedMap[place.placeId];
                return (
                    <div key={place.placeId} className="bookmark-item">
                        {/* 헤더: 제목·주소 + 버튼 */}
                        <div className="bookmark-header">
                            <div>
                                <h3 className="bookmark-title">{place.title}</h3>
                                <p className="bookmark-address">{place.address}</p>
                            </div>
                            <button
                                className="bookmark-btn"
                                onClick={e => {
                                    e.stopPropagation();
                                    toggleLike(place.placeId);
                                }}
                            >
                                <img
                                    src={isLiked ? redBookmark : whiteBookmark}
                                    alt={isLiked ? '찜 해제' : '찜'}
                                    className="bookmark-icon"
                                />
                            </button>
                        </div>
                        {/* 이미지 */}
                        <div className="bookmark-image">
                            {place.imageUrl
                                ? <img src={place.imageUrl} alt={place.title} />
                                : <div className="bookmark-img placeholder" />
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

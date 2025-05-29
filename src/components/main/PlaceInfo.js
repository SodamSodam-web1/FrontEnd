import React, { useContext } from 'react';
import redBookmark from '../../images/bookmark-red.png';
import whiteBookmark from '../../images/bookmark-white.png';
import { PlaceInfoContext } from './PlaceInfoContext';

export default function PlaceInfo({ data }) {
    const { closeInfo, likedMap, toggleLike } = useContext(PlaceInfoContext);
    if (!data) return null;

    const isLiked = likedMap[data.title] || false;

    const handleBookmarkClick = () => {
        toggleLike(data.title);
    };

    return (
        <div className="place-info">
            <div className="place-info-img" style={{ position: 'relative' }}>
                <button onClick={closeInfo} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}>✕</button>
            </div>
            <div className="place-info-content">
                <div className="place-info-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <b>{data.title}</b>
                    <button className="bookmark" onClick={handleBookmarkClick}>
                        <img src={isLiked ? redBookmark : whiteBookmark} alt="북마크 아이콘" />
                    </button>
                </div>
                <div className="place-info-text">
                    <p>{data.description}</p>
                    <br /><br />
                    <p>리뷰 {data.reviews}</p>
                    <div style={{ color: 'grey' }}>
                        <p>{data.address}</p>
                        <p>{data.hours}</p>
                    </div>
                </div>
                <button className="place-info-btn">
                    예약하기
                </button>
            </div>
        </div>
    );
}

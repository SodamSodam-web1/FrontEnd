import React from 'react';
import '../../App.css';

export default function ReviewList({ reviews, allPlaces }) {
    if (!reviews.length) return null;

    return (
        <div className="review-list">
            {reviews.map((r, idx) => {
                const place = allPlaces.find(p => p.placeId === r.placeId) || {};
                return (
                    <div key={idx} className="review-item">
                        <h4>{place.title}</h4>
                        <p>{r.text}</p>
                        <div className="tag-list">
                            {r.tags.map((t,j) => <span key={j} className="tag">#{t}</span>)}
                        </div>
                        <div className="thumb-list">
                            {r.images.map((url,j) =>
                                <img key={j} src={url} className="thumb" alt="리뷰 이미지"/>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

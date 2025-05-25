import React, { useState } from "react";

export default function PlaceCard() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="place-card">
            <div className="place-card-img">
                {/* 이미지 영역 */}
            </div>
            <div className="place-card-content">
                <div className="place-card-title">
                    <span>스타벅스</span>
                    <button className="bookmark" onClick={toggleLike}>
                        {liked ? "♥" : "♡"}
                    </button>
                </div>
                <p>여기는 설명글을 적는 곳 입니다.</p>
                <br />
                <br />
                <p>리뷰 60 / 평균 10,000원</p>
            </div>
        </div>
    );
}

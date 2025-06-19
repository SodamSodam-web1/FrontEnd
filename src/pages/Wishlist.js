import React from 'react';
import '../App.css';
import BookmarkList from '../components/reservation/BookmarkList';

export default function Wishlist() {
    return (
        <div style={{ padding: 16 }}>
            <h2>찜한 장소</h2>
            <BookmarkList />
        </div>
    );
}

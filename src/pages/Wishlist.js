import React from 'react';
import '../App.css';
import BookmarkList from '../components/wishlist/BookmarkList';

export default function Wishlist() {
    return (
        <div>
            <h2>찜한 장소</h2>
            <BookmarkList />
        </div>
    );
}

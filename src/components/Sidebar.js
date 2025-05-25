import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

export default function Sidebar() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav className="sidebar">
            <Link to="/" className={`sidebar-icon ${path === '/' ? 'active' : ''}`}>
                지도 홈
            </Link>
            <Link to="/wishlist" className={`sidebar-icon ${path.startsWith('/wishlist') ? 'active' : ''}`}>
                찜한 장소
            </Link>
            <Link to="/myreservation" className={`sidebar-icon ${path.startsWith('/myreservation') ? 'active' : ''}`}>
                나의 예약
            </Link>
            <Link to="/review" className={`sidebar-icon ${path.startsWith('/review') ? 'active' : ''}`}>
                리뷰 작성
            </Link>
            <Link to="/mypage" className={`sidebar-icon ${path.startsWith('/mypage') ? 'active' : ''}`}>
                내 프로필
            </Link>
        </nav>
    );
}

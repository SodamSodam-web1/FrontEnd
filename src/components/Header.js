import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">소담소담</div>
            <div className="search">
                <input type="text" placeholder="장소, 주소 등 검색" />
            </div>
        </header>
    );
}

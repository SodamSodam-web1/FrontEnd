import React from 'react';
import '../App.css';
import PlaceCard from "../components/main/PlaceCard";
import PlaceInfo from "../components/main/PlaceInfo";
export default function Main() {
    return (
        <div>
            <div className="place-name">
                <span>천안 신부동</span>
            </div>
            <PlaceCard />
            <PlaceCard/>
            <PlaceCard/>
        </div>
    );
}

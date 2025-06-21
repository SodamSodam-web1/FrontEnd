import React from 'react';
import ReservationList from '../components/reservation/ReservationList'
import '../App.css'
export default function MyReservation() {
    return (
        <div>
            <div className="place-name">
                <span>나의 예약</span>
            </div>
            <ReservationList />
        </div>
    );
}
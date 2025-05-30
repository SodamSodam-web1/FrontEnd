import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import redBookmark from '../../images/bookmark-red.png';
import whiteBookmark from '../../images/bookmark-white.png';
import { PlaceInfoContext } from './PlaceInfoContext';
import reviewIcon from '../../images/review-icon.png';
import 'react-calendar/dist/Calendar.css';
import '../../App.css'

export default function PlaceInfo({ data }) {
    const { closeInfo, likedMap, toggleLike } = useContext(PlaceInfoContext);
    const [isBooking, setIsBooking] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    if (!data) return null;

    const isLiked = likedMap[data.title] || false;
    const timeSlots = ["10:00", "12:00", "14:00", "16:00"];

    const handleBookmarkClick = () => {
        toggleLike(data.title);
    };

    const handleBookingClick = () => {
        setIsBooking(true);
        setSelectedDate(null);
        setSelectedTime(null);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleConfirmBooking = () => {
        alert(`예약 완료!\n날짜: ${selectedDate.toLocaleDateString()}\n시간: ${selectedTime}`);
        setIsBooking(false);
    };

    return (
        <div className="place-info">
            <div className="place-info-img" style={{ position: 'relative' }}>
                <button onClick={closeInfo} style={{
                    position: 'sticky',
                    top: '15px',
                    left: '230px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                    zIndex:9999
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
                    <p>리뷰 {data.reviews.length}</p>
                    <div style={{ color: 'grey' }}>
                        <p>{data.address}</p>
                        <p>{data.hours}</p>
                    </div>
                </div>

                {!isBooking && (
                    <button className="place-info-btn" onClick={handleBookingClick}>
                        예약하기
                    </button>
                )}

                {isBooking && (
                    <div className="booking-section" style={{ marginTop: '30px' }}>
                        <p><b>날짜와 시간을 선택해 주세요</b></p>
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            locale="ko-KR"
                            calendarType="hebrew"
                            formatDay={(locale, date) => date.getDate()}
                            tileClassName={({ date }) => {
                                const day = date.getDay();
                                if (day === 6) return 'saturday';
                                if (day === 0) return 'sunday';
                                if (day === 5) return 'friday';
                                return null;
                            }}
                            prev2Label={null}
                            next2Label={null}
                        />


                        {selectedDate && (
                            <>
                                <p style={{ marginTop: '12px' }}><b>{selectedDate.toLocaleDateString()} 예약 시간 선택</b></p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {timeSlots.map((time, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleTimeClick(time)}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '8px',
                                                border: selectedTime === time ? '2px solid #007bff' : '1px solid #ccc',
                                                background: selectedTime === time ? '#d0e7ff' : '#eee',
                                                cursor: 'pointer',
                                                fontSize:'10px'
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                                {selectedTime && (
                                    <button
                                        onClick={handleConfirmBooking}
                                        className="place-info-btn"
                                        style={{marginTop:'20px',marginBottom:'20px'}}
                                    >
                                        예약 완료
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                )}

                {!isBooking && (
                    <div className="place-info-review-list" style={{ marginTop: '12px' }}>
                        {data.reviews?.map((review, index) => (
                            <div
                                key={index}
                                className="review-item"
                                style={{
                                    display: 'flex',
                                    marginBottom: '12px',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <img
                                    src={reviewIcon}
                                    alt="리뷰 아이콘"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginRight: '8px',
                                        marginTop: '4px'
                                    }}
                                />
                                <div>
                                    <p style={{ fontSize: '10px', fontWeight: 'bold', margin: '0 0 2px 0' }}>
                                        {review.username || '익명'}
                                    </p>
                                    <p style={{ fontSize: '10px', margin: 0 }}>{review.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

import React, { createContext, useState, useEffect } from 'react';

export const PlaceInfoContext = createContext();

export function PlaceInfoProvider({ children }) {
    const [allPlaces,   setAllPlaces]   = useState([]);
    const [likedMap,    setLikedMap]    = useState({});
    const [reservedMap, setReservedMap] = useState({});
    const [showInfo,    setShowInfo]    = useState(false);
    const [placeData,   setPlaceData]   = useState(null);

    // places.json 에서 전체 장소 로드
    useEffect(() => {
        fetch('/mock/places.json')
            .then(res => res.json())
            .then(json => setAllPlaces(json.places))
            .catch(err => console.error('places.json 로드 실패', err));
    }, []);

    const openInfo  = place => { setPlaceData(place); setShowInfo(true);  };
    const closeInfo = ()    => { setShowInfo(false); };

    const toggleLike = placeId => {
        setLikedMap(prev => {
            const next = { ...prev };
            next[placeId] ? delete next[placeId] : next[placeId] = true;
            return next;
        });
    };

    const toggleReservation = placeId => {
        setReservedMap(prev => {
            const next = { ...prev };
            next[placeId] ? delete next[placeId] : next[placeId] = true;
            return next;
        });
    };

    return (
        <PlaceInfoContext.Provider value={{
            allPlaces,
            likedMap,
            reservedMap,
            showInfo,
            placeData,
            openInfo,
            closeInfo,
            toggleLike,
            toggleReservation
        }}>
            {children}
        </PlaceInfoContext.Provider>
    );
}

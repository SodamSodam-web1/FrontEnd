import React, { createContext, useState } from 'react';

export const PlaceInfoContext = createContext();

export function PlaceInfoProvider({ children }) {
    const [showInfo, setShowInfo] = useState(false);
    const [placeData, setPlaceData] = useState(null);

    const [likedMap, setLikedMap] = useState({});

    const openInfo = (data) => {
        setPlaceData(data);
        setShowInfo(true);
    };

    const closeInfo = () => {
        setShowInfo(false);
        setPlaceData(null);
    };

    const toggleLike = (placeId) => {
        setLikedMap(prev => ({
            ...prev,
            [placeId]: !prev[placeId],
        }));
    };

    return (
        <PlaceInfoContext.Provider value={{
            showInfo,
            placeData,
            openInfo,
            closeInfo,
            likedMap,
            toggleLike,
        }}>
            {children}
        </PlaceInfoContext.Provider>
    );
}

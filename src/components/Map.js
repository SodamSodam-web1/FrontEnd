import React, { useEffect } from 'react';

const SimpleMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(36.8151, 127.1139), // 천안
                    level: 3,
                };
                new window.kakao.maps.Map(container, options);
            });
        };

        document.head.appendChild(script);
    }, []);

    return (
        <div id="map"/>
    );
};

export default SimpleMap;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Main from './pages/Main';
import Wishlist from './pages/Wishlist';
import MyReservation from './pages/MyReservation';
import Review from './pages/Review';
import MyPage from './pages/MyPage';
import PlaceInfo from './components/main/PlaceInfo';
import { PlaceInfoProvider, PlaceInfoContext } from './components/main/PlaceInfoContext';
import PlaceList from "./components/main/PlaceList"
import "./App.css";

function App() {
    return (
        <PlaceInfoProvider>
            <Router>
                <Header />
                <div className="layout">
                    <Sidebar />
                    <div className="main-content">
                        <Map />
                        <div className="page-content">
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/wishlist" element={<Wishlist />} />
                                <Route path="/myreservation" element={<MyReservation />} />
                                <Route path="/review" element={<Review />} />
                                <Route path="/mypage" element={<MyPage />} />
                            </Routes>
                        </div>
                    </div>
                    <PlaceInfoWrapper />
                </div>
            </Router>
        </PlaceInfoProvider>
    );
}

function PlaceInfoWrapper() {
    const { showInfo, placeData, closeInfo } = React.useContext(PlaceInfoContext);

    if (!showInfo) return null;

    return (
        <div className="overlay" onClick={closeInfo}>
            <div onClick={(e) => e.stopPropagation()}>
                <PlaceInfo data={placeData} />
            </div>
        </div>
    );
}

export default App;

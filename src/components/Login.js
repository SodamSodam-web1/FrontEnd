// import React, { useEffect } from 'react';
//
// const KakaoLoginButton = () => {
//     // useEffect(() => {
//     //     const script = document.createElement('script');
//     //     script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
//     //     script.async = true;
//     //     script.onload = () => {
//     //         if (window.Kakao && !window.Kakao.isInitialized()) {
//     //             window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
//     //             console.log('Kakao SDK initialized:', window.Kakao.isInitialized());
//     //         }
//     //     };
//     //     document.head.appendChild(script);
//     // }, []);
//     //
//     //
//     // const loginWithKakao = () => {
//     //     if (!window.Kakao) return;
//     //
//     //     // window.Kakao.API.request({
//     //     //     url: '/v1/user/unlink',
//     //     //     success: function(response) {
//     //     //         console.log('앱 연결 해제 성공', response);
//     //     //     },
//     //     //     fail: function(error) {
//     //     //         console.error('앱 연결 해제 실패', error);
//     //     //     }
//     //     // });
//     //
//     //
//     //     window.Kakao.Auth.login({
//     //         success: (authObj) => {
//     //             console.log('로그인 성공', authObj);
//     //             window.Kakao.API.request({
//     //                 url: '/v2/user/me',
//     //                 success: (res) => {
//     //                     console.log('사용자 정보', res);
//     //                 },
//     //                 fail: (err) => {
//     //                     console.error('사용자 정보 요청 실패', err);
//     //                 },
//     //             });
//     //         },
//     //         fail: (err) => {
//     //             console.error('로그인 실패', err);
//     //         },
//     //     });
//     //     // window.Kakao.Auth.logout(function() {
//     //     //     console.log('로그아웃 완료');
//     //     // });
//     //
//     // };
//
//     return (
//
//         <img src="/kakao_login_medium_narrow.png" onClick={loginWithKakao} style={{ width: '70%' }}></img>
//
//     );
// };
//
//
//
// export default KakaoLoginButton;

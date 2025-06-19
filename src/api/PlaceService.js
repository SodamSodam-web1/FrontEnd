// src/api/placeService.js
import { BASE_URL } from './config';

/**
 * 키워드 기반 장소 검색
 * @param {string} query          - 검색어
 * @param {number} x              - 경도(longitude)
 * @param {number} y              - 위도(latitude)
 * @param {number} radius         - 반경(meter)
 * @param {string} token          - JWT 토큰
 */
export async function fetchPlaces(query, x, y, radius, token) {
    const url = new URL(`${BASE_URL}/api/places/keyword`);
    url.searchParams.append('query', query);
    url.searchParams.append('x', x);
    url.searchParams.append('y', y);
    url.searchParams.append('radius', radius);

    const res = await fetch(url.toString(), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`   // ★ 토큰 꼭 추가
        }
    });
    if (!res.ok) {
        throw new Error(`장소 검색 실패 (${res.status})`);
    }
    return res.json();
}

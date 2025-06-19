// src/api/BookmarkService.js
import { BASE_URL } from './config';

function authHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}

/** 북마크 생성 */
export async function addBookmark(placeId) {
    const res = await fetch(`${BASE_URL}/api/bookmarks`, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ placeId })
    });
    if (!res.ok) throw new Error(`북마크 생성 실패 (${res.status})`);
    return res.json();  // { bookmarkId }
}

/** 북마크 삭제 */
export async function removeBookmark(bookmarkId) {
    const res = await fetch(`${BASE_URL}/api/bookmarks/${bookmarkId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    if (!res.ok) throw new Error(`북마크 삭제 실패 (${res.status})`);
}

/** 찜 목록 조회 */
export async function fetchBookmarks() {
    const res = await fetch(`${BASE_URL}/api/my/bookmarks`, {
        headers: authHeaders()
    });
    if (!res.ok) throw new Error(`찜 목록 조회 실패 (${res.status})`);
    return res.json();  // [{ bookmarkId, placeId }, …]
}

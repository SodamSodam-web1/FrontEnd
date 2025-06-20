import client from './client';

export function fetchBookmarks() {
    return fetch('/mock/places.json')          // public/mock/places.json
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(json => ({ data: json.places }));  // axios 호환 형태
}

export function addBookmark(placeId) {
    return Promise.resolve({ data: { bookmarkId: Date.now() } });
}

export function removeBookmark(bookmarkId) {
    return Promise.resolve();
}

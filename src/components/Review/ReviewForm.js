import React, { useState } from 'react';
import '../../App.css';

export default function ReviewForm({ place, onSubmit, onCancel }) {
    const [text, setText] = useState('');
    const [tags, setTags] = useState(['', '', '']);
    const [images, setImages] = useState([]);

    const handleImageChange = e => {
        const files = Array.from(e.target.files).slice(0,3);
        const urls = files.map(f => URL.createObjectURL(f));
        setImages(urls);
    };

    const handleTagChange = (idx, val) => {
        setTags(ts => {
            const copy = [...ts];
            copy[idx] = val;
            return copy;
        });
    };

    const submit = () => {
        onSubmit({ placeId: place.placeId, text, tags: tags.filter(t=>t), images });
        setText(''); setTags(['','','']); setImages([]);
    };

    return (
        <div className="review-form">
            <span className="review-title">{place.title}</span>
            <div className="review-images">
                {[0,1,2].map(i => (
                    images[i]
                        ? <img key={i} src={images[i]} className="review-thumb"/>
                        : <div key={i} className="review-thumb placeholder"/>
                ))}
            </div>
            <label className="add-photo">
                +사진 첨부하기
                <input type="file" accept="image/*" multiple hidden onChange={handleImageChange} />
            </label>

            <textarea
                className="review-text"
                placeholder="리뷰를 작성해주세요."
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <div className="review-tags">
                {tags.map((tag,i) => (
                    <input
                        key={i}
                        className="tag-input"
                        placeholder="#태그"
                        value={tag}
                        onChange={e => handleTagChange(i, e.target.value)}
                    />
                ))}
            </div>

            <div className="review-actions">
                <button className="btn-primary"  onClick={submit}>등록하기</button>
            </div>
        </div>
    );
}

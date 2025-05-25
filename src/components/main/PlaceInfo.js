export default function PlaceInfo({ place }) {
    return (
        <div>
            <h2>{place.name}</h2>
            <p>{place.desc}</p>
        </div>
    );
}

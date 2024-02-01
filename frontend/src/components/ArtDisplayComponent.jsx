function ArtDisplay({ data }) {
    if (!data) {
        return <p>Loading art...</p>;
    }

    if (data.id === 0) {
        return <p>Something went wrong when retrieving data from the Metropolitan Museum of Art. Try again or try a different year.</p>;
    }

    const openArtwork = () => {
        if (data.url) {
            window.open(data.url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="art-display">
            <h2>{data.title}</h2>
            <button onClick={openArtwork} className="view-artwork-button">View Artwork</button>
            <p>Artist: {data.artist}</p>
            <p>Year: {data.year}</p>
            {data.classification && <p>Classification: {data.classification}</p>}
        </div>
    );
}

export default ArtDisplay;

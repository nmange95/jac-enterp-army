const PinnedItem = ({ item, removePinFunc }) => {
    const openLink = () => {
        if (item.link) {
            window.open(item.link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="pin">
            <button className="pin-delete-button" onClick={() => removePinFunc(item.id)}>x</button>
            <h2 className="pin-title">{item.title}</h2>
            <p className="pin-content">{item.content}</p>
            {item.link && <button onClick={openLink} className="pin-link-button">View Art</button>}
        </div>
    );
}

export default PinnedItem;

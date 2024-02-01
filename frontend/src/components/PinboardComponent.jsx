import PinnedItem from "./PinnedItemComponent"

const Pinboard = ({ items, removePinFunc }) => {
    return (
        <div className="pinboard">
            {items.map((item) => { return <PinnedItem key={item.id} item={item} removePinFunc={removePinFunc} /> })}
        </div>
    )
}

export default Pinboard;
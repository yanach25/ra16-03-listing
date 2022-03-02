import Item from "./Item";

function Listing(props) {
    console.log(props);
    const {items} = props;
    const itemsEls = items.map((item, index) => <Item key={item.listing_id} item={item}/>)

    return (
        <div className="item-list">
            {itemsEls}
        </div>
    );
}

Listing.defaultProps = {
    items: [],
}

export default Listing;

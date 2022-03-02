function Item(props) {
    const {item} = props;
    if (!item) {
        return null;
    }

    let price;
    switch (item.currency_code) {
        case 'USD':
            price = `$${item.price}`;
            break;
        case 'EUR':
            price = `€${item.price}`;
            break;
        default:
            price = `${item.price} ${item.currency_code}`;
            break;
    }

    const leftClass = item.quantity <= 10
        ? 'low'
        : item.quantity > 20
            ? 'high'
            : 'medium';

    const title = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN} alt={item.listing_id}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}</p>
                <p className={`item-quantity level-${leftClass}`}>{item.quantity} left</p>
            </div>
        </div>
    )
}

export default Item;

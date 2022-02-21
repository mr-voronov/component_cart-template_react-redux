export default function ShowCart(props) {
    const cart = props.cart;
    const goods = props.goods;

    const itemsInCart = Object.keys(cart).map( item => {
        return(
            <tr key={item}>
                <td colSpan="2">{goods[item]['title']}</td>
                <td>{goods[item]['cost']}</td>
                <td>{cart[item]}</td>
                <td>{goods[item]['cost'] * cart[item]}</td>
                <td>
                    <button className="increase-in-cart" data-articul={item}>+</button>
                    <button className="decrease-in-cart" data-articul={item}>-</button>
                    <button className="remove-from-cart" data-articul={item}>x</button>
                </td>
            </tr>
        );
    });

    const totalSum = Object.keys(cart).reduce( (accum, item) => {
        accum += goods[item]['cost'] * cart[item];
        
        return accum;
    }, 0);

    return(
        <table className="cart-table">
            <tbody>
                <tr>
                    <th colSpan="2">Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sum</th>
                    <th colSpan="2"></th>
                </tr>
                {itemsInCart}
                <tr>
                    <td colSpan="4" className="cart-total-sum">Total sum:</td>
                    <td colSpan="3">{totalSum}</td>
                </tr>
            </tbody>
        </table>
    );
}

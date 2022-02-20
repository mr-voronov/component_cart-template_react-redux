export default function ShowCart(props) {
    const cart = props.cart;
    const goods = props.goods;

    let itemsInCart;
    
    if (Object.keys(cart) == 0) {
        itemsInCart = <tr><th colSpan="7">Nothing in cart yet</th></tr>
    } else {
        //
    }

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
                    <td colSpan="3"></td>
                </tr>
            </tbody>
        </table>
    );
}

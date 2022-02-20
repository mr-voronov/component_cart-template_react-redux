export default function ShowGoods(props) {
    return(
        <>
            {props.data.map( item => {
                return(
                    <div className="goods-item" key={item.articul}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                        <p>{item.cost}</p>
                        <button className="add-to-cart" data-articul={item.articul}>Add to cart</button>
                    </div>
                );
            })}
        </>
    );
}

export default function ShowGoods(props) {
    return(
        <>
            {props.data.map( item => {
                return(
                    <div className="goods-item" key={item.articul}>
                        <img src={item.image} alt={item.title} className="goods-item__img" />
                        <div className="goods-item__content">
                            <h2 className="goods-item__title">{item.title}</h2>
                            <p className="goods-item__price">{item.cost}</p>
                            <button className="btn btn--add-to-cart" data-articul={item.articul}>Add to cart</button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

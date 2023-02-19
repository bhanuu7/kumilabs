import CartContext from "../../context/CartContext";
import "./index.css";

const Products = (props) => {
  const { data } = props;
  const { title, price, weight, imgUrl } = data;
  // console.log(props);

  return (
    <CartContext.Consumer>
      {(value) => {
        const { addCartItem, cartList, removeCartItem } = value;
        const a = cartList.includes(data);

        const onClickAddToCart = () => {
          addCartItem(data);
        };

        const onClickRemoveFromCart = () => {
          //  console.log("remove");
          removeCartItem(data);
        };

        return (
          <div className="product">
            <img src={imgUrl} alt={title} className="image" />
            {a ? (
              <button className="button" onClick={onClickRemoveFromCart}>
                -
              </button>
            ) : (
              <button className="button" onClick={onClickAddToCart}>
                +
              </button>
            )}
            <p className="price">{price}</p>
            <p>{title}</p>
            <p className="weight">{weight}</p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Products;

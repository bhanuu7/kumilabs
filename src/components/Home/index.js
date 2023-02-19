import { Component } from "react";
import { BsCart } from "react-icons/bs";
import CartContext from "../../context/CartContext";
import Products from "../Products";
import "./index.css";

import box1 from "../Assets/box1.png";
import box2 from "../Assets/box2.png";
import box3 from "../Assets/box3.png";
import box4 from "../Assets/box4.png";
import box5 from "../Assets/box5.png";
import box6 from "../Assets/box6.png";
import box7 from "../Assets/box7.png";

const data = [
  {
    id: 1,
    title: "Banana",
    imgUrl:
      "https://www.jiomart.com/images/product/360x360/590001285/banana-robusta-6-pcs-box-approx-800-g-1100-g-product-images-o590001285-p590001285-0-202203170808.jpg",
    price: "$0.69",
    weight: "18 oz",
  },
  {
    id: 2,
    title: "Strawberries",
    imgUrl:
      "https://www.jiomart.com/images/product/600x600/590001814/strawberry-pack-approx-170-g-250-g-product-images-o590001814-p590116964-0-202203170741.jpg",
    price: "$0.69",
    weight: "1 lb",
  },
  {
    id: 3,
    title: "Yogurt",
    imgUrl:
      "https://www.jiomart.com/images/product/360x360/492392500/epigamia-strawberry-fruit-yogurt-75-g-cup-product-images-o492392500-p596835331-0-202212312007.jpg",
    price: "$0.69",
    weight: "1 lb",
  },
  {
    id: 4,
    title: "Blackberries",
    imgUrl:
      "https://www.jiomart.com/images/product/360x360/rvkch7pb6f/fabbox-dried-blackberries-product-images-orvkch7pb6f-p591506295-0-202301181311.jpg",
    price: "$0.69",
    weight: "1 lb",
  },
];

const categories = [
  {
    id: 1,
    name: "Produce",
    vectorUrl: box1,
  },
  {
    id: 2,
    name: "Prepared foods",
    vectorUrl: box2,
  },
  {
    id: 3,
    name: "Canned foods & Soups",
    vectorUrl: box3,
  },
  {
    id: 4,
    name: "Frozen",
    vectorUrl: box4,
  },
  {
    id: 5,
    name: "Bakery",
    vectorUrl: box5,
  },
  {
    id: 6,
    name: "Diary & Eggs",
    vectorUrl: box6,
  },
  {
    id: 7,
    name: "category 7",
    vectorUrl: box7,
  },
  {
    id: 8,
    name: "category 8",
    vectorUrl: box1,
  },
  {
    id: 9,
    name: "category 9",
    vectorUrl: box2,
  },
  {
    id: 10,
    name: "category 10",
    vectorUrl: box3,
  },
  {
    id: 11,
    name: "category 11",
    vectorUrl: box4,
  },
  {
    id: 12,
    name: "category 12",
    vectorUrl: box5,
  },
  {
    id: 13,
    name: "category 13",
    vectorUrl: box6,
  },
  {
    id: 14,
    name: "category 14",
    vectorUrl: box7,
  },
  {
    id: 15,
    name: "category 15",
    vectorUrl: box1,
  },
];

class Home extends Component {
  state = { category: "Produce" };

  renderHeader = () => {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          const l = cartList.length;
          return (
            <div className="headerContainer">
              <h2 className="heading">E-Commerce</h2>
              <div className="cartContainer">
                <BsCart />
                <p className="cartCount">{l}</p>
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  };

  renderProducts = () => {
    //  console.log(data);
    return (
      <div className="productsContainer">
        {data.map((eachItem) => (
          <Products data={eachItem} key={eachItem.id} />
        ))}
        {data.map((eachItem) => (
          <Products data={eachItem} key={eachItem.id} />
        ))}
      </div>
    );
  };

  changeCategory = (event) => {
    const alt = event.target.alt;
    const value = event.target.textContent;
    if (value === "") {
      // console.log(alt);
      this.setState({ category: event.target.alt });
    } else {
      this.setState({ category: event.target.textContent });
    }
  };

  renderScrollBar = () => {
    const { category } = this.state;
    // console.log(category);
    return (
      <ul className="scrollBarContainer">
        {categories.map((eachItem) => (
          <>
            {eachItem.name === category ? (
              <div>
                <img
                  onClick={this.changeCategory}
                  className="mobileScroller"
                  src={eachItem.vectorUrl}
                  alt={eachItem.name}
                />
                <p className="highlight">{eachItem.name}</p>
              </div>
            ) : (
              <div onClick={this.changeCategory}>
                <img
                  className="mobileIcon mobileScroller"
                  src={eachItem.vectorUrl}
                  alt={eachItem.name}
                />
                <p>{eachItem.name}</p>
              </div>
            )}
          </>
        ))}
      </ul>
    );
  };

  render() {
    const { category } = this.state;
    const selectedCategory = categories.filter(
      (eachCategory) => eachCategory.name === category
    );
    //  console.log(selectedCategory);
    const index = selectedCategory[0].id;
    //  console.log(index);
    return (
      <div className="homeBg">
        {this.renderHeader()}
        <div className="row">
          {this.renderScrollBar()}
          <div className="column">
            <div>
              <p className="category">{categories[index - 1].name}></p>
              {this.renderProducts()}
            </div>
            <div>
              <p className="category">{categories[index].name}></p>
              {this.renderProducts()}
            </div>
            <div>
              <p className="category">{categories[index + 1].name}></p>
              {this.renderProducts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import ReactDOM from "react-dom/client";

const e = React.createElement;

const Product = ({ title, price, quantity }) => {
  return (
    e("div", {className: "product", children: [
      e("div", {className: "product-details"}, [
        e("h3", null, title),
        e("p", {className: "price"}, price),
        e("p", {className: "quantity"}, quantity),
        e("div", {className: "actions product-actions"}, [
          e("a", {className: "button add-to-cart"}, "Add to Cart"),
          e("a", {className: "button edit"}, "Edit")
        ]),
        e("a", {className: "delete-button"}, e("span", null, "X"))
      ])
    ]})
  );
};

const App = () => {
  return (
    e("div", {id: "app"}, [
      e("main", null, [
        e("div", {className: "product-listing"}, [
          e("h2", null, ["Products"]),
          e(Product, {title: "Fuzzy Socks", price: "$3", quantity: "300"}),
          e(Product, {title: "Chocolate", price: "$100", quantity: "5"}),
          e(Product, {title: "Coke Zero", price: "$20", quantity: "10"}),
          e(Product, {title: "Poprocks", price: "$35", quantity: "179"})
        ])
      ])
    ])
  );
};


const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(App());
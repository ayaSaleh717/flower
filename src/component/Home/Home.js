import React from "react";
import { useState } from "react";
import CardsData from "./../../data/CardData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./home.css";
import { useDispatch } from "react-redux";
import ScrollCartButton from './../ScrollCartButton/ScrollCartButton';

import { addToCart } from "../../redux/feature/cartSlice";
import toast from "react-hot-toast";

function Home() {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("item added to your cart");
  };

  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="p-3  ">Say It with Flowers  💐</h2>
        <h6 className="flower-cap">Every Flower Tells a Story..</h6>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card className="hove mb-4">
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.type}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between ">
                      <h5>{element.farm}</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg " alt="" />
                      <Button
                        variant="outline-light"
                        className="mt-2 mb-2  btn custom-btn"
                        onClick={() => send(element)}
                      >
                        Add TO Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
                <ScrollCartButton />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;

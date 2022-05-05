import React from "react";
import image from "../images/shinjuku.jpg"

const CartoonScreen = () => {
    return (
        <div className="CartoonScreen">
            <h1>cartoonizer</h1>
            <p>This is a real image made with this Cartoonizer app! </p>
            <a href="https://magubuzo.github.io/cartoonizer/">so... you want to become a cartoon!</a>
            <p>After taking a image of a city, the cartoonizer converted it to this</p>
            <div className="TemplateImage">
                <img src={image}/>
            </div>
            <p>This is what the power of the cartoonizer!</p>

        </div>
    );
}

export default CartoonScreen;
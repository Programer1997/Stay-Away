import React from "react";

export default function propertyCards(props) {
  return (
    <div className="cardsPropertiesContainer">
      <h3>{props.name ? props.name : props.title.slice(0, 25)}</h3>
      <div className="imagesLayout">
        {props.img1 ? <img src={props.img1} alt="img1" /> : null}
        {props.photos && props.photos.length > 0 ? (
          <img
            src={`http://localhost:8000/images/${props.photos[0].slice(14)}`}
            alt="property"
          />
        ) : null}
        <div className="imagesLayoutSmall">
          {props.img2 ? <img src={props.img2} alt="img2" /> : null}
          {props.img3 ? <img src={props.img3} alt="img3" /> : null}
          {props.img4 ? <img src={props.img4} alt="img4" /> : null}
          {props.img5 ? <img src={props.img5} alt="img5" /> : null}
        </div>
      </div>
      <p className="desc">{props.desc.slice(0, 80)}</p>
      <p className="price">{`$ ${props.price}`}</p>
      <p className="city">{props.city}</p>
      <button className="btn btn-success">See More</button>
    </div>
  );
}

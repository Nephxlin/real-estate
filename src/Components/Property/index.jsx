import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBed, FaBath } from 'react-icons/fa';

import './styles.scss';

export default function Property(props) {

  const {
    address,
    location,
    bedrooms,
    bathrooms,
    area,
    price,
    img
  } = props.info;

  return (
    <article className="property">
      <img className="property__img" src={img} alt="property"/>
      <main className="property__info">
        <p className="property__address">{address}</p>
        <p className="property__location">{location}</p>
        <div className="property__icons">
          <p className="bed">
            <FaBed className="icon"/>
            <span className="margin-left-half">{bedrooms}</span>
          </p>
          <p className="bathroom">
            <FaBath className="icon"/>
            <span className="margin-left-half">{bathrooms}</span>
          </p>
          <p className="area">
            <AiOutlineHome className="icon"/>
            <span className="margin-left-half">{area}m²</span>
          </p>
        </div>
        <p className="property__price">${price}</p>
      </main>
    </article>
  )
}

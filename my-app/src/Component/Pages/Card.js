import React from 'react';
import CardButton from '../Pages/CardButton';
import Styles from '../Pages/Card.module.css';

export default function Card(props) {

  let cardClassName = props.data.time < 5 ? Styles['bg-blue'] : Styles['bg-warning'];

  return (
    <div className="col-sm-12 col-lg-12 col-md-6 col-xl-8 col-xxl-3 mb-4">
      <div className={`col-md-4 col-lg-6 col-xl-3 col-xxl-10 ${cardClassName}`}>
        <img
          className="card-img-top"
          src={props.data.img_url}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className={`card-text ${props.data.time < 5 ? Styles['bg-blue'] : ''}`}>
            {props.data.paragraph}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group" >
              <CardButton text="View" />
              <CardButton text="Edit"/>
            </div>
            <small className="text-muted">{props.data.time} min</small>
          </div>
        </div>
      </div>
    </div>
  );
}

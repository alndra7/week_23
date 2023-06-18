import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div className={props.name}>
            <div className='header'>Безлимитный {props.number}</div>
            <div className='price'>{props.number} руб/месяц</div>
            <div className='speed'>до {props.speed} Мбит/сек</div>
            <div className='info'>Объем включенного трафика не ограничен</div>
        </div>

    );
}

export default Card;
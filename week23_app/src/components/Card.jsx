import React, { useState } from 'react';
import './Card.scss';

function Card(props) {
    const [pressed, setPressed] = useState();

    const handleChange = () => {
        setPressed(pressed ? '' : 'picked');
        console.log('Получен фокус на поле ввода');
    }

    return (
        <div className={`${props.name} ${pressed}`}
            onPointerEnter={handleChange} onPointerLeave={handleChange}>
            <div className='header'>Безлимитный {props.number}</div>
            <div className='price'>{props.number} руб/месяц</div>
            <div className='speed'>до {props.speed} Мбит/сек</div>
            <div className='info'>Объем включенного трафика не ограничен</div>
        </div>
    );
}

export default Card;
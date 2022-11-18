import React from 'react';

type Props = {};

const MenuAccount = (props: Props) => {
    return (
        <div className='account__menu'>
            <ul className='menu__items'>
                <li className='menu__item_people'><a href='#'>Профиль</a></li>
                <li className='menu__item_stock'><a href='#'>Акции</a></li>
                <li className='menu__item_visit'><a href='#'>История посещений</a></li>
                <li className='menu__item_booking'><a href='#'>Бронирования</a></li>
            </ul>
        </div>
    );
};

export default MenuAccount;

import React, { useState } from 'react';


type Props = {};

const MenuAccount = (props: Props) => {
    const [activeElem, setActiveElem] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });
    return (
        <div className='account__menu'>
            <ul className='menu__items'>
                <li
                    className={
                        activeElem[1]
                            ? 'menu__item_people _active'
                            : 'menu__item_people'
                    }
                    onMouseEnter={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [1]: true };
                        })
                    }
                    onMouseLeave={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [1]: false };
                        })
                    }>
                    <a href='#'>Профиль</a>
                </li>
                <li
                    className={
                        activeElem[2]
                            ? 'menu__item_stock _active'
                            : 'menu__item_stock'
                    }
                    onMouseEnter={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [2]: true };
                        })
                    }
                    onMouseLeave={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [2]: false };
                        })
                    }>
                    <a href='#'>Акции</a>
                </li>
                <li
                    className={
                        activeElem[3]
                            ? 'menu__item_visit _active'
                            : 'menu__item_visit'
                    }
                    onMouseEnter={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [3]: true };
                        })
                    }
                    onMouseLeave={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [3]: false };
                        })
                    }>
                    <a href='#'>История посещений</a>
                </li>
                <li
                    className={
                        activeElem[4]
                            ? 'menu__item_booking _active'
                            : 'menu__item_booking'
                    }
                    onMouseEnter={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [4]: true };
                        })
                    }
                    onMouseLeave={(e) =>
                        setActiveElem((prevState) => {
                            return { ...prevState, [4]: false };
                        })
                    }>
                    <a href='#'>Бронирования</a>
                </li>
            </ul>
        </div>
    );
};

export default MenuAccount;

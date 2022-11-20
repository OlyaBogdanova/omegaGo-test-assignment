import React, { useState } from 'react';
import '../../components/PersonalAccount/AccountHeader/AccountHeader.scss';
import './MenuList.scss';

type Props = { menuList: string };

const MenuList = (props: Props) => {
    const { menuList } = props;

    const [activeElem, setActiveElem] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });


    return (
        <div>
            <div className={menuList}>
            <div className='account__menu_list'>
                <ul className='menu__items_list'>
                    <li
                        className={
                            activeElem[1]
                                ? 'menu__item_list_people _active'
                                : 'menu__item_list_people'
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
                                ? 'menu__item_list_stock _active'
                                : 'menu__item_list_stock'
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
                                ? 'menu__item_list_visit _active'
                                : 'menu__item_list_visit'
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
                                ? 'menu__item_list_booking _active'
                                : 'menu__item_list_booking'
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
        </div>
        </div>
    );
};

export default MenuList;

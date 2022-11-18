import React from 'react';
import './Slider.scss';
const cub = require('../../../img/cub.svg');

type Props = {}

const Slide = (props: Props) => {
  return (
    <div className='slide__container'>
                    <div className='slide__text'>
                        <div className='slide__title'>
                            Новые возможности <span>SUPER</span>
                        </div>
                        <div className='slide__subscribe'>
                            Проведи своё время с удовольствием и не забудь
                            пригласить своих друзей!
                        </div>
                        <div className='slide__btn'>
                            <button className='button_slide'>Получить новые возможности</button>
                        </div>
                    </div>
                    <div className='slide__bg_text'>SUPER</div>
                    <div className='slide__bg_detail'>
                        <img
                            src={cub.default}
                            alt='кубики'
                        />
                    </div>
                </div>
  )
}

export default Slide
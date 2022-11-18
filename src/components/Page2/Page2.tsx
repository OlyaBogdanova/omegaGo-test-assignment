import React from 'react';
import './Page2.scss'

type Props = {}

const Page2 = (props: Props) => {
  return (
    <div className="page__two__about about">
                <div className="about__container _container">
                    <div className="about__video">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/eMEH6LG9_iQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>

                    <div className="about__info info">
                        <div className="info__title">О нас</div>
                        <div className="info__subtitle">
                            Информация о наших SUPER возможностях
                        </div>
                        <div className="info__subscribe">
                            Lorem ipsum dolor sit amet, cum sapientem honestatis
                            ea, verear labores feugait sea in, cu justo
                            suscipiantur mel. Mel facilis sensibus petentium in,
                            ne ignota mollis suavitate mei, modus reque
                            signiferumque in cum. Ut molestiae complectitur ea
                            Ut molestiae complectitur ea Ut molestiae
                            complectitur ea
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Page2
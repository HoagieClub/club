import React from 'react';
import style from './intro.module.scss';
import styleData from '../styles/variables.module.scss'
import hoagie from '../assets/hoagie-hi.svg';
import Button from '../components/button';

const Intro = ()  => {
    return (
        <div className={"section " + style.section}>
            <div className={style.hoagies}>
                {/* <img className={style.one} alt="Hoagie" height={styleData.hoagieBigHeight} src={hoagie}></img> */}
                {/* <img className={style.two} alt="Hoagie" height={styleData.hoagieBigHeight} src={hoagie}></img> */}
            </div>
            <div className="container">
                <div className={style.content}>
                    <div className={style.hoagie}>
                        <img alt="Hoagie" height={styleData.hoagieBigHeight} src={hoagie}></img>
                    </div>
                    <div className={style.text}>
                        <h1>
                            Hoagie Club is the team behind Hoagie.
                        </h1>
                        <div className={style.description}>
                            <p>Hoagie Club aims to change how students build campus applications and establish a proper software engineering culture around them.</p>
                            <br />
                            <p>We want to turn Princeton applications from a collection of isolated side-projects into an integrated software system.</p>
                        </div>
                        <div className={style.buttons}>
                            <Button href={'/forms/apply'}>Join Us</Button>
                            <Button href="#learn" outlined={true} color="#73FFD3">Learn More</Button>
                            <Button href="https://hoagie.io" outlined={true} color="#FF6709">Go Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
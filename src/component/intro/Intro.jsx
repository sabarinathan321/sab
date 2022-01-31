import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped'

export default function Intro() {
    const textuseRef = useRef();
    useEffect(() => {
        init(textuseRef.current,
            {
                showCursor: true, 
                strings: ['FULL', 'MEAN', 'MERN' ],
                backDelay:  2500,
                typeSpeed:  50,
                backSpeed:  50,
            }
        )
    }, [])
    return (
        <div className='intro' id = "intro">
            <div className="left">
                <div className="imgContainer">
                <img src="assests/Sab_Photo-removebg.png" alt="not found" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                        Hi There, I'm
                    </h2>
                    <h1>
                        Sabarinathan Ayyappan
                    </h1>
                    <h3>
                        <span ref = {textuseRef}></span> STACK DEVELOPER
                    </h3>
                </div>
                <div className='downArrow'>
                    <a href="#experience"><img src="assests/down.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

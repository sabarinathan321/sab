import './experience.scss';
import { experienceDetails } from '../../data';
import Carousel from 'react-material-ui-carousel'

export default function Experience({openMenu}) {

    return (
        <div className= {'experience ' + ( openMenu && 'active' ) } id='experience'>
            <h1>Experience</h1>
            <div className="slider">
                <div className="container">
                    <Carousel>
                        {
                            experienceDetails.map( (item, i) => {
                                return (
                                    <div className="parent">
                                        <h2 className="title">
                                            {item.title}
                                        </h2>
                                        <div className="item">
                                            <div className="left">
                                                {/* <div className='imgContainer'>
                                                    <img src={item.icon} alt="" />
                                                </div> */}
                                                {/* <h2 className="title">
                                                    {item.title}
                                                </h2> */}
                                                <p>
                                                {item.description}
                                                </p>
                                            </div>
                                            <div className="right">
                                                <img src={item.image} alt=""  className='imgClass'/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

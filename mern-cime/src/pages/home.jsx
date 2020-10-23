import React, { Component, useEffect, useRef } from 'react';
import Title from '../components/title.jsx'
import { gsap } from "gsap"
import "../app.scss"


export default class Home extends Component {
    render() {
        return (
            <div className="page-title">
                <div className="line-wrap">
                    <Title lineContent='The Sri Lankan'
                        lineContent2='Police Station'
                        lineContent3='The Sri Lanka Police is the civilian national police force of the 
                        Democratic Socialist Republic of Sri Lanka. The police force has a manpower of approximately 
                        77,000, and is responsible for enforcing criminal and traffic law, enhancing public safety
                        maintaining order and keeping the peace throughout Sri Lanka. With the system, the Sri Lankan Police
                        allows efficiency to provide civilians with convenience and efficiency along with our services,
                        to have a vision towards a peaceful environment and ti live with confidence and without fear of crime.'
                    //lineContent4='Socialist Republic of Sri Lanka. The police force has a manpower of approximately'
                    //lineContent5='77,000, and is responsible for enforcing criminal and traffic law, enhancing public safety'
                    //lineContent6='maintaining order and keeping the peace throughout Sri Lanka. With the system, the Sri Lankan Police'
                    //lineContent7='allows efficiency to provide civilians with convenience and efficiency along with our services,'
                    //lineContent8='to have a vision towards a peaceful environment and ti live with confidence and without fear of crime.'
                    />

                </div>
            </div>
        )
    }
}
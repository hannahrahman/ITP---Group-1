import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "../app.scss"
import Police from "../Images/police.png"

const Title = ({ lineContent, lineContent2, lineContent3, lineContent4 }) => {
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    //let line4 = useRef(null);
    let url = { Police }

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.3,
            ease: "power3.out",
            y: 64,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
    }, [line1, line2]);

    useEffect(() => {
        gsap.from([line3], 1.5, {
            delay: 0.8,
            ease: "power3.out",
            //y: 64,
            x: 300,
            opacity: 0,
            //scale: 0.5,
            stagger: {
                amount: 0.15
            }
        });
    }, [line3]);
    useEffect(() => {
        gsap.from([url], 0.8, {
            delay: 0.3,
            ease: "power3.out",
            y: 64,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
    }, [url]);


    return (
        <div ref={el => (line1 = el)}>
            <div style={{ paddingTop: 5 + 'rem', paddingLeft: 10 + 'rem' }}><img src={Police} alt="police" style={{ height: 30 + 'rem', width: 30 + 'rem' }} /></div>
            <h1 className="page-title title">
                <div className="line-wrap">
                    <div ref={el => (line1 = el)} style={{ color: "white", fontSize: 45 + 'px' }} className="line">
                        <br />
                        <b>{lineContent}</b>
                    </div>
                </div>
                <div className="line-wrap">
                    <div ref={el => (line2 = el)} style={{ color: "white", fontSize: 45 + 'px' }} className="line">
                        <b>{lineContent2}</b>
                    </div>
                </div>
                <br />
                <div ref={el => (line3 = el)} style={{ color: "white" }} className="line1">
                    {lineContent3}
                </div>
            </h1>

        </div>
    );
};
export default Title;
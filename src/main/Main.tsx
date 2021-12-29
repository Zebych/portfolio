import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/image/k2HOtf-VgNk.jpg'
import Particles from "react-tsparticles";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.greetings}>
                    <Fade direction={"down"} triggerOnce={true}>
                        <h1>Alex Zabirov</h1>
                        <ReactTypingEffect
                            text={["Front-end Developer"]}
                        />
                    </Fade>
                </div>
                <div className={styles.photo}>
                    <Fade direction={"right"} triggerOnce={true}>
                        <Tilt tiltReverse={true}>
                            <img src={photo} alt={''}/>
                        </Tilt>
                    </Fade>
                </div>
            </div>
            <Particles
                className={styles.particles}
                id="tsparticles"
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#4c7d7e",
                        },
                        links: {
                            color: "#5e9e9f",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>

    );
};

export default Main;
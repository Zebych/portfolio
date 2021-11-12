import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Work from "./work/Work";
import {Title} from "../common/title/Title";
import socialNetworkImage from '../assets/image/social-network-background-with-icons-free-vector.jpg'
import todoListImage from '../assets/image/todo-list_318-10185.jpg'
import {Fade} from "react-awesome-reveal";

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todoList = {
        backgroundImage: `url(${todoListImage})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <Title title={'Projects'}/>
                </div>
                {/*<Fade direction={"right"} duration={3000}>*/}
                    <div className={style.projects}>
                        <Fade  direction={"right"} delay={150} triggerOnce={true} >
                            <Work link={'https://zebych.github.io/-social-network/'}
                                  style={social} title={'Social Network'}
                                  shortDescription={'social network for communication'}/>
                        </Fade>
                        <Fade  direction={"right"} delay={200} triggerOnce={true}>
                            <Work  link={'https://zebych.github.io/todo-redux-toolkit/'}
                                   style={todoList} title={'Todo List'} shortDescription={'to-do list/task'}/>
                        </Fade>
                        <Fade  direction={"right"} delay={250} triggerOnce={true}>
                            <Work link={'https://zebych.github.io/counter/'} style={social} title={'Counter'}/>
                        </Fade>
                    </div>
                {/*</Fade>*/}
            </div>
        </div>
    );
};

export default Projects;
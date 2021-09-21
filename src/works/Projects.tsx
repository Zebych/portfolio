import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Work from "./work/Work";
import {Title} from "../common/title/Title";
import socialNetworkImage from '../assets/image/social-network-background-with-icons-free-vector.jpg'
import todoListImage from '../assets/image/todo-list_318-10185.jpg'

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
                <div className={style.projects}>
                    <Work style={social} title={'Social Network'}
                          shortDescription={'social network for communication'}/>
                    <Work style={todoList} title={'Todo List'} shortDescription={'to-do list/task'}/>
                    <Work style={social} title={'Social Network'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
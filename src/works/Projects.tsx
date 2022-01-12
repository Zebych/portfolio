import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Work from "./work/Work";
import {Title} from "../common/title/Title";
import socialNetworkImage
    from '../assets/image/social-network-background-with-icons-free-vector.jpg'
import todoListImage from '../assets/image/todo-list_318-10185.jpg'
import shopImage from '../assets/image/shop_test.png'
import {Fade} from "react-awesome-reveal";
import {LinksToGit, LinksTo} from "../common/enums/linksTo";
import {ProjectDescription} from "../common/enums/projectDescription";

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todoList = {
        backgroundImage: `url(${todoListImage})`
    }
    const shop={
        backgroundImage:`url(${shopImage})`
    }
    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <Title title={'Projects'}/>
                </div>
                <div className={style.projects}>
                    <Fade direction={"right"} delay={250} triggerOnce={true}>
                        <Work link={LinksTo.Shop} linkToGit={LinksToGit.Shop} style={shop} title={
                           'Shop-test' } shortDescription={ProjectDescription.Shop}/>
                    </Fade>
                    <Fade direction={"right"} delay={200} triggerOnce={true}>
                        <Work link={LinksTo.TodoList}
                              linkToGit={LinksToGit.TodoList}
                              style={todoList} title={'Todo List'}
                              shortDescription={ProjectDescription.TodoList}/>
                    </Fade>
                    <Fade direction={"right"} delay={200} triggerOnce={true}>
                        <Work link={LinksTo.TodoListToolkit}
                              linkToGit={LinksToGit.TodoListToolkit}
                              style={todoList} title={'Todo List'}
                              shortDescription={ProjectDescription.TodoListToolkit}/>
                    </Fade>
                    <Fade direction={"right"} delay={150} triggerOnce={true}>
                        <Work link={LinksTo.SocialNetwork}
                              linkToGit={LinksToGit.SocialNetwork}
                              style={social} title={'Social Network'}
                              shortDescription={ProjectDescription.SocialNetwork}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;
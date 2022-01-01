import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from './skill/Skill';
import {Title} from '../common/title/Title';
import htmlImage from '../assets/image/28951.png'
import sassImage from '../assets/image/sass.png'
import JSImage from '../assets/image/javascript-logo.png'
import TSImage from '../assets/image/TypeScript-1324888770849597918.png'
import ReactImage from '../assets/image/1200px-React-icon.svg.png'
import ReduxImage from '../assets/image/redux.png'
import StorybookImage from '../assets/image/22632046.png'
import MaterialUiImage from '../assets/image/logo.png'
import jestImage from '../assets/image/jest.png'
import restApiImage from '../assets/image/rest-api.png'
import GitImage
    from '../assets/image/git.png'
import NodeImage
    from '../assets/image/kisspng-web-development-node-js-javascript-software-develo-node-js-icon-5b4aff47d622e1.0467371515316416718771.png'
import {Fade} from "react-awesome-reveal";

const Skills = () => {
    const htmlIcon = {
        backgroundImage: `url(${htmlImage})`
    }
    const sass = {
        backgroundImage: `url(${sassImage})`
    }
    const js = {
        backgroundImage: `url(${JSImage})`
    }
    const ts = {
        backgroundImage: `url(${TSImage})`
    }
    const react = {
        backgroundImage: `url(${ReactImage})`
    }
    const redux = {
        backgroundImage: `url(${ReduxImage})`
    }
    const node = {
        backgroundImage: `url(${NodeImage})`
    }
    const materialUi = {
        backgroundImage: `url(${MaterialUiImage})`
    }
    const git = {
        backgroundImage: `url(${GitImage})`
    }
    const storybook = {
        backgroundImage: `url(${StorybookImage})`
    }
    const jest = {
        backgroundImage: `url(${jestImage})`
    }
    const restApi = {
        backgroundImage: `url(${restApiImage})`
    }
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Fade direction={"up"} delay={200} triggerOnce={true}>
                        <Skill style={react} title={'React'}/>
                        <Skill style={redux} title={'Redux'}/>
                        <Skill style={ts} title={'Type Script'}/>
                        <Skill style={restApi} title={'Rest API'}/>
                        <Skill style={jest} title={'Jest'}/>
                        <Skill style={git} title={'GIT'}/>
                        <Skill style={node} title={'Node JS'}/>
                        <Skill style={materialUi} title={'Material ui'}/>
                        <Skill style={storybook} title={'Story book'}/>
                        <Skill style={js} title={'Java Script'}/>
                        <Skill style={htmlIcon} title={'HTML'}/>
                        <Skill style={sass} title={'SASS'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;
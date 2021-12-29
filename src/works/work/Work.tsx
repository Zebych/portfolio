import React from 'react';
import style from './Work.module.scss'
import Button from "../../common/button/Button";
import gitImage from "../../assets/image/git.png";
import {TitleBox} from './titleBox/TitleBox';

type WorkPropsType = {
    style: {}
    link: string
    linkToGit: string
    linkToGitBack?: string
    title: string
    shortDescription: string
}
const Work: React.FC<WorkPropsType> = (props) => {
    return (
        <div className={style.work}>
            <div style={props.style} className={style.image}>
                <Button buttonName={'Watch'} link={props.link}/>
            </div>
            <div className={style.titleBox}>
                <TitleBox title={props.title} icon={gitImage} link={props.linkToGit}/>
            </div>
            <span className={style.description}>
                  {props.shortDescription}
              </span>
        </div>
    );
};

export default Work;
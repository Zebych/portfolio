import React from 'react';
import styles from './Work.module.scss'
import Button from "../../common/button/Button";
import gitImage from "../../assets/image/git.png";
import {TitleBox} from './titleBox/TitleBox';

type WorkPropsType = {
    style: {}
    link: string
    linkToGit: string
    title: string
    shortDescription: string
}
const Work: React.FC<WorkPropsType> = (
    {
        style,
        link,
        linkToGit,
        title,
        shortDescription
    }) => {
    return (
        <div className={styles.work}>
            <div style={style} className={styles.image}>
                <Button buttonName={'Watch'} link={link}/>
            </div>
            <div className={styles.titleBox}>
                <TitleBox title={title} icon={gitImage} link={linkToGit}/>
            </div>
            <span className={styles.description}>
                  {shortDescription}
              </span>
        </div>
    );
};

export default Work;
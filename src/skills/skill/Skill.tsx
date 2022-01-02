import React from 'react';
import styles from './Skill.module.scss'
import {Title} from "../../common/title/Title";

type SkillPropsType = {
    style?: {}
    title: string
}
const Skill: React.FC<SkillPropsType> = ({style,title}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.iconBox}>
                <div className={styles.icon} style={style}/>
            </div>
            <div className={styles.text}>
                <Title title={title}/>
            </div>

        </div>
    );
};

export default Skill;
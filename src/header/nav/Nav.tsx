import React from 'react';
import {Link} from 'react-scroll';
import style from './Nav.module.scss'


const Nav = () => {
    return (
        <div className={style.header}>
            <Link activeClass={style.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={700}
                  className={style.link}
            > Projects</Link>
            <Link activeClass={style.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={700}
                  className={style.link}
            > Skills</Link>
            <Link activeClass={style.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={700}
                  className={style.link}
            > Contacts</Link>
            <div className={style.block}>Menu</div>
        </div>
    );
};

export default Nav;
import React from 'react';
import style from './PastExperience.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/title/Title";

const Education  = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title title={'past experience'}/>
          <ul>
              <p>
                  Adjustment of machine tools and manipulators with programmed control in high-precision
                  defense production.
              </p>
              <p>Qualification: 6th category (highest)</p>
              <p>Experience: 8 years</p>
              <p>job duties:</p>
              <ul>
                  <li>
                      Adjustment of machines with rotary mechanisms (tilt / rotation of the table) machining in
                      5 planes for one installation (180 ° х360 °).
                      Adjustment of hydro-abrasive cutting machines.
                  </li>
                  <li>
                      Drawing up a technical process
                  </li>
                  <li>
                      Writing control programs from a rack for control systems: HEIDENHAIN,Siemens,NC,Fanuc.
                  </li>
                  <li>
                      Writing control programs using CAD systems: SiemensNX,CIMCO.
                  </li>
                  <li>
                      3D modeling: КОМПАС-3D.
                  </li>
                  <li>
                      Selection of cutting tools, cutting conditions.
                  </li>
              </ul>
          </ul>
            </div>
        </div>
    )
}

export default Education;
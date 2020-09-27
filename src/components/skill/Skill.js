import React, { useState, useContext } from "react";

import SetSkill from "../set-skill/SetSkill";
import {SomeContext} from '../../context-service/ContextService';


const Skill = () => {

  // not affecting context state 
  const value = useContext(SomeContext);
  const [skill, addSkill] = useState({item: value.items[0].one})
  

  console.log('value from skill', value.items)

  const onItemAdd = e => {
    addSkill({
      item: skill.item + 1
    })
  }

  return (
    <React.Fragment>
      <div onClick={() => onItemAdd()}>{skill.item}</div>
      <SetSkill></SetSkill>
    </React.Fragment>
  );
};

export default Skill;

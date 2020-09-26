import React, { Component } from "react";
import Skills from "../skills/Skills";
import Skill from "../skill/Skill";

import {ContextService} from '../../context-service/ContextService'

class App extends Component {
  render() {
    return (
      <div>
    
          <ContextService>
            <Skills></Skills>
            <Skill></Skill>
          </ContextService>
       
      </div>
    );
  }
}

export default App
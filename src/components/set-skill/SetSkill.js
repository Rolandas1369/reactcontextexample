import React, { Component } from 'react'
import {SomeContext} from '../../context-service/ContextService';

export default class SetSkill extends Component {
    static contextType = SomeContext;
    render() {
        const value = this.context

        return (
            <div>
                {value.name}
            </div>
        )
    }
}

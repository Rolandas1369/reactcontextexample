import React, { Component } from 'react'
import {SomeContext} from '../../context-service/ContextService';

export default class SetSkill extends Component {
    static contextType = SomeContext;
    render() {
        const value = this.context
        console.log('value', value)
        return (
            <div onClick={() => value.printOne()}>
                {value.items[0].one}
            </div>
        )
    }
}

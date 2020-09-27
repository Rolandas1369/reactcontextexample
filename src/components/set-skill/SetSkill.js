import React, { Component, useContext } from 'react'
import {SomeContext} from '../../context-service/ContextService';
import {SomeConsumer} from '../../context-service/ContextService';

// const someContext = useContext(SomeContext)

export default class SetSkill extends Component {
    static contextType = SomeContext;
    render() {
        
        const value = this.context
        console.log('value', value)
        // console.log('somecontext', someContext)
        return (
            <SomeConsumer>
                {(value) => {
                    console.log(value.items, 'consumer')
                    return (
                        <div>
                            <div onClick={(e) => value.printOne(e)}>Okokok</div>
                            <div>Lower div {value.items[0].one}</div>
                        </div>
                    )
                }
            }
            </SomeConsumer>
            // <div onClick={() => value.printOne}>
            //     {value.items[0].one}
            // </div>
        )
    }
}

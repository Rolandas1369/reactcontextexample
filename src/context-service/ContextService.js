import React, {Component} from 'react';
const SomeContext =  React.createContext('defULT')

const SomeProvider = SomeContext.Provider

class ContextService extends Component {

    state = {
        items: [
            {one: '22221'},
            {two: '22222'}
        ]
    }

    printOne () {
        console.log('1')
    }


    render() {
        return (
        <SomeProvider value={{...this.state, printOne: this.printOne}}>{this.props.children}</SomeProvider>
        )
    }
}

export { ContextService }
export { SomeContext }
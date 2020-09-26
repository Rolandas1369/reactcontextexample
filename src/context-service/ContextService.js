import React, {Component} from 'react';
const SomeContext =  React.createContext('defULT')

const SomeProvider = SomeContext.Provider

class ContextService extends Component {

    state = {
        items: [
            {one: '1'},
            {two: '2'}
        ]
    }
    render() {
        return (
        <SomeProvider value={{...this.state}}>{this.props.children}</SomeProvider>
        )
    }
}

export { ContextService }
export { SomeContext }
import React, {Component} from 'react';
const SomeContext =  React.createContext('defULT')

const SomeProvider = SomeContext.Provider

class ContextService extends Component {
    render() {
        return (
        <SomeProvider value={{name: 'dog'}}>{this.props.children}</SomeProvider>
        )
    }
}

export { ContextService }
export { SomeContext }
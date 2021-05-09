import React, {Component} from 'react'
import './App.css'
import FormComponent from "./components/FormComponent";
import Message from "./components/Message";


class App extends Component {

    state = {
        messages: {},
        username: this.props.match.params.username
    }

    addMessage = message => {
        const messages = {...this.state.messages}
        messages[`message-${Date.now()}`] = message

        this.setState({messages})
    }

    render() {

        const messages = Object.keys(this.state.messages)
            .map(key => (
                <Message
                    key={key}
                    username={this.state.messages[key].username}
                    message={this.state.messages[key].message}
                />
            ))

        return (
            <div className='box'>
                <h2>HOMEPAGE</h2>

                <div className="messages">
                    <div className="message">
                        {messages}
                    </div>
                </div>

                <FormComponent
                    length={150}
                    userName={this.state.username}
                    addMessage={this.addMessage}
                />
            </div>
        )
    }
}

export default App

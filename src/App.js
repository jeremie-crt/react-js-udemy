import React, {Component, createRef} from 'react'
import './App.css'
import './Animation.css'
import FormComponent from "./components/FormComponent";
import Message from "./components/Message";

//Firebase
import base from './base'

//Animations
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class App extends Component {

    state = {
        messages: {},
        username: this.props.match.params.username
    }

    //Initialize the ref
    messageRef = createRef()

    //Sync the database with the app
    componentDidMount() {
        base.syncState('/', {
            context: this,
            state: 'messages'
        })
    }

    //Force the scroll bar to be at the bottom at each new insert
    componentDidUpdate(prevProps, prevState, snapshot) {
        const ref = this.messageRef.current
        ref.scrollTop = ref.scrollHeight
    }

    //Add a new message to the state
    addMessage = message => {
        const messages = {...this.state.messages}
        //Insert a new message in the list with a timestamp
        messages[`message-${Date.now()}`] = message

        //Loop through all messages to delete over 10th
        Object
            .keys(messages)
            .slice(0, -10)
            .forEach(key => {
                messages[key] = null
            })

        this.setState({messages})
    }

    //Check if the username is equal or not - display css
    isUser = username => username === this.state.username

    render() {

        //Generates the Message components for each message & a css transition
        const messages = Object.keys(this.state.messages)
            .map(key => (
                <CSSTransition
                    key={key}
                    classNames='fade'
                    timeout={400}
                >
                    <Message
                        isUser={this.isUser}
                        username={this.state.messages[key].username}
                        message={this.state.messages[key].message}
                    />
                </CSSTransition>
            ))

        return (
            <div className='box'>
                <h2>HOMEPAGE</h2>

                <div ref={this.messageRef}
                     className="messages">
                    <TransitionGroup className="message">
                        {messages}
                    </TransitionGroup>
                </div>

                <FormComponent
                    length={150}
                    username={this.state.username}
                    addMessage={this.addMessage}
                />
            </div>
        )
    }
}

export default App

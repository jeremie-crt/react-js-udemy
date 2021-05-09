import React, {Component} from "react";
import { Redirect } from "react-router-dom";


class Connexion extends Component {

    state = {
        username: '',
        goToChat: false
    }

    handleChange = event => {
        const username = event.target.value
        this.setState({ username })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }

    render() {
        if(this.state.goToChat) {
            return <Redirect push to={`/nickname/${this.state.username}`} />
        }

        return (
            <div className="connexionBox">
                <form onSubmit={this.handleSubmit} className="connexion">
                    <input
                        value={this.state.username}
                        onChange={this.handleChange}
                        type="text" placeholder="Pseudo" required/>
                    <button type="submit">
                        GO
                    </button>
                </form>
            </div>
        )
    }
}

export default Connexion
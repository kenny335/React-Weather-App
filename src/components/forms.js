import React from "react";

class Forms extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input className="inputBox" type="text" name="city" placeholder="city..."/>
                <input className="inputBox" type="text" name="country" placeholder="country..."/>
                <button>Search</button>
            </form>
        )
    }
}

export default Forms;
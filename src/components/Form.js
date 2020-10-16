import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getCoord} style={{textAlign: "center"}}>
                <input type="text" name="city" placeholder="location..."></input>
                <button type="button" className="btn btn-light" style={{padding: "12px 20px"}}>Search</button>
            </form>
        )
    }
}

export default Form;
import React, { Component } from "react";

class Step extends Component {

    render() {

        return (
            <div className="step">
                Step:
                <input onChange={(e) => this.props.stepMethod(e.target.value)} type="number" />
            </div>
        );
    }
}

export default Step;
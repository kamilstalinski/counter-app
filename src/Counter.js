import React, { Component } from 'react';
import './Counter.css'

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step'
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1,
        };
    }



    changeValue = (action) => {
        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += Number(prevState.stepValue);
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue
            } else {
                currentCounterValue = 0;
            }


            return ({
                counterValue: currentCounterValue
            })
        })

    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            })
        })
    }

    updateStep = (updateStepValue) => {
        this.setState(() => {
            return ({
                stepValue: updateStepValue
            })
        })
    }

    render() {

        let clockElement = '';

        if (this.state.showClock) {
            // clockElement = <Clock toggleClockMethod={this.toggleClock} />
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />

        } else {
            clockElement = <span onClick={this.toggleClock} className='show-clock'>Show Clock</span>
        };

        return (
            <div className='counter'>
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step stepMethod={this.updateStep} />
                {clockElement}
            </div>
        )
    }
}

export default Counter;
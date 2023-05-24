import React, {Component} from 'react';

class CustomButton extends Component {
	constructor(props) {
        super(props);
        this.state = {
            active: props.active,
			available: props.available 
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
			<button className={`lot${this.state.active ? ' activebtn' : (this.state.available ? '' : ' inactivebtn')}`} onClick={this.toggleClass.bind(this)} disabled={this.state.available ? false : true}>{this.props.text}</button>
        )
  }
}

export default CustomButton;

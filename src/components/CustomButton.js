import React, {Component} from 'react';

class CustomButton extends Component {
	constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
			<button className={`lot ${this.state.active ? 'activebtn' : null}`} onClick={this.toggleClass.bind(this)}>{this.props.text}</button>
                
        )
  }
}

export default CustomButton;

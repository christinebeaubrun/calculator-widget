import {add, subtract} from 'add-function.js'
require('../styles/app.less');

class Calculator extends React.Component {
	constructor(){
		super();
		this.state = {
			pressedKey: ""
		};
	}

	onBtnClicked(e){
		var targetValue = $(e.target).html();

		this.setState( {pressedKey: targetValue} );
	}

	createCalNumBody(){
		let container = [];
		for (let idx = 9; idx >= 0; idx--) {
			container.push(
				<div 
				key={idx}
				className="cal-number"
				onClick={this.onBtnClicked.bind(this)}>{idx}</div>);
		}
 
		return container;
	}

	render(){
		let calBody = this.createCalNumBody();

		let pressedKey = this.state.pressedKey || "";

		return (<div>
			<div ref="header">Display Header:{pressedKey}</div>
			<div className="cal-body-ctn">{calBody}</div>
		</div>);
	}
}
var example = document.getElementById("exampleDiv");
ReactDOM.render(<Calculator />, example);
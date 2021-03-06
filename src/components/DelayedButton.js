// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
	handleClick = (event) => {
		event.persist()
		window.setTimeout(()=>{
			this.props.onDelayedClick(event);
		}, this.props.delay)
	}

	render(){
			console.log(this.props)

		return(
		<button
		onClick = {this.handleClick}
		> Delayed
			
		</button>
		)
	}

}
export default DelayedButton
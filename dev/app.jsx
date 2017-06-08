import React from 'react'
import ReactDOM from 'react-dom'
import Progress from '../lib/main'

class Application extends React.Component {
	render() {
		return (
			<div className='application'>
				<Progress.Component />
				<button onClick={this.showProgress}>Show progress</button>
				<button onClick={this.hideProgress}>Hide progress</button>
			</div>
		)
	}

	showProgress() {
		Progress.show()
	}

	hideProgress() {
		Progress.hide()
	}
}

ReactDOM.render(<Application />, document.getElementById('root'))
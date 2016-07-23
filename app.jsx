import React from 'react'
import ReactDOM from 'react-dom'
import Progress from './src/main'

class Application extends React.Component {
	render() {
		return (
			<div className='application'>
				<Progress.Component />
				<button onClick={this.showProgress}>Show progress</button>
			</div>
		)
	}

	showProgress() {
		Progress.show()
	}
}

ReactDOM.render(<Application />, document.getElementById('root'))
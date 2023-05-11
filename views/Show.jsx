const React = require('react')

class Show extends React.Component {
    render () {
        const { goodbye } = this.props
        return (
            <div>
                <h1>{goodbye.language}</h1>
                <h2>{goodbye.farewell}</h2>
            </div>
        )
    }
}

module.exports = Show
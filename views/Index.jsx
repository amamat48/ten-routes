const React = require('react')

class Index extends React.Component {
    render () {
        const { greeting } = this.props
        return (
            <div>
                <h1>{greeting}</h1>
            </div>
        )
    }
}

module.exports = Index
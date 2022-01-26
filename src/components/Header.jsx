import PropTypes from 'prop-types'

function Header(props) { // props -> is an object, we can use destructuring here also
    return (
        <header>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

// use default props when no props passed to Header component
Header.defaultProps = {
    text: 'This is a default prop'
}

// use strict prop types
Header.PropTypes = {
    text: PropTypes.string
}

export default Header

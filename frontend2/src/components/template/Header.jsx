import './Header.css'
import React from 'react'

export default props => (
    <header className="header d-none d-sm-flex flex-column">
        <h1>
            {props.title}
        </h1>
    </header>
)
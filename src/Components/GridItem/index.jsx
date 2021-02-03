import React from 'react'

const GridItem = (props) => {
    return (
        <div data-testid={`grid-item-${props.number}`}>
            <p data-testid={`grid-item-value`}>{props.number}</p>
        </div>
    )
}

export default GridItem

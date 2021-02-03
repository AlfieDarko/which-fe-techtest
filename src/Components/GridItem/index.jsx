import React from 'react'

const GridItem = (props) => {
    return (
        <div data-testid={`grid-item-${props.number}`}>
            {props.number}
        </div>
    )
}

export default GridItem

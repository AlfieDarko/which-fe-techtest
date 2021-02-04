import './grid.scss'

import GridItem from '../GridItem'
import React from 'react'

const Grid = ({ numberOfItems}) => {

    const renderGridItems = (numberOfItems) => {
      return [...Array(numberOfItems)].map((element, index) => (<GridItem number={index+1} />))
    }

    return (
        <div className="grid" data-testid="grid">
          {renderGridItems(numberOfItems)}
        </div>
    )
}

export default Grid

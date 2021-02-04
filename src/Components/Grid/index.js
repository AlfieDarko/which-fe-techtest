import React, { useState } from 'react'
import PropTypes from 'prop-types'

import GridItem from '../GridItem'
import findMultiples from '../../utils/findMultiples'
import './grid.scss'

const Grid = ({ numberOfItems }) => {
  const [clickedItemValue, setClickedItemValue] = useState()

  const renderGridItems = (numberOfItems) => {
    const gridItems = [...Array(numberOfItems).keys()].map(i => i + 1)

    if (clickedItemValue) {
      const multiplesList = findMultiples(numberOfItems, clickedItemValue)

      return gridItems.map((element) => {
        const isCommonMultiple = multiplesList.includes(element)
        return <GridItem
          key={element}
          number={element}
          setClickedItemValue={setClickedItemValue}
          isCommonMultiple={isCommonMultiple}
        />
      })
    }

    return gridItems.map((element) => {
      return <GridItem
          key={element}
          number={element}
          setClickedItemValue={setClickedItemValue}
          isCommonMultiple={false}
        />
    })
  }

  return (
        <div className="grid" data-testid="grid">
          {renderGridItems(numberOfItems)}
        </div>
  )
}

Grid.propTypes = {
  numberOfItems: PropTypes.number
}

export default Grid

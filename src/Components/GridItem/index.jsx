import './gridItem.scss'

import React from 'react'
import cx from 'classnames'

const GridItem = ({ number, setClickedItemValue, isCommonMultiple }) => {
  const onClickHandler = () => {
    setClickedItemValue(number)
  }

  const gridItemClassName = cx({ 'grid-item': !isCommonMultiple }, { 'grid-item--state-highlighted': isCommonMultiple })

  return (
    <button type="button" className={gridItemClassName} value={number} data-testid={`grid-item-${number}`} onClick={() => onClickHandler()}>
      <p data-testid="grid-item-value">{number}</p>
    </button>
  )
}

export default GridItem

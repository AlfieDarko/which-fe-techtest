import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './gridItem.scss'

const GridItem = ({ number, setClickedItemValue, isCommonMultiple }) => {
  const onClickHandler = () => {
    setClickedItemValue(number)
  }

  const gridItemClassName = cx({ 'grid-item': !isCommonMultiple }, { 'grid-item grid-item--state-highlighted': isCommonMultiple })

  return (
    <button type="button" className={gridItemClassName} value={number} data-testid={`grid-item-${number}`} onClick={() => onClickHandler()}>
      <p className={'grid-item__value'} data-testid="grid-item-value">{number}</p>
    </button>
  )
}

GridItem.propTypes = {
  number: PropTypes.number,
  setClickedItemValue: PropTypes.func,
  isCommonMultiple: PropTypes.bool
}

export default GridItem

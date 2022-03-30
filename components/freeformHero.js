import React from 'react'
import cx from 'classnames'

import BlockContent from '@components/block-content'

const FreeformHero = ({ data }) => {
  const { maxWidth, textAlign, content } = data

  return <BlockContent className={cx(maxWidth, textAlign)} blocks={content} />
  
}

export default FreeformHero

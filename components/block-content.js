import React from 'react'
import cx from 'classnames'
import BlockContent from '@sanity/block-content-to-react'

import { blockSerializers } from '@components/block-serializers'
import { AnimatePresence, m } from 'framer-motion'

const fadeAnim = {
  show: {
    opacity: 0,
    y: -100,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  },
  hide: {
    opacity: 0,
    y: -100,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
  },
}

const Content = ({ blocks, className }) => {
  if (!blocks) return null

  return (
    <m.div
    initial="hide"
    animate="show"
    exit="hide"
    variants={fadeAnim}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
      },
    }}
  >
    <BlockContent
      renderContainerOnSingleChild
      className={cx('rc', className)}
      blocks={blocks}
      serializers={blockSerializers}
    />
        </m.div>
  )
}

export default Content

import React from 'react'

import Photo from '@components/photo'
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

const DividerPhoto = ({ data = {} }) => {
  const { photo } = data

  if (!photo) return null

  return (
    <div className="divider">
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
        duration: .8,
      },
    }}
  >
      <Photo
        photo={photo}
        width={1600}
        srcSizes={[800, 1000, 1200, 1600]}
        sizes="100vw"
      />
      </m.div>
    </div>
  )
}

export default DividerPhoto

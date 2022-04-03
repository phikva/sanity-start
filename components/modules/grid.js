import React from 'react'
import cx from 'classnames'

import ProductCard from '@components/product-card'
import Freeform from '@components/freeform'
import AccordionList from '@components/accordion-list'
import FreeformHero from '@components/freeformHero'
import Hero from './hero'

import { AnimatePresence, m } from 'framer-motion'

const fadeAnim = {
  show: {
    opacity: 0,
    y: -100,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
  hide: {
    opacity: 0,
    y: -100,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
}

const Grid = ({ data = {} }) => {
  const { size, columns } = data

  const getGridSize = (
    breakpoint,
    size,
    justify = false,
    align = false,
    start = false
  ) => {
    const hasBreakpoint = breakpoint && breakpoint.trim()
    const colSpan = hasBreakpoint
      ? `${breakpoint}:col-span-${size}`
      : `col-span-${size}`

    const colStart = hasBreakpoint
      ? `${breakpoint}:col-start-${start}`
      : `col-start-${start}`

    const colJustify = hasBreakpoint ? `${breakpoint}:${justify}` : justify
    const colAlign = hasBreakpoint ? `${breakpoint}:${align}` : align

    return cx(
      colSpan,
      start && colStart,
      justify && colJustify,
      align && colAlign
    )
  }

  return (
    <section className="section">
      <m.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={fadeAnim}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.6,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.2,
          },
        }}
      >
        <div className="section--content">
          <div
            className={`grid grid-cols-${size} gap-x-10 gap-y-10 sm:gap-x-10 lg:gap-x-10`}
          >
            {columns.map((col, key) => {
              const { sizes, blocks } = col

              return (
                <div
                  key={key}
                  className={cx(
                    sizes.map((size) =>
                      getGridSize(
                        size.breakpoint,
                        size.width,
                        size.justify,
                        size.align,
                        size.start
                      )
                    )
                  )}
                >
                  {blocks.map((block, key) => (
                    <GridBlock key={key} block={block} />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </m.div>
    </section>
  )
}

const GridBlock = ({ block }) => {
  const type = block._type

  switch (type) {
    case 'freeform':
      return <Freeform data={block} />
    case 'accordions':
      return <AccordionList data={block} />
    case 'freeformHero':
      return <FreeformHero data={block} />
    case 'hero':
      return <Hero data={block} />

    // case 'productCard':
    //   return (
    //     <ProductCard
    //       className="is-inline"
    //       product={block.product}
    //       hasVisuals
    //       showThumbs
    //       showPrice
    //     />
    //   )
    default:
      return null
  }
}

export default Grid

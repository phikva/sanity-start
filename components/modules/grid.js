import React from 'react'
import cx from 'classnames'

import ProductCard from '@components/product-card'
import Freeform from '@components/freeform'
import AccordionList from '@components/accordion-list'
import FreeformHero from '@components/freeformHero'
import Hero from './hero'


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

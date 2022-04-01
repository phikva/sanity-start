import React from 'react'

import BlockContent from '@components/block-content'
import VideoLoop from '@components/vimeo-loop'
import Photo from '@components/photo'

const Hero = ({ data = {} }) => {
  const { content, bgType, photos, video } = data

  return (
    <section className="hero">
      {content && (
        <div className="hero--overlay">
          <div className="w-full max-w-5xl mx-auto text-left text-pageText absolute bottom-0">
            <BlockContent blocks={content} />
          </div>
        </div>
      )}

      {bgType === 'video' && (
        <>
          <div className="hidden sm:block">
            <VideoLoop title={video.title} id={video.id} />
          </div>
          <div className="sm:hidden">
            <VideoLoop title={video.title} id={video.id} />
          </div>
        </>
      )}

      {bgType === 'photo' && (
        <>
          {photos?.desktopPhoto && (
            <Photo
              photo={photos.desktopPhoto}
              width={1600}
              srcSizes={[800, 1000, 1200, 1600]}
              sizes="100vw"
              layout="fill"
              className="hero--bg is-desktop"
            />
          )}
          {photos?.mobilePhoto && (
            <Photo
              photo={photos.mobilePhoto}
              width={800}
              sizes="100vw"
              layout="fill"
              className="hero--bg is-mobile"
            />
          )}
        </>
      )}
    </section>
  )
}

export default Hero

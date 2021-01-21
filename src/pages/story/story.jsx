import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './story.scss'
import { motion } from 'framer-motion'
import StoryBanner from '../../components/story-banner/story-banner'
import FullImgBanner from '../../components/full-img-banner/full-img-banner'
import { cardInfo } from '../stories/stories-info'

const Story = () => {
  let { id } = useParams()
  const selectedStory = cardInfo.find(info => info.id === parseInt(id))


  return (
    <motion.div className='story wrap'
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <StoryBanner {...selectedStory} />
      <div className="story-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus eros sed magna ullamcorper tincidunt. Ut cursus congue nisi sit amet eleifend. Aenean in dapibus mauris. Etiam ut pellentesque nisi. Ut orci odio, ullamcorper sit amet vehicula a, molestie sed lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vehicula viverra ante eu cursus. Vestibulum sed nisl sodales nibh convallis cursus. Nulla convallis ac nisi vel faucibus. 
        </p>
        <p>
          Quisque faucibus diam pulvinar cursus pretium. Etiam porta, elit et vestibulum dignissim, risus eros molestie dolor, eget rhoncus nisi risus ac felis. Phasellus dolor dui, dignissim eu elit ut, faucibus sagittis nisi. Fusce id fringilla sapien. Maecenas vitae auctor erat. Vestibulum arcu nisl, tincidunt congue dapibus eget, ultricies nec metus. Vivamus eleifend dolor tempus, ultrices ipsum id, vehicula sapien.
        </p>
        <p>
          Maecenas mattis posuere purus, a laoreet nunc sagittis eu. Aliquam at velit urna. Cras eu porttitor felis, eget tristique ex. Nulla vel aliquet nibh, sit amet tincidunt odio. Quisque vitae posuere mi, in faucibus libero. Phasellus venenatis, odio ut congue maximus, ante risus porta erat, a interdum libero sapien quis purus. Vivamus auctor, risus vitae malesuada consequat, lectus nunc tincidunt elit, a venenatis massa est a lectus. Cras ut arcu enim.
        </p>
        <p>
          Nullam auctor lacus vel pulvinar semper. Nullam facilisis tempus dictum. Curabitur consequat ex id bibendum congue. Donec ac dapibus nisi. Praesent tempor lectus non lorem gravida consequat. Vivamus facilisis suscipit libero nec rhoncus. Etiam at magna nec nisl commodo varius. Sed faucibus mi nec mollis fringilla. Nunc et vestibulum eros. 
        </p>
        <p>
          Proin in congue nisi. Mauris fermentum cursus efficitur. Sed eu convallis augue, quis hendrerit massa. Nam vehicula, ante nec convallis blandit, ex ante venenatis tellus, eget interdum metus orci quis est. Nam sodales turpis sapien, sed aliquet ipsum luctus sed. Cras mollis nunc sit amet lectus fermentum, nec dictum orci aliquam. Duis vulputate sapien eget est ultrices, nec condimentum erat imperdiet. Mauris pulvinar ligula quis orci porta condimentum. Integer molestie lectus sit amet turpis mollis laoreet. 
        </p>
        <p>
          Nulla at nibh eleifend, viverra lacus ut, semper leo. Nulla eget ante fringilla tortor porttitor pretium id vitae turpis. Pellentesque non mollis augue. Aliquam euismod diam vitae ante viverra auctor. Nulla ultrices egestas odio, posuere faucibus quam laoreet ac. Donec volutpat, tortor consequat eleifend sodales, lorem nulla sollicitudin quam, quis semper massa diam a libero.
        </p>
      </div>
      <FullImgBanner />
    </motion.div>
  )
}

export default Story;
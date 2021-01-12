// banner imgs
import Man from '../../assets/home/desktop/create-and-share.jpg'
import Laptop from '../../assets/home/desktop/beautiful-stories.jpg'
import Design from '../../assets/home/desktop/designed-for-everyone.jpg'
// card imgs
import Mountain from '../../assets/stories/desktop/mountains.jpg'
import City from '../../assets/stories/desktop/cityscapes.jpg'
import Days from '../../assets/stories/desktop/18-days-voyage.jpg'
import Architecture from '../../assets/stories/desktop/architecturals.jpg'
// gem imgs
import Tablet from '../../assets/features/desktop/responsive.svg'
import NoLimit from '../../assets/features/desktop/no-limit.svg'
import Embed from '../../assets/features/desktop/embed.svg'

export const bannerInfo = [
  {
    title: 'Create and share your photo stories.',
    body: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    img: Man,
    btnText: 'Get an invite',
    sideStripe: true
  },
  {
    title: 'Beautiful stories every time',
    body: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    img: Laptop,
    btnText: 'View the stories',
    bgWhite: true,
    switchSide: true
  },
  {
    title: 'Designed for everyone',
    body: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
    img: Design,
    btnText: 'View the stories',
    bgWhite: true
  }
]

export const cardInfo = [
  {
    title: 'The Mountains',
    author: 'John Appleseed',
    img: Mountain
  },
  {
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    img: City
  },
  {
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    img: Days
  },
  {
    title: 'Architecturals',
    author: 'Samantha Brooke',
    img: Architecture
  },
]

export const gemInfo = [
  {
    title: '100% Responsive',
    body: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    img: Tablet
  },
  {
    title: 'No Photo Upload Limit',
    body: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    img: NoLimit
  },
  {
    title: 'Available To Embed',
    body: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    img: Embed
  },
]
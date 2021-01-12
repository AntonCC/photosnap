// Banner imgs
import Hero from '../../assets/features/desktop/hero.jpg'
// Gem imgs
import Tablet from '../../assets/features/desktop/responsive.svg'
import NoLimit from '../../assets/features/desktop/no-limit.svg'
import Embed from '../../assets/features/desktop/embed.svg'
import Domain from '../../assets/features/desktop/custom-domain.svg'
import Boost from '../../assets/features/desktop/boost-exposure.svg'
import Drag from '../../assets/features/desktop/drag-drop.svg'

export const bannerInfo = {
  title: 'Features',
  body: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
  img: Hero,
  sideStripe: true
}

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
  {
    title: 'Custom Domain',
    body: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    img: Domain
  },
  {
    title: 'Boost Your Exposure',
    body: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    img: Boost
  },
  {
    title: 'Drag & Drop Image',
    body: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    img: Drag
  },
]
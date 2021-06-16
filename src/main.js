// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'timeline-vuejs/dist/timeline-vuejs.css'
import '~/assets/scss/app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'
import {
  faEnvelope
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Adding social icons
library.add(faFacebook)
library.add(faGithub)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faTwitter)
library.add(faEnvelope)
library.add(faBars)

export default function (Vue, { router, head, isClient }) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
}

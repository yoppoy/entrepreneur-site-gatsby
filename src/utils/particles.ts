import { ParticlesProps, HoverMode, ClickMode } from 'react-particles-js'

import { isBrowser } from '@utils/index'

import DockerIcon from '../../static/assets/icons/particles/docker-icon.png'
import GatsbyIcon from '../../static/assets/icons/particles/gatsby-icon.png'
import GraphqlIcon from '../../static/assets/icons/particles/graphql-icon.png'
import MaterialIcon from '../../static/assets/icons/particles/material-icon.png'
import NodeJsIcon from '../../static/assets/icons/particles/nodejs-icon.png'
import ReactIcon from '../../static/assets/icons/particles/react-icon.png'
import ReduxIcon from '../../static/assets/icons/particles/redux-icon.png'
import TypescriptIcon from '../../static/assets/icons/particles/typescript-icon.png'

const PARTICLE_ICONS = [
  ReactIcon,
  GatsbyIcon,
  ReduxIcon,
  DockerIcon,
  MaterialIcon,
  GraphqlIcon,
  TypescriptIcon,
  NodeJsIcon
]

const particleImages = PARTICLE_ICONS.map((image) => ({
  src: image,
  height: 40,
  width: 40
}))

const particleConfig: ParticlesProps['params'] = {
  particles: {
    number: {
      value: isBrowser ? window.innerWidth / 50 : 50
    },
    shape: {
      type: ['image'],
      image: particleImages
    },
    color: {
      value: '#FFF'
    },
    opacity: {
      value: 0.75,
      random: false,
      anim: {
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      distance: 60
    },
    size: {
      value: 15,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 10,
        sync: false
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: HoverMode.repulse
      },
      onclick: {
        enable: true,
        mode: ClickMode.push
      }
    }
  }
}

export default particleConfig

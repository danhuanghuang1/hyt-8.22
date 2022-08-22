// 默认引入
import marquee from './marquee.js'
// 按需引入
import { tabs } from './tabs.js'
marquee()
tabs()
import './styles/index.css'
import './styles/index.less'
import './app.vue'

import gifSrc from './assets/1.gif'
const img=document.createElement('img')
img.src=gifSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2=document.createElement('img')
img2.src=pngSrc
document.body.appendChild(img2)
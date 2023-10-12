import { NavMenu } from './components/NavMenu'
import './reset.css'
import './index.css'
import { Router } from './core/router'

// TODO: 컴포넌트로 맵핑하기
const routerMap = {
  '/home': '<span>HOME</span>',
  '/about': '<span>ABOUT</span>',
}

const $root = document.getElementById('root') as HTMLElement

new NavMenu({ $parent: $root })

new Router({ routes: routerMap })

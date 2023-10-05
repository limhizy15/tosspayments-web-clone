import { navMenu } from './NavMenu'
import { Router } from './router'

const $root = document.getElementById('root')

if (!!$root) {
  navMenu($root)
}

// TODO: 컴포넌트로 맵핑하기
const routerMap = {
  '/home': '<span>HOME</span>',
  '/about': '<span>ABOUT</span>',
}

new Router({ routes: routerMap })

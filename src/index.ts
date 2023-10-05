import { navMenu } from './NavMenu'
import { router } from './router'

const $root = document.getElementById('root')

if (!!$root) {
  navMenu($root)
}

window.addEventListener('DOMContentLoaded', (e) => {
  router.navigate(window.location.pathname.replace('/', ''))
})

import { RouterMap, createRouter } from './router'

const routerMap: RouterMap = {
  home: {
    path: '/home',
    html: '<span>HOME</span>',
  },
  about: {
    path: '/about',
    html: '<span>ABOUT</span>',
  },
}

const router = createRouter(routerMap)

window.addEventListener('DOMContentLoaded', (e) => {
  router.navigate(window.location.pathname.replace('/', ''))
})

// TODO: header 컴포넌트로 분리
const $header = document.getElementById('header')

$header?.addEventListener('click', (e) => {
  const target = e.target as HTMLButtonElement
  router.navigate(target.id)
})

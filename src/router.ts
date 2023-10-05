// TODO: html이 아닌 컴포넌트를 넣도록 수정
export type RouterMap = Record<string, { path: string; html: string }>

export const createRouter = (routerMap: RouterMap) => {
  const _routerMap = routerMap

  const $root = document.getElementById('root')

  return {
    navigate: (pathname: string) => {
      const foundRoute = _routerMap?.[pathname]

      if (!!foundRoute) {
        history.pushState(null, '', foundRoute.path)

        if (!!$root) {
          const $main = document.getElementById('main')

          if (!$main) {
            const $newMain = document.createElement('main')
            $newMain.id = 'main'
            $newMain.innerHTML = foundRoute.html

            $root.appendChild($newMain)
          } else {
            $main.innerHTML = foundRoute.html
          }
        }
      }
    },
  }
}

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

export const router = createRouter(routerMap)

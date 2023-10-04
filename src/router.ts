// TODO: html이 아닌 컴포넌트를 넣도록 수정
export type RouterMap = Record<string, { path: string; html: string }>

export const createRouter = (routerMap: RouterMap) => {
  const _routerMap = routerMap

  const $root = document.getElementById('root')

  return {
    navigate: (pathname: string) => {
      const foundRoute = _routerMap?.[pathname]

      if (foundRoute) {
        history.pushState(null, '', foundRoute.path)
        if (!!$root) {
          $root.innerHTML = foundRoute.html
        }
      }
    },
  }
}

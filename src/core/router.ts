interface RouterProps {
  // TODO: path에 맞는 string이 아닌 컴포넌트를 맵핑하도록
  routes: Record<string, string>
}

export class Router {
  routes: Record<string, string>

  constructor({ routes }: RouterProps) {
    this.routes = routes
    this.bindEvent()
  }

  bindEvent() {
    document.body.addEventListener('click', (e) => {
      const targetElement = e.target as HTMLElement

      if (targetElement.matches('[data-spa-link]')) {
        e.preventDefault()
        const newURL = (targetElement as HTMLAnchorElement).href

        history.pushState(null, '', newURL)
        this.renderPage()
      }
    })

    window.addEventListener('load', () => this.renderPage())
    window.addEventListener('popstate', () => this.renderPage())
  }

  renderPage() {
    const path = window.location.pathname
    const page = this.routes[path]

    const $root = document.getElementById('root') as HTMLElement
    const $main = document.getElementById('main') as HTMLElement

    let $newMain: HTMLElement

    if (!$main) {
      $newMain = document.createElement('main')
      $newMain.id = 'main'
      $root.appendChild($newMain)
    } else {
      $newMain = $main
    }

    if (page == null) {
      $newMain.innerHTML = `<h1>404</h1>`
    } else {
      $newMain.innerHTML = page
    }
  }
}

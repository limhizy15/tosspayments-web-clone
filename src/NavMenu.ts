import { router } from './router'

export const navMenu = ($parent: HTMLElement) => {
  const template = `
    <header id="header">
      <button id="home">A</button>
      <button id="about">B</button>
    </header>`

  const setEvent = () => {
    const $header = document.getElementById('header')

    $header?.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement
      router.navigate(target.id)
    })
  }

  const render = () => {
    $parent.innerHTML = template
  }

  render()
  setEvent()
}

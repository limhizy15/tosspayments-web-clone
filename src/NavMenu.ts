import { router } from './router'

export const navMenu = ($parent: HTMLElement) => {
  const template = /*html*/ `
    <nav class="navbar">
      <ul class="navbar__menu">
        <li id="home" class="navbar__item">
          <a class="navbar__button">호엥</a>
        </li>
        <li id="about" class="navbar__item">
          <a class="navbar__button">오엥</a>
        </li>
      </ul>
    </nav>`

  const setEvent = () => {
    const $header = document.querySelector('.navbar')

    $header?.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement
      const targetID = target.closest('li')?.id

      if (!!targetID) {
        router.navigate(targetID)
      }
    })
  }

  const render = () => {
    $parent.innerHTML = template
  }

  render()
  setEvent()
}

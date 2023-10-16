import { Component, ComponentProp } from '../core/component'

export class NavMenu extends Component {
  $parent: HTMLElement

  template: string = /*html*/ `<header id="header">
    <a href="/" data-spa-link>HOME</a>
    <a href="/fnq" data-spa-link>FNQ</a>
  </header>`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    this.render()
  }
}

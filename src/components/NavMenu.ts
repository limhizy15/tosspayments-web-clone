import { Component, ComponentProp } from '../core/component'

export class NavMenu extends Component {
  $parent: HTMLElement

  template: string = /*html*/ `<header id="header">
    <a href="/home" data-spa-link>A</a>
    <a href="/about" data-spa-link>B</a>
  </header>`

  constructor({$parent}: ComponentProp) {
    super({$parent})
    this.$parent = $parent
  }
}

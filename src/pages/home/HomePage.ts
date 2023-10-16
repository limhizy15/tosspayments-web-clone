import { Component, ComponentProp } from '../../core/component'

export class HomePage extends Component {
  $parent: HTMLElement

  template: string = /*html*/ `<span>HOME</span>`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    console.log($parent)

    this.render()
  }
}

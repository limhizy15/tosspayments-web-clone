import { Component, ComponentProp } from '../../core/component'

export class FnqPage extends Component {
  $parent: HTMLElement

  template: string = /*html*/ `<span>FNQ</span>`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    this.render()
  }
}

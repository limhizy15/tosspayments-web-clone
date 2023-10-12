export interface ComponentProp {
  $parent: HTMLElement
}

export class Component {
  $parent: HTMLElement
  template: string = ''

  constructor({ $parent }: ComponentProp) {
    this.$parent = $parent
    this.render()
  }

  render() {
    this.$parent.innerHTML = this.template
  }
}

import { Component, ComponentProp } from '../../core/component'
import { SectionEasy } from './SectionEasy'
import { SectionEasySync } from './SectionEasySync'
import { SectionFranchisee } from './SectionFranchisee'
import { SectionMain } from './SectionMain'

export class HomePage extends Component {
  $parent: HTMLElement

  template: string = /*html*/ `<div>
    <section id='home_section_main'></section>
    <section id='home_section_franchisee'></section>
    <section id='home_section_easy'></section>
    <section id='home_section_easy_sync'></section>
  </div>`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    this.render()
  }

  render(): void {
    this.$parent.innerHTML = this.template

    const $home_section_main = document.getElementById(
      'home_section_main',
    ) as HTMLElement
    const $home_section_franchisee = document.getElementById(
      'home_section_franchisee',
    ) as HTMLElement
    const $home_section_easy = document.getElementById(
      'home_section_easy',
    ) as HTMLElement
    const $home_section_easy_sync = document.getElementById(
      'home_section_easy_sync',
    ) as HTMLElement

    new SectionMain({ $parent: $home_section_main })
    new SectionFranchisee({ $parent: $home_section_franchisee })
    new SectionEasy({ $parent: $home_section_easy })
    new SectionEasySync({ $parent: $home_section_easy_sync })
  }
}

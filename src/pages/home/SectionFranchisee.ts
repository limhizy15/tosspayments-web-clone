import { Component, ComponentProp } from '../../core/component'

export class SectionFranchisee extends Component {
  template: string = /*html*/ `
  <h2>국내 PG 거래액 1위, 함께하는 가맹점 수 100,000+</h2>
  <img src='https://static.toss.im/png-icons/timeline/google-horizontal.svg' />
  <img src='https://static.toss.im/assets/payments/homepage/logo-kakaocompany.png' />
  <img src='https://static.toss.im/assets/payments/homepage/logo-samsung.png' />
  <img src='https://static.toss.im/assets/payments/homepage/logo-gucci.png' />
  <img src='https://static.toss.im/png-icons/timeline/costco-horizontal.svg' />
  <img src='https://static.toss.im/png-icons/timeline/gmarketfull.png' />`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    this.render()
  }
}

import { Component, ComponentProp } from '../../core/component'

export class SectionEasy extends Component {
  template: string = /*html*/ `
  <h1>결제는 당연히 쉽고 편해야죠</h1>
  <h6>고객, 가맹점, 개발자 모두를 위해</h6>

  <section>
    <button>결제고객</button>
    <h4>고객이 원하는 다양한 결제수단 한 번에 제공</h4>
    <h6>주요 간편결제 포함 총 89가지 결제수단을 제공할 수 있어요.</h6>
  </section>

  <section>
    <button>가맹점</button>
    <h4>결제 중 이탈을 잡는 최적의 결제 경험으로 매출 상승</h4>
    <h6>좋은 결제 경험은 고객의 결제중 이탈을 줄일 수 있어요.</h6>
  </section>

  <section>
    <button>개발자</button>
    <h4>개발자의 시간을 아끼는 쉽고 빠른 연동</h4>
    <h6>문서만 비교해 봐도 느껴지는 차이! 쉬운 연동을 경험해보세요.</h6>
  </section>`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    this.render()
  }
}

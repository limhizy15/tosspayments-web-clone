import { Component, ComponentProp } from '../../core/component'

export class SectionEasySync extends Component {
  template: string = /*html*/ `
  <h1>개발자의 시간을 아껴드려요</h1>

  <img src='' />
  <span>1. SDK로 연동 준비</span>
  <span>2. 결제창 호출</span>
  <span>3. 결제승인 요청</span>

  <section>
    <h3>코드 몇 줄만 넣으면 쉽게 연동할 수 있어요</h3>

    <ul>
        <li>쉽고 직관적인 API/SDK 제공</li>
        <li>문서만 봐도 알 수 있는 쉬운 연동경험</li>
        <li>개발 연동 만족도 업계 최고수준</li>
    </ul>

    <button>개발자센터</button>

    <h1>기술 문제는 전문가에게, 1:1 기술지원 서비스</h1>
    <span>전문 매니저가 실시간으로 소통하며 비즈니스 상황에 맞는 맞춤 지원을 해드려요.</span>

    <button>디스코드 채팅 문의</button>
  </section>
  `

  constructor({ $parent }: ComponentProp) {
    super({ $parent })
    this.$parent = $parent

    this.render()
  }
}

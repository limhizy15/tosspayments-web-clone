import { Component, ComponentProp } from '../../core/component'

export class SectionMain extends Component {
  template: string = /*html*/ `
    <h1>결제의 새로운 기준,토스페이먼츠</h1>
    <span>고객이 원했던 온라인 결제의 모든 것. 연동부터 운영까지 고민 끝!</span>

    <button>이용 신청하기</button>
    <button>도입 문의</button>

    <video width="250">
      <source src='https://static.tosspayments.com/public/permanent/service/homepage-tosspayments-com/video/tosspayments-chrome.webm' />
      Download the <a href='https://static.tosspayments.com/public/permanent/service/homepage-tosspayments-com/video/tosspayments-chrome.webm'>WEBM</a>
    </video>`

  constructor({ $parent }: ComponentProp) {
    super({ $parent })

    this.$parent = $parent

    this.render()
  }
}

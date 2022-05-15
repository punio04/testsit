export const dataApps = [
  {
    label: "PCMAX",
    name: "PCMAX",
    url: "https://pcmax.jp/lp/?ad_id=rm322990",
    imgPath: "img/app-icon1.png",
    trSource: "<td><a href='https://pcmax.jp/lp/?ad_id=rm322990'><img src=img/app-icon1.png><span class=app>PCMAX</span></a><td><span class=number>1600万人</span><td><span class='tag bg3'>恋活</span><span class='tag bg4'>出会い</span><td><span class=age>20代</span><span class=age>30代</span<span class=age>40代</span><td><a>出会い系</a></td>"
  },
  {
    label: "HAPPY_MAIL",
    name: "ハッピーメール",
    url: "https://happymail.co.jp/?Log=pres002&prid=d4Up7zuZu2602650&presco_sid=4233.200.60.d4Up7zuZu2602650",
    imgPath: "img/app-icon2.png",
    trSource: "<td><a href='https://happymail.co.jp/?Log=pres002&prid=d4Up7zuZu2602650&presco_sid=4233.200.60.d4Up7zuZu2602650'><img src=img/app-icon2.png><span class=app>ハッピーメール</span></a><td><span class=number>2700万人</span><td><span class='tag bg3'>恋活</span><span class='tag bg4'>出会い</span><td><span class=age>10代</span><span class=age>20代</span><span class=age>30代</span><td><a>出会い系</a></td>"
  },
  {
    label: "WAKUWAKU_MAIL",
    name: "ワクワクメール",
    url: "https://550909.com/pre02?",
    imgPath: "img/app-icon3.png",
    trSource: "<td><a href='https://550909.com/pre02?'><img src=img/app-icon3.png><span class=app>ワクワクメール</span></a><td><span class=number>900万人</span><td><span class='tag bg3'>恋活</span><span class='tag bg4'>出会い</span><td><span class=age>10代</span><span class=age>20代</span><td><a>出会い系</a></td>"
  }
]

export const dataQuestions = [
  {
    no: 1,
    question: "あなたの性別は？",
    answers: [
      {
        answer: "男性",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "女性",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  },
  {
    no: 2,
    question: "あなたの年齢層は？",
    answers: [
      {
        answer: "24歳以下",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "20代後半",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "30代前半",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "30代後半",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "40代以上",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  },
  {
    no: 3,
    question: "マッチングアプリを使う目的は？",
    answers: [
      {
        answer: "恋活",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "婚活",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "デート",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  },
  {
    no: 4,
    question: "いつまでに会いたい？",
    answers: [
      {
        answer: "今すぐ",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "~3ヶ月以内",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "~半年以内",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        answer: "特にない",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  }
]


export const dataSearch = [
  {
    no: 1,
    label: "purpose",
    select: [
      {
        value: "利用目的",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "恋活",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "婚活",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "出会い",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "友達作り",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  },
  {
    no: 2,
    label: "age",
    select: [
      {
        value: "年齢層",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "10代",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "20代",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "30代",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "40代",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  },
  {
    no: 3,
    label: "membership",
    select: [
      {
        value: "会員数",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "100万人以上",
        results: ["PCMAXL", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "300万人以上",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "500万人以上",
        results: ["WPCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      },
      {
        value: "1000万人以上",
        results: ["PCMAX", "HAPPY_MAIL", "WAKUWAKU_MAIL"]
      }
    ]
  }
]
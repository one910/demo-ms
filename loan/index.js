var Seneca = require('seneca');

require('./common/configs')

const bankCard = require('./services/bankCard')
const repaymentInfo = require('./services/repaymentInfo')

let rule = { role: 'USER', ms: 'LOAN', url: '*'};

//处理匹配
let MS_LOAN = function handle(options) {
  this.add(bankCard.rule, handleReqBankCard);

  this.add(repaymentInfo.rule, handleRepaymentInfo);
}

//处理微消息
function handleReqBankCard(msg, done) {
  bankCard.action(msg, function (ret) {
    return done(null, {
      rsp: ret
    })
  })
}

function handleRepaymentInfo(msg, done) {
  repaymentInfo.action(msg, function (ret) {
    return done(null, {
      rsp: ret
    })
  })
}

Seneca({ tag: 'LOAN' })
  .use('mesh', {
    auto: true,
    bases: CONFIG_SM,
    listen: [
      { pin: rule }
    ]
  })
  .use(MS_LOAN)
  .ready(() => {
    console.log('==========LOAN success');
  })


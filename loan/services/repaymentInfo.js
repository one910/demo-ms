// 还款信息
const service = {}

service.rule = { role: 'USER', ms: 'LOAN', url: 'repaymentInfo' };

service.action = (req, next) => {
  console.log('==============================repaymentInfo')
  let list = {
    allRepayAmount: '1000.00',
    currentDueDate: '2019-12-16',
    currentRepayAmount: '1999.01',
    advanceCount: '2',
    overdueRepayAmount: '123.12',
    loans: [
      {
        repayStatus: '0',
        currentPrincipal: '111',
        currentInterest: '222',
        loanAmount: '333',
        applicationDate: '2019-12-17',
        overduePrincipal: '1000',
        overdueInterest: '20',
        productName: 'e贷',
        amount: '1000.00',
        repayAmt: '',
        currentInstalment: '1',
        instalmentQty: '6',
        overdueDays: '11',
        trialInterest: '15',
        overduePenalty: '1.5'
      },
      {
        repayStatus: '0',
        currentPrincipal: '111',
        currentInterest: '222',
        loanAmount: '333',
        applicationDate: '2019-12-17',
        overduePrincipal: '1000',
        overdueInterest: '20',
        productName: 'e贷',
        amount: '1000.00',
        repayAmt: '',
        currentInstalment: '1',
        instalmentQty: '6',
        overdueDays: '11',
        trialInterest: '15',
        overduePenalty: '1.5'
      }
    ]
  }
  next(list)
}

module.exports = service
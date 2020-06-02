// 银行卡
const seneca = require("seneca")();
const entities = require('seneca-entity');
require('../common/configs')

const service = {}

service.rule = { role: 'USER', ms: 'LOAN', url: 'bankCard' };

service.action = (req, next) => {
  console.log('==============================bankCard')

  let query = {
    card_res_type: '1'
  }

  var entity = seneca.make$('bank_card');
  entity.list$(query, function (err, entity) {
    if (err) {
      let ret = { success: false, error: 'error', data: [] };
      next(ret);
    }
    if (entity == null) {
      let ret = { success: false, error: 'error', data: [] };
      next(ret);
    } else {
      console.log(entity)
      next(entity);
    }
  });

  // let list = {
  //   cards: [
  //     {
  //       bankName: '工商银行',
  //       iconImg: '',
  //       account: '8888 8888 8888 8888',
  //       waterMark: '',
  //       cardResType: '2'
  //     },
  //     {
  //       bankName: '建设银行',
  //       iconImg: '',
  //       account: '6666 6666 6666 6666',
  //       waterMark: '',
  //       cardResType: '1'
  //     }
  //   ]
  // }
  // next(list)
}

seneca.use(entities);
seneca.use(CONFIG_SQL.MYSQL.SQL_STORE, CONFIG_SQL.MYSQL.SQL_SERVER);

module.exports = service

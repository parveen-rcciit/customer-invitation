const customer = require('./customerInvitationList')
const allCustomerList = require('./allCustomerList')

module.exports = {
  getCustomers: allCustomerList.getCustomers,
  getCustomersForInvitation: customer.getCustomersForInvitation
}

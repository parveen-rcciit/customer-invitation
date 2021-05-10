const customer = require('./customer')

const args = require('minimist')(process.argv.slice(2));
const filePath = args.filePath || 'src/test/data/customers.json'
const distance = args.distance || 100
const latitude = args.latitude || 53.339428
const longitude = args.longitude || -6.257664

const printInvitedCustomers = async () => {
    try {
        let invitationList = await customer.getCustomersForInvitation(filePath, distance, latitude, longitude) || []
        if (invitationList.length) {
            invitationList.forEach(cust => console.log(cust.user_id, cust.name))
        } else {
            console.log('No customers found for invitation')
        }
    } catch (error) {
        console.error(`Inside printInvitedCustomers - ${error.message}`)
    }
}

printInvitedCustomers()
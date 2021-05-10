const allCustomerList = require('./allCustomerList')
const distanceCalculator = require('../util/distanceCalculator')
const inputValidator = require('../util/validator/inputValidator')

const getCustomersWithinDistance = (customers, distance, latitude, longitude) => {
    let filteredCustomers = customers.filter(customer => {
        let customerDistance = distanceCalculator.calculateDistance(customer.latitude, customer.longitude, latitude, longitude)
        return customerDistance <= distance
    })
    filteredCustomers.sort((x, y) => {
        return x.user_id - y.user_id
    })
    return filteredCustomers
}

exports.getCustomersForInvitation = async (filePath, distance, latitude, longitude) => {
    try {
        let invitationList = []
        if (inputValidator.validateInput(filePath, distance, latitude, longitude)) {
            let customers = await allCustomerList.getCustomers(filePath) || []
            invitationList = getCustomersWithinDistance(customers, distance, latitude, longitude)
        }
        return invitationList
    } catch (error) {
        console.error(`Inside getCustomersForInvitation - ${error.message}`)
    }
}
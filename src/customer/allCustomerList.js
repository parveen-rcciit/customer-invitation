const fileReader = require('../util/fileReader')
const customerValidator = require('../util/validator/customerValidator')

exports.getCustomers = async (filePath) => {
    try {
        let customers = []
        let fileLines = await fileReader.readFile(filePath) || []
        fileLines.forEach((line, index) => {
            let customer = JSON.parse(line)
            if (customerValidator.validCustomer(customer, index)) {
                customers.push(customer)
            }
        })
        return customers
    } catch (error) {
        console.error(`Inside getCustomers - ${error.message}`)
    }
}
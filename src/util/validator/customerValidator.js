module.exports.validCustomer = (customer, index) => {
    const {
        name,
        user_id,
        latitude,
        longitude
    } = customer

    let errVal = ''

    if (name === null || name === '' || name === undefined || !isNaN(name)) {
        errVal = 'Name'
    }
    if (isNaN(user_id)) {
        errVal = 'User ID'
    }
    if (isNaN(latitude)) {
        errVal = 'Latitude'
    }
    if (isNaN(longitude)) {
        errVal = 'Longitude'
    }
    if (errVal !== '') {
        throw new Error(`Invalid Customer ${errVal} at line number ${index+1}`)
    }
    return true
}
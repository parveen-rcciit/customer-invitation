module.exports.validateInput = (path, distance, latitude, longitude) => {
    let errMsg = ''
    if (path === null || path === undefined || path === '' || !isNaN(path)) {
        errMsg = 'Empty file path'
    }
    if (distance <= 0 || isNaN(distance)) {
        errMsg = 'Distance must be an integer and greater than 0'
    }
    if (latitude < -90 || latitude > 90 || isNaN(latitude)) {
        errMsg = 'Latitude must be within -90 and 90 degrees'
    }
    if (longitude < -180 || longitude > 180 || isNaN(longitude)) {
        errMsg = 'Longitude must be within -180 and 180 degrees'
    }
    if(errMsg !== ''){
        throw new Error(`Invalid Input: ${errMsg}`)
    }
    return true
    
}
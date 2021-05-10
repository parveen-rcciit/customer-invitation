const earthRadius = 6371

const degreeToRadius = (degree) => degree * Math.PI / 180

module.exports.calculateDistance = (latitudeX, longitudeX, latitudeY, longitudeY) => {
    latitudeX = degreeToRadius(latitudeX)
    longitudeX = degreeToRadius(longitudeX)
    latitudeY = degreeToRadius(latitudeY)
    longitudeY = degreeToRadius(longitudeY)

    const distance = Math.acos(Math.sin(latitudeX) * Math.sin(latitudeY) +
        Math.cos(latitudeX) * Math.cos(latitudeY) * Math.cos(Math.abs(longitudeX - longitudeY)))

    return Math.floor(earthRadius * distance)
}
const fs = require('fs')
const readline = require('readline')

const createReadStreamSafe = (path) => {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(path);
        fileStream
            .on('open', () => {
                resolve(fileStream);
            })
            .on('error', reject)
    });
}

module.exports.readFile = async (filePath) => {
    try {
        const fileStream = await createReadStreamSafe(filePath);
        return new Promise((resolve, reject) => {
            let lines = []
            readline.createInterface({
                    input: fileStream
                })
                .on('line', line => {
                    if (line.trim().length) {
                        lines.push(line)
                    }
                })
                .on('close', () => {
                    lines.length ? resolve(lines) : reject(new Error('No customer data found in file'))
                })
        })
    } catch (error) {
        console.error(`Inside readFile - ${error.message}`)
    }
}
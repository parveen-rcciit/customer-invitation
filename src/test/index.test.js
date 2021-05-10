const customer = require('../customer/index')

const latitude = 53.339428
const longitude = -6.257664
const distance = 100
const filePath = 'src/test/data/customers.json'

describe('Customer Invitation', () => {

    const originalError = console.error

    beforeEach(() => {
        console.error = jest.fn()
    });
    afterAll(() => {
        console.error = originalError
    });

    it('Should expect getCustomersForInvitation to be defined', async () => {
        expect(customer.getCustomersForInvitation).toBeDefined()
    })

    it('Should return 16 customers for invitation', async () => {
        const invitationList = await customer.getCustomersForInvitation(filePath, distance, latitude, longitude)
        expect(invitationList.length).toBe(16)
    })

    it('Should return 8 customers for invitation when distance is 50km', async () => {
        const invitationList = await customer.getCustomersForInvitation(filePath, 50, latitude, longitude)
        expect(invitationList.length).toBe(8)
    })

    it('Should return 0 customers for invitation when no customers are within distance', async () => {
        let noInviteFilePath = 'src/test/data/customers-no-invite-list.json'
        const invitationList = await customer.getCustomersForInvitation(noInviteFilePath, distance, latitude, longitude)
        expect(invitationList.length).toBe(0)
    })

    it('Should return 0 customers for empty file', async () => {
        let path = 'src/test/data/empty-customers.json'
        const invitationList = await customer.getCustomersForInvitation(path, distance, latitude, longitude)
        expect(invitationList.length).toBe(0)
        const errMsg = 'Inside getCustomers - No customer data found in file'
        expect(console.error).toHaveBeenCalledWith(errMsg)
    })

    describe('Log Error for Invalid Inputs', () => {

        it('Should log error for Incorrect File Path', async () => {
            await customer.getCustomersForInvitation('xyz.json', distance, latitude, longitude)
            const errMsg = 'Inside readFile - ENOENT: no such file or directory, open \'xyz.json\''
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log error for Empty File Path', async () => {
            await customer.getCustomersForInvitation('', distance, latitude, longitude)
            const errMsg = 'Inside getCustomersForInvitation - Invalid Input: Empty file path'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log error for Invalid Distance', async () => {
            await customer.getCustomersForInvitation(filePath, '-100', latitude, longitude)
            const errMsg = 'Inside getCustomersForInvitation - Invalid Input: Distance must be an integer and greater than 0'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log error for Invalid Latitude', async () => {
            await customer.getCustomersForInvitation('', distance, '100', longitude)
            const errMsg = 'Inside getCustomersForInvitation - Invalid Input: Latitude must be within -90 and 90 degrees'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log error for Invalid Longitude', async () => {
            await customer.getCustomersForInvitation(filePath, '-100', latitude, '-190')
            const errMsg = 'Inside getCustomersForInvitation - Invalid Input: Longitude must be within -180 and 180 degrees'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })
    })

    describe('Log Error for Invalid Customer Data in file', () => {

        it('Should log Invalid Latitude error for Customer at Line number 2', async () => {
            const path = 'src/test/data/customers-invalid-latitude.json'
            await customer.getCustomersForInvitation(path, distance, latitude, longitude)
            const errMsg = 'Inside getCustomers - Invalid Customer Latitude at line number 2'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log Invalid Longitude error for Customer at Line number 3', async () => {
            const path = 'src/test/data/customers-invalid-longitude.json'
            await customer.getCustomersForInvitation(path, distance, latitude, longitude)
            const errMsg = 'Inside getCustomers - Invalid Customer Longitude at line number 3'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log Invalid Name error for Customer at Line number 2', async () => {
            const path = 'src/test/data/customers-invalid-name.json'
            await customer.getCustomersForInvitation(path, distance, latitude, longitude)
            const errMsg = 'Inside getCustomers - Invalid Customer Name at line number 2'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })

        it('Should log Invalid User ID error for Customer at Line number 1', async () => {
            const path = 'src/test/data/customers-invalid-userid.json'
            await customer.getCustomersForInvitation(path, distance, latitude, longitude)
            const errMsg = 'Inside getCustomers - Invalid Customer User ID at line number 1'
            expect(console.error).toHaveBeenCalledWith(errMsg)
        })
    })
})
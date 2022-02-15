class StringEncryption {
    encrypt(value) {
        return Buffer.from(value).toString('hex');
    }

    decrypt(value) {
        return Buffer.from(value, 'hex').toString('ascii');
    }
}

export default new StringEncryption();
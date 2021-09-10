const { ethers } = require('ethers')
const { mudverseABI } = require('./abi')

const MUDVERSE_ADDRESS = "0x0c07150e08e5deCfDE148E7dA5A667043F579AFC"

class Mudverse {
    constructor(rpcProvider) {
        const jsonRpc = new ethers.providers.JsonRpcProvider(rpcProvider)
        const mudverse = new ethers.Contract(MUDVERSE_ADDRESS, mudverseABI, jsonRpc)

        this.mudverse = mudverse;
    }

    async getPlayer(tokenId) {
        if (tokenId < 1 || tokenId > 8000) return {}

        const name = await this.getName(tokenId)
        const traits = await this.traitsOf(tokenId)
        const properties = traits.map(x => {
            let obj = {}
            obj[x['trait_type']] = x['value']
            return obj
        })

        return [{ Name: name }].concat(properties)
    }

    async getCHA(tokenId) {
        return await this.mudverse.getCHA(tokenId)
    }

    async getCON(tokenId) {
        return await this.mudverse.getCON(tokenId)
    }

    async getDEX(tokenId) {
        return this.mudverse.getDEX(tokenId)
    }

    async getGender(tokenId) {
        return await this.mudverse.getGender(tokenId)
    }

    async getINT(tokenId) {
        return await this.mudverse.getINT(tokenId)
    }

    async getName(tokenId) {
        return await this.mudverse.getName(tokenId)
    }

    async getRace(tokenId) {
        return await this.mudverse.getRace(tokenId)
    }

    async getSTR(tokenId) {
        return await this.mudverse.getSTR(tokenId)
    }

    async getWIS(tokenId) {
        return await this.mudverse.getWIS(tokenId)
    }

    async tokenURI(tokenId) {
        return await this.mudverse.tokenURI(tokenId)
    }

    async traitsOf(tokenId) {
        const traits = await this.mudverse.traitsOf(tokenId)
        return JSON.parse(traits)
    }

    async totalSupply() {
        const total = await this.mudverse.totalSupply()
        return total.toNumber();
    }

    async balanceOf(owner) {
        const balance = await this.mudverse.balanceOf(owner)
        return balance.toNumber();
    }

    async getApproved(tokenId) {
        return await this.mudverse.getApproved(tokenId)
    }
}

module.exports = Mudverse
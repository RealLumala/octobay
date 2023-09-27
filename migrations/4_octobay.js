require("dotenv").config({ path: './../.env.deploy' })
const OctoBay = artifacts.require("OctoBay")
const LinkToken = artifacts.require("link-token/LinkToken")
const zeroAddress = "0x0000000000000000000000000000000000000000"

module.exports = function (deployer) {
  if (process.env.LOCAL == 'true') {
    deployer.deploy(OctoBay, LinkToken.address, zeroAddress, zeroAddress, process.env.GSN_FORWARDER_ADDRESS)
  } else {
    deployer.deploy(OctoBay, zeroAddress, zeroAddress, zeroAddress, process.env.GSN_FORWARDER_ADDRESS)
  }
}

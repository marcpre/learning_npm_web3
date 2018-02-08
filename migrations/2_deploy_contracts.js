var Friend = artifacts.require("./Friend");
var SimpleWallet = artifacts.require("./SimpleWallet.sol");
module.exports = function(deployer) {
  deployer.deploy(Friend);
  deployer.deploy(SimpleWallet);
};

var frensToken = artifacts.require("./FRENS.sol");

module.exports = function(deployer) {
  deployer.deploy(frensToken);
};

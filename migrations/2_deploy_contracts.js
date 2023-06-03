var ConvertLib = artifacts.require("./ConvertLib.sol");
var ERC1155Basic = artifacts.require("./ERC1155Basic.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, ERC1155Basic);
  deployer.deploy(ERC1155Basic);
};

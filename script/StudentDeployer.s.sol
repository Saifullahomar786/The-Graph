// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "../lib/forge-std/src/Script.sol";
import {StudentInfo} from "../src/Student.sol";
contract StudentDeployer is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        StudentInfo studentDeployer = new StudentInfo();
        console.log(
            "Student deployed at:",
            address(studentDeployer)
        );
        vm.stopBroadcast();
    }
}

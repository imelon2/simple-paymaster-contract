// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import {VerifyingPaymaster} from "@account-abstraction/contracts/samples/VerifyingPaymaster.sol";
import {IEntryPoint} from "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

contract SimplePaymaster is VerifyingPaymaster {
    constructor(IEntryPoint _entryPoint, address _verifyingSigner) VerifyingPaymaster(_entryPoint,_verifyingSigner) {
        _transferOwnership(_verifyingSigner);
    }
}
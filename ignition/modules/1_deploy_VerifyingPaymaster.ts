import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const deployVerifyingPaymaster = buildModule("mSimplePaymaster", (m) => {
  const _entryPoint = m.getParameter("_entryPoint", "0x0000000071727De22E5E9d8BAf0edAc6f37da032");
  const _verifyingSigner = m.getParameter("_verifyingSigner", m.getAccount(0));

  const SimplePaymaster = m.contract("SimplePaymaster", [_entryPoint, _verifyingSigner]);

  return { SimplePaymaster };
});

export default deployVerifyingPaymaster

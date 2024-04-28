import { LocalAddress } from "./local-address";
import { PermanentAddress } from "./permanent-address";

export class CustomerAddress {
    customerAddressId:number;
	permanentAddress:PermanentAddress;
	localAddress:LocalAddress;
}

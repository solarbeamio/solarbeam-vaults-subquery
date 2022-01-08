import {Action} from "../types";
import {MoonbeamEvent} from '@subql/contract-processors/dist/moonbeam';
import {BigNumber} from "ethers";

// Setup types from ABI
type DepositEventArgs = [string, BigNumber, BigNumber] & { user: string; pid: BigNumber; amount: BigNumber; };
type WithdrawEventArgs = [string, BigNumber, BigNumber] & { user: string; pid: BigNumber; amount: BigNumber; };

async function saveAction(event, type){
    let action = new Action(event.transactionHash)
    action.pid = event.args.pid.toNumber();
    action.type = type
    action.user = event.args.user;
    action.amount = event.args.amount.toBigInt();
    action.blockNumber = event.blockNumber
    action.time = event.blockTimestamp
    logger.info(action)
    await action.save();
}

export async function handleDepositEvent(event: MoonbeamEvent<DepositEventArgs>): Promise<void> {
    await saveAction(event, 'deposit')
}

export async function handleWithdrawEvent(event: MoonbeamEvent<WithdrawEventArgs>): Promise<void> {
    await saveAction(event, 'withdraw')
}

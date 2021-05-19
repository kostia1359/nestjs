import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import fs from 'fs';
import { IDictionary } from 'types/IDictionary';
import { API } from 'src/config';

const CONTRACT = '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';
const ARTIFACT_PATH = __dirname + '/../../resources/Contract.abi';

const getContract = () => {
  const web3 = new Web3(API);

  const abi = fs.readFileSync(ARTIFACT_PATH, {
    encoding: 'utf8',
  });
  return new web3.eth.Contract(JSON.parse(abi), CONTRACT);
};

@Injectable()
export class ContractService {
  private readonly contract = getContract();

  getIds(): Promise<any[]> {
    return this.contract.methods.getGroupIds().call();
  }

  getGroup(id): Promise<IDictionary> {
    return this.contract.methods.getGroup(id).call();
  }

  getIndex(id): Promise<IDictionary> {
    return this.contract.methods.getIndex(id).call();
  }
}

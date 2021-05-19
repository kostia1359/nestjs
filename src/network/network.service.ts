import { Injectable } from '@nestjs/common';
import { API } from 'src/config';
import Web3 from 'web3';

@Injectable()
export class NetworkService {
  async getLatestBlock() {
    const web3 = new Web3(API);

    const latestBlockNumber = await web3.eth.getBlockNumber();
    return web3.eth.getBlock(latestBlockNumber);
  }
}

import { Controller, Get } from '@nestjs/common';
import { IDictionary } from 'types/IDictionary';
import { NetworkService } from './network.service';

@Controller('last-block')
export class NetworkController {
  constructor(private networkService: NetworkService) {}

  @Get('')
  async getLatestBlock(): Promise<IDictionary> {
    return this.networkService.getLatestBlock();
  }
}

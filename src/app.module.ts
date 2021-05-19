import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupController } from './group/group.controller';
import { ContractService } from './contract/contract.service';
import { IndexController } from './index/index.controller';
import { NetworkService } from './network/network.service';
import { NetworkController } from './network/network.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    GroupController,
    IndexController,
    NetworkController,
  ],
  providers: [AppService, ContractService, NetworkService],
})
export class AppModule {}

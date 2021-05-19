import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ContractService } from 'src/contract/contract.service';
import { IDictionary } from 'types/IDictionary';

@Controller()
export class GroupController {
  constructor(private contractService: ContractService) {}

  @Get('group-ids')
  async getGroupIds(): Promise<any[]> {
    return this.contractService.getIds();
  }

  @Get('group/:id')
  async getGroup(@Param('id') id: string): Promise<IDictionary> {
    return this.contractService.getGroup(id).catch(() => {
      throw new NotFoundException();
    });
  }
}

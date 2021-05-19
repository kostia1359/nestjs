import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ContractService } from 'src/contract/contract.service';
import { IDictionary } from 'types/IDictionary';

@Controller('index')
export class IndexController {
  constructor(private contractService: ContractService) {}

  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<IDictionary> {
    return this.contractService.getIndex(id).catch(() => {
      throw new NotFoundException();
    });
  }
}

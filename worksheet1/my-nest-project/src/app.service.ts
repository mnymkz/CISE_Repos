import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'She\'s got the whole wide world in her juicy fruit \n He\'s got the whole wide world in his pants \n He wrapped the whole wide world in a wedding band, and put the whole wide world in her hands...np,  ';
  }
}

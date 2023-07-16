import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';

@Controller()
export class AppController {
  constructor(
    @Inject('MQTT SERVICE') private client:ClientProxy,
    private readonly appService: AppService) {}

  @Get('Message')
  getmessages(){
    return this.client.send('message_channel','Hi,This is Ambrisha.');
  }

  @Get('Info')
  getinfo(){
    return this.client.send('info_que','This is running in Mosquitto service');
  }
}

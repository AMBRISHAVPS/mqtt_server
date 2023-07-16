import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('mqtt')
export class MqttController {

@MessagePattern('message_channel')
    getMessage(@Payload()item){
        return `Client Message:${item}`;
    }

@MessagePattern('info_que')
   getinfo(@Payload()data){
    return `${data}`;
   }

}

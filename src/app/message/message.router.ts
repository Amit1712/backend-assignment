import { Body, Controller, Get, Post, Query, Route, Tags } from 'tsoa';
import { getAllMessages, createMessage, getMessageById } from './message.service'


@Tags('Messages')
@Route('/api/messages')
export class MessagesController extends Controller {

  @Get('/')
  public async getAllMessages() {
    return getAllMessages()
  }

  @Post('/')
  public async createMessage(@Body() body: { content: string, division: any }) {
    return createMessage({ content: body.content, division: body.division });
  }

  @Get('/{id}')
  public async getMessageById(@Query('id') id: number) {
    return getMessageById({ id: Number(id) });
  }

}

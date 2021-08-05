import { Body, Controller, Get, Post, Query, Route, Tags } from 'tsoa';
import { getAllDispatches, createDispatch, getDispatchById } from './dispatch.service'

@Tags('Dispatches')
@Route('/api/dispatches')
export class DispatchesController extends Controller {

  @Get('/')
  public async getAllDispatches() {
    return getAllDispatches()
  }

  @Post('/')
  public async createDispatch(@Body() body: { message: number, agent: number }) {
    return createDispatch({ message: body.message, agent: body.agent });
  }

  @Get('/{id}')
  public async getDispatchById(@Query('id') id: number) {
    return getDispatchById({ id: Number(id) });
  }
}

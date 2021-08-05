import { Body, Controller, Get, Post, Query, Route, Tags } from 'tsoa';
import { getAllAgents, createAgent, getAgentById } from './agent.service';


@Tags('Agents')
@Route('/api/agents')
export class AgentsController extends Controller {

  @Get('/')
  public async getAllAgents() {
    return getAllAgents()
  }

  @Post('/')
  public async createAgent(@Body() body: { division: any }) {
    return createAgent({ division: body.division });
  }

  @Get('/{id}')
  public async getAgentById(@Query('id') id: number) {
    return getAgentById({ id: Number(id) });
  }

}

import { Controller, Get, Post, Query, Route, Tags } from 'tsoa';
import { getAllDivisions, createDivision, getDivisionById } from './division.service';

@Tags('Divisions')
@Route('/api/divisions')
export class DivisionsController extends Controller {

  @Get('/')
  public async getAllDivisions() {
    return getAllDivisions()
  }

  @Post('/')
  public async createDivision() {
    return createDivision();
  }

  @Get('/{id}')
  public async getDivisionById(@Query('id') id: number) {
    return getDivisionById({ id: Number(id) });
  }

}

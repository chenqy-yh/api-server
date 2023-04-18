import { Controller, Get, Param, Query } from '@nestjs/common'
import { categoryList } from 'src/model/CategoryModel'
import { disciplineList } from 'src/model/DisciplineModel'
import { tagList } from 'src/model/tags'
import { TagService } from 'src/service/tags.service'


@Controller('/discipline')
export class DisciplineController {

  constructor(private readonly tagService:TagService ){}


  // HTTP GET method to retrieve a list of available disciplines.
  @Get('/')
  /**
   * Retrieves a list of available disciplines.
   *
   * @returns {ResponseBody<Discipline[]>} - The response body containing a code, message, status, and data field.
   */
  getDisciplineList(): ResponseBody<Discipline[]> {
    return {
      code: 200,
      message: 'get data success',
      status: 'success',
      data: disciplineList,
    }
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common'
import { tagList } from 'src/model/tags'
import { TagService } from 'src/service/tags.service'

@Controller('/tags')
export class TagsController {
  constructor(private readonly tagService: TagService) {}

  // HTTP GET method to retrieve a list of available tags.
  @Get('/')
  /**
   * Retrieves a list of available tags.
   *
   * @returns {ResponseBody<Tag[]>} - The response body containing a code, message, status, and data field.
   */
  getTagsList(): ResponseBody<Tag[]> {
    return {
      code: 200,
      message: 'get data success',
      status: 'success',
      data: tagList,
    }
  }

  @Get('/:tagNmae')
  getDisciplineByTagname(
    @Param('tagName') tagName:string,
    @Query() query:any,
  ):ResponseBody<Discipline[]>{
    return {
        code:200,
        message:  'get data success',
        status: 'success',
        data:[],
    }
  }


}

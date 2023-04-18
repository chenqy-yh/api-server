import { Controller, Get, Param, Query } from '@nestjs/common'
import { categoryList } from 'src/model/CategoryModel'
import { disciplineList } from 'src/model/DisciplineModel'


@Controller('/category')
export class CategoryController {

  // HTTP GET method to retrieve a list of available categories.
  @Get('/')
  /**
   * Retrieves a list of available categories.
   *
   * @returns {ResponseBody<CategoryMate[]>} - The response body containing a code, message, status, and data field.
   */
  getCategoryList(): ResponseBody<Tag[]> {
    return {
      code: 200,
      message: 'get data success',
      status: 'success',
      data: categoryList,
    }
  }




  // HTTP GET method to retrieve a list of disciplines matching the given category name.
  @Get('/:categoryName')
  /**
   * Retrieves a list of disciplines matching the given category name.
   *
   * @param {string} categoryName - The name of the category to search for.
   * @param {any} query - Optional query parameters.
   * @returns {ResponseBody<Discipline[]>} - The response body containing a code, message, status, and data field.
   */
  getDisciplineByCategoryName(
    @Param('categoryName') categoryName: string,
    @Query() query: any,
  ): ResponseBody<Discipline[]> {
    return {
      code: 200,
      message: 'get data success',
      status: 'success',
      data: disciplineList.filter((discipline) => {
        return discipline.belongCategory.toLowerCase() == categoryName.toLowerCase()
      }),
    }
  }
}

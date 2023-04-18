import { Injectable } from '@nestjs/common';
import { disciplineList } from 'src/model/DisciplineModel'; 


@Injectable()
export class TagService {
  getDisciplineByTag(tagId:string): Discipline[] {
    return  disciplineList.filter(it=>{
        return it.tags.includes(tagId)
    })
  }
}

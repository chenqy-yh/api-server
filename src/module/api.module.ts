import { Module } from "@nestjs/common";
import { CategoryController } from "src/controllers/category.controller";
import { DisciplineController } from "src/controllers/discipline.controller";
import { TagsController } from "src/controllers/tags.controller";
import { TagService } from "src/service/tags.service";

@Module({
    imports:[],
    controllers:[CategoryController,DisciplineController,TagsController],
    providers:[TagService]
})
export class ApiModule{}
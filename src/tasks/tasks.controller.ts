import { Controller, Get, Post, Body, Param, Delete, Put, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks, TasksStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskStatusValidaionPipe } from './pipes/task-status-validator.pipe';
// decorator /tasks
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get()
    getTask(@Query(ValidationPipe) filterDTO: GetTaskFilterDTO): Tasks[] {
       console.log(Object.keys(filterDTO).length );
       if (Object.keys(filterDTO).length > 0) {
           return this.tasksService.getListTaskWithFilter(filterDTO)
       }else{
           return this.tasksService.getAllTask()
       }
    }

    @Post() 
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Tasks {
        // console.log(createTaskDto);
        
        return this.tasksService.createTask(createTaskDto)
        // console.log("title", title);   
        // console.log("description", description);   
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string): Tasks{
        // console.log(this.tasksService.getTaskById(id));
        return this.tasksService.getTaskById(id)
    }
    @Delete('/delete/:id')
    deleteTaskById(@Param('id') id: string): Tasks[]{
        return this.tasksService.deleteTaskById(id)
    }
    @Patch("/update/:id")
    //TaskStatusValidaionPipe là cái hàm trả về value custome
    updateStatusOfTaskById(@Param('id') id: string, @Body('status', TaskStatusValidaionPipe) status: TasksStatus){
       console.log(id);
       console.log(status);
       return this.tasksService.updateStatusOfTask(id, status)
    }




  
}

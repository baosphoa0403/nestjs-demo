import { Injectable, NotFoundException } from '@nestjs/common';
import { Tasks, TasksStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
@Injectable()
export class TasksService {

    private tasks: Tasks[] = [];

    getAllTask(): Tasks[] {
        return this.tasks;
    }

    getListTaskWithFilter(filterDTO: GetTaskFilterDTO): Tasks[]{
      const {status, search} = filterDTO;
      let task = this.getAllTask();
      if (status) {
        task = this.tasks.filter(item => item.status === status)
      }
      if (search) {
        task = this.tasks.filter((item)=>{
             return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 
            //  user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
      }
      console.log(task);
      
      return task
    }
    createTask(createTaskDto: CreateTaskDto): Tasks {
       const {title, description} = createTaskDto
       const task: Tasks = {
         id: uuidv4(),
         title,
         description,
         status: TasksStatus.OPEN
       }
       this.tasks.push(task);
       return task;
    }
    getTaskById(id: string): Tasks{      
      // console.log("hihi", id);
      const found = this.tasks.find(item => item.id ===id)
      if (!found) {
        throw new NotFoundException(`this is ${id} not found `)
      }
      return found
    }
    deleteTaskById(id:string): Tasks[]{
      const index: any = this.tasks.findIndex(item => item.id === id);
      if (index === -1) {
        throw new NotFoundException(`this id ${id} not found`)
      }else{
        return this.tasks.splice(index,1)
      }
    }
    updateStatusOfTask(id: string, status: TasksStatus): Tasks{
      const index: any = this.tasks.findIndex(item => item.id === id);
      
      if (index === -1) {
        throw new NotFoundException(`this id ${id} not found`)
      }else{
        this.tasks[index].status = status
      }
      return this.tasks[index]
    }

}

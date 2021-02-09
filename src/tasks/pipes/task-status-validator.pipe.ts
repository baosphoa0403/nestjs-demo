import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TasksStatus } from "../task.model";

export  class TaskStatusValidaionPipe implements PipeTransform{
    readonly taskAllow = [
        TasksStatus.DONE,
        TasksStatus.IN_PROGRESS,
        TasksStatus.OPEN
    ]
    transform(value: any) {
        console.log("value", value);
        value = value.toUpperCase();
        console.log("value1", value);
        const isAllow = this.isStatusValid(value)
        if (!isAllow) {
            throw new BadRequestException(`${value} is not update for status`)
        }   
        return value;
    }
    private isStatusValid(status: any){
        const index = this.taskAllow.indexOf(status);
        return index !== -1
    }

}
import { TasksStatus } from "../task.model";
import { IsOptional, IsIn, IsEmpty } from "class-validator";

export class GetTaskFilterDTO{
    @IsOptional()
    @IsIn([TasksStatus.DONE, TasksStatus.IN_PROGRESS, TasksStatus.OPEN])
    status: TasksStatus;

    @IsOptional()
    @IsEmpty()
    search: string
}
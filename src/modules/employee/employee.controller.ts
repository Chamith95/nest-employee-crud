import { Body, Controller, Delete, Get, Param , Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '@prisma/client';
import { EmployeeDTO, UpdateEmployeeDTO } from './employee.model';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employee: EmployeeService) {}
  @Get()
  findAll(): Promise<Employee[]> {
    return this.employee.findAll();
  }

  @Get(':id')
  findUnique(@Param('id') id: string): Promise<Employee | null> {
    return this.employee.findById(+id);
  }

  @Post()
  create(@Body() employeeDTO: EmployeeDTO): Promise<Employee> {
    return this.employee.create(employeeDTO);
  }

  @Put(':id')
  update(  @Param('id') id: string,@Body() employeeDTO: UpdateEmployeeDTO): Promise<Employee> {
    return this.employee.update({id:+id,data:employeeDTO});
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Employee> {
    return this.employee.delete(+id);
  }
}
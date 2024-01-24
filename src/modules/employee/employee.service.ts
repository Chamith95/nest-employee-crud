import {
  Injectable,
  Scope,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Employee, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeDTO, UpdateEmployeeDTO } from './employee.model';



@Injectable({ scope: Scope.REQUEST })
export class EmployeeService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private prisma: PrismaService,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.prisma.employee.findMany();
  }

  async findById(id:number): Promise<Employee | null> {
    return await this.prisma.employee.findUnique({
      where:{
        id
      }
    });
  }

  async create(data: EmployeeDTO): Promise<Employee> {
    return this.prisma.employee.create({
      data: {
        ...data
      },
    });
  }

  async update(params: {
    id: number;
    data: UpdateEmployeeDTO;
  }): Promise<Employee> {
    const { id, data } = params;
    return this.prisma.employee.update({
      data: {
        ...data,
      },
      where:{
        id
      },
    });
  }

  async delete(id: number): Promise<Employee> {
    return this.prisma.employee.delete({
      where:{
        id
      }
    });
  }

}

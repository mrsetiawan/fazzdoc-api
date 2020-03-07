import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.interface';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly appDoctor: DoctorService) {}

  @Get('/list')
  getDoctor(): string {
    return this.appDoctor.getDoctor();
  }

}

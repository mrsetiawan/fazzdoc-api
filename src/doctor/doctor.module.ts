import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Module({
  providers: [DoctorService]
})
export class DoctorModule {}

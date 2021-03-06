import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//module hospital
import { HospitalController } from './hospital/hospital.controller';
import { HospitalModule } from './hospital/hospital.module';
import { HospitalService } from './hospital/hospital.service';
//module doctor
import { DoctorController } from './doctor/doctor.controller';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorService } from './doctor/doctor.service';
//module patient
import { PatientController } from './patient/patient.controller';
import { PatientService } from './patient/patient.service';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    HospitalModule, 
    DoctorModule, 
    PatientModule,
    // MongooseModule.forRoot('mongodb+srv://rahmat:QJAnikXBlNbCg2Wf@cluster0-fgqds.mongodb.net/fazzdoc?retryWrites=true&w=majority')
    
  ],
  controllers: [
    AppController, 
    HospitalController, 
    DoctorController, 
    PatientController
  ],
  providers: [
    AppService,
    HospitalService,
    DoctorService,
    PatientService
  ],
})

export class AppModule {}

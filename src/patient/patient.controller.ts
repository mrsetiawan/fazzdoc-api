import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PatientService } from './patient.service'

@Controller('patient')
export class PatientController {
  constructor(private readonly appPatient: PatientService) { }

  @Post('/entry')
  addPatient(
    @Body('nama_pasien') namaPasien: string,
    @Body('tlp') tlpPasien: string,
    @Body('alamat') alamatPasien: string
  ) {
    const generateId = this.appPatient.insertPatient(
      namaPasien,
      tlpPasien,
      alamatPasien
    );

    return { generateId }; 
  }

  @Get('/list')
  getPatient() {
    return {data: this.appPatient.getPatient()};
  }
}

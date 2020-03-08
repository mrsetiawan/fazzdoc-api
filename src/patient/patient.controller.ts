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

  @Get(':id')
  getHospitalById(@Param('id') id: string){
    return this.appPatient.getPatientById(id);
  }

  @Patch(':id')
  updatePatient(
    @Param('id') id: string,
    @Body('nama_pasien') namaPasien: string,
    @Body('tlp') tlpPasien: string,
    @Body('alamat') alamatPasien: string
  ){
    this.appPatient.updatePatient(id, namaPasien, tlpPasien, alamatPasien);
    return null;
  }

  @Delete(':id')
  removePatient(@Param('id') id: string){
    this.appPatient.deletePatient(id);
    return null;
  }
}

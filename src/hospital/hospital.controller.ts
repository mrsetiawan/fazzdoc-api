import { Controller, Get, Post, Body, Param, Patch} from '@nestjs/common';
import { HospitalService } from './hospital.service'

@Controller('hospital')
export class HospitalController {
  constructor(private readonly appHospital: HospitalService) { }

  //entry
  @Post('/entry')
  addHospital(
    @Body('nama_rumah_sakit') hosNamaRumahSakit: string,
    @Body('tlp') hosTlp: string,
    @Body('alamat') hosAlamat: string ) {
    const generateId  = this.appHospital.insertHospital(
      hosNamaRumahSakit, 
      hosTlp, 
      hosAlamat
    );

    return { generateId };
  }

  //list
  @Get('/list')
  getHospital() {
    return { data: this.appHospital.getHospital() };
  }

  //get list by id
  @Get(':id')
  getHospitalById(@Param('id') id: string) {
    return this.appHospital.getHospitalById(id);
  }

  //update
  @Patch(':id')
  updateHospital(
    @Param('id') id: string,
    @Body('nama_rumah_sakit') hosNamaRumahSakit: string,
    @Body('tlp') hosTlp: string,
    @Body('alamat') hosAlamat: string
  ) {
    this.appHospital.updateHospital(id, hosNamaRumahSakit, hosTlp, hosAlamat);
    return null;
  }

}

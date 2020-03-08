import { Controller, Get, Post, Delete, Patch, Body, Param  } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly appDoctor: DoctorService) { }

  //entry 
  @Post('/entry')
  addDoctor(
    @Body('nama_dokter') docNamaRumahSakit: string,
    @Body('spesialis') docSpesialis: string,
    @Body('tlp') docTlp: string,
    @Body('alamat') docAlamat: string
  ) {
    const generateId = this.appDoctor.insertDoctor(
      docNamaRumahSakit,
      docSpesialis,
      docTlp,
      docAlamat
    );
    
    return { generateId };
  }

  @Get('/list')
  getDoctor() {
    return this.appDoctor.getDoctor();
  }

  @Get(':id')
  getDoctorById(@Param('id') id: string){
    return this.appDoctor.getDoctorById(id);
  }

  @Patch(':id')
  updateDoctor(
    @Param('id') id: string,
    @Body('nama_dokter') docNamaRumahSakit: string,
    @Body('spesialis') docSpesialis: string,
    @Body('tlp') docTlp: string,
    @Body('alamat') docAlamat: string
  ) {
    this.appDoctor.updateDoctor(id, docNamaRumahSakit, docSpesialis, docTlp, docAlamat);
    return null;
  }

  @Delete(':id')
  removeDoctor(@Param('id') id: string){
    this.appDoctor.deleteDoc(id);
    return null;
  }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Hospital } from './hospital.model';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HospitalService {

  private hospital: Hospital[] = [];

  //InjectModel = nama model dari module
  constructor(@InjectModel('Hospital') private readonly hospitalModel: Model<Hospital>) {}
  //add hospital
   insertHospital(nama_rumah_sakit: string, tlp: string, alamat: string) {
    // const id = uuidv4();
    const newHospital = new this.hospitalModel({
      nama_rumah_sakit, 
      tlp, 
      alamat
    });

    const result =  newHospital.save();
    // this.hospital.push(newHospital);
    console.log(result);
    return 'id';
  }

  //list
  getHospital() {
    return [...this.hospital];
  }

  //get hospital by id
  getHospitalById(id: string){
    const hostById = this.findHospital(id)[0];
    return {...hostById};
  }

  //update hospital
  updateHospital(id: string, hosNamaRumahSakit: string, hosTlp: string, hosAlamat: string){
    const [hos, index] = this.findHospital(id);
    // return {...updateHos};
    const updateHos = {...hos};
    
    if(hosNamaRumahSakit){
      updateHos.nama_rumah_sakit = hosNamaRumahSakit
    }

    if(hosTlp){
      updateHos.tlp = hosTlp
    }
    
    if(hosAlamat){
      updateHos.alamat = hosAlamat
    }

    this.hospital[index] = updateHos;
  }

  //delete

  deleteHos(id: string){
    const index = this.findHospital(id)[1];
    this.hospital.splice(index, 1);
  }

  //find hospital 
  private findHospital(id: string): [Hospital, number] {
    const findHosIndex = this.hospital.findIndex((hos) => hos.id === id);
    const findHos = this.hospital[findHosIndex];

    if(!findHos) {
      throw new NotFoundException('Could not found hospital');
    }

    return [findHos, findHosIndex];
  }
}

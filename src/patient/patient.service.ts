import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientModel } from './patient.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PatientService {
  private patient : PatientModel[] = [];

  insertPatient(nama_pasien: string, tlp: string, alamat: string){
    const id = uuidv4();
    const newPatient = new PatientModel(id, nama_pasien, tlp, alamat);
    this.patient.push(newPatient);
    return id;
  }

  getPatient(){
    return [...this.patient];
  }

  getPatientById(id: string){
    const patientById = this.findPatient(id)[0];
    return {...patientById};
  }

  updatePatient(id: string, namaPasien: string, tlpPasien: string, alamatPasien: string){
    const [patient, index] = this.findPatient(id);
    const updatePat = {...patient};

    if(namaPasien){
      updatePat.nama_pasien = namaPasien
    }

    if(tlpPasien){
      updatePat.tlp = tlpPasien
    }
    
    if(alamatPasien){
      updatePat.alamat = alamatPasien
    }

    this.patient[index] = updatePat;
    
  }

  deletePatient(id: string){
    const index = this.findPatient(id)[1];
    this.patient.splice(index, 1)
  }

  private findPatient(id: string): [PatientModel, number] {
    const findPatIndex = this.patient.findIndex((hos) => hos.id === id);
    const findPat = this.patient[findPatIndex];

    if(!findPat) {
      throw new NotFoundException('Could not found hospital');
    }

    return [findPat, findPatIndex];
  }

}

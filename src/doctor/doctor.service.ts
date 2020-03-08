import { Injectable,NotFoundException } from '@nestjs/common';
import { DoctorModel } from './doctor.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DoctorService {

  private readonly doctor: DoctorModel[] = [];

  insertDoctor(nama_dokter: string, spesialis: string, tlp: string, alamat: string){
    const id = uuidv4();
    const newDoctor = new DoctorModel(id, nama_dokter, spesialis, tlp, alamat);
    this.doctor.push(newDoctor);
    return id;
  }
  
  getDoctor() {
    return [...this.doctor];
  }

  getDoctorById(id: string){
    const docById = this.findDoctor(id)[0];
    return {...docById};
  }

  updateDoctor(id: string, docNamaRumahSakit: string, docSpesialis: string, docTlp: string, docAlamat: string){
    const [doc ,idx] = this.findDoctor(id);
    const updateDoc = {...doc};

    if(docNamaRumahSakit){
      updateDoc.nama_dokter = docNamaRumahSakit;
    }

    if(docSpesialis){
      updateDoc.spesialis = docSpesialis;
    }

    if(docTlp){
      updateDoc.tlp = docTlp;
    }

    if(docAlamat){
      updateDoc.alamat = docAlamat;
    }

    this.doctor[idx] = updateDoc;
  }

  deleteDoc(id: string){
    const idx = this.findDoctor(id)[1];
    this.doctor.splice(idx, 1);
  }

  private findDoctor (id:string): [DoctorModel, number]{
    const findDocIndex = this.doctor.findIndex((doc) => doc.id === id);
    const findDoc = this.doctor[findDocIndex];

    if(!findDoc){
      throw new NotFoundException('Could not found doctor');
    }

    return [findDoc, findDocIndex];
  }

}

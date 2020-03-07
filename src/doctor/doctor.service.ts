import { Injectable } from '@nestjs/common';
import { Doctor } from './doctor.interface'

@Injectable()
export class DoctorService {

    private readonly doctor: Doctor[] = [];

    getDoctor(): string {
        return 'Muhamad rahmat setiawan';
    }

    createDoctor(doc: Doctor){
        this.doctor.push(doc);
    }

    
}

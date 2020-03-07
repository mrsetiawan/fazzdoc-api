import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientService {
    getPatient(): {name:string} {
        return {name: 'haris ramadan'};
    }
}

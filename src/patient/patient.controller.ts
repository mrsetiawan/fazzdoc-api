import { Controller, Get, Header } from '@nestjs/common';
import { PatientService } from './patient.service'

@Controller('patient')
export class PatientController {
    constructor(private readonly appPatient:PatientService) {}

    @Get('/list')
    // @Header('Content-Type', 'text-html')
    getPatient(): {name: string} {
        return this.appPatient.getPatient();
    }
}

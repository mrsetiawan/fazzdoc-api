import * as mongoose from 'mongoose';

export const HospitalSchema = new mongoose.Schema({
  nama_rumah_sakit: { type: String, required: true },
  tlp: { type: String, required: true },
  alamat: { type: String, required: true }
});

export interface Hospital {
  id: string;
  nama_rumah_sakit: string;
  tlp: string;
  alamat: string;
}
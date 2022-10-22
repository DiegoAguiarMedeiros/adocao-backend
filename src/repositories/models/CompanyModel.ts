import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  active: {
    type: Boolean,
    required: true,
  },
  pets: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: 'Pets',
  },
});

const Company = mongoose.model<any>('Company', CompanySchema);

export default Company;

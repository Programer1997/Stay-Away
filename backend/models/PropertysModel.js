import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number] // [longitude, latitude]
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Otros campos
});

propertySchema.index({ location: '2dsphere' });

export default mongoose.model('Property', propertySchema);
import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  coordinates: {
    type: { type: String, default: 'Point' },
    coordinates: [Number] // [longitude, latitude]
  },
  address: String,
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
});

locationSchema.index({ coordinates: '2dsphere' });

export default mongoose.model('Location', locationSchema);
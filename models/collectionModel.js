import { Schema, model } from 'mongoose';

const CollectionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    imageUrl: { type: String },
    topic: { type: String, required: true },
    title: { type: String, unique: true },
    description: { type: String },
    customFields: {
      number: { type: Array },
      string: { type: Array },
      textarea: { type: Array },
      date: { type: Array },
      checkbox: { type: Array },
    },
  },
  {
    timestamps: true,
  },
);

const CollectionModel = model('collection', CollectionSchema);
export default CollectionModel;

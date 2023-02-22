import { Schema, model } from 'mongoose';

const ItemSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    collectionId: { type: Schema.Types.ObjectId, ref: 'Collection' },
    tags: { type: Array },
    title: { type: String, required: true },
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

const ItemModel = model('item', ItemSchema);
export default ItemModel;

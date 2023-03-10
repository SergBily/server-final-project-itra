import { Schema, model } from 'mongoose';

const ItemSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    collectionId: { type: Schema.Types.ObjectId, ref: 'Collection' },
    tags: { type: Array },
    title: { type: String, required: true },
    visits: { type: Number, default: 0 },
    likes: { type: Array },
    customFields: {
      number: { type: Object },
      string: { type: Object },
      textarea: { type: Object },
      date: { type: Object },
      checkbox: { type: Object },
    },
  },
  {
    timestamps: true,
  },
);

const ItemModel = model('item', ItemSchema);
export default ItemModel;

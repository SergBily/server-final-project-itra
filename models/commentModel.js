import { Schema, model } from 'mongoose';

const CommentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    collectionId: { type: Schema.Types.ObjectId, ref: 'Collection' },
    itemId: { type: Schema.Types.ObjectId, ref: 'Item' },
    text: { type: String },
    sender: { type: String },
  },
  {
    timestamps: true,
  },
);

const CommentModel = model('Comment', CommentSchema);
export default CommentModel;

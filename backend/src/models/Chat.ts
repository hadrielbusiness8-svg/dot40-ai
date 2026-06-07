import mongoose, { Schema, Document } from 'mongoose';

interface IMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface IChat extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  messages: IMessage[];
  tags: string[];
  theme: 'green' | 'black';
  isPublic: boolean;
  shareToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    role: {
      type: String,
      enum: ['user', 'assistant'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const chatSchema = new Schema<IChat>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      default: 'New Chat',
    },
    messages: [messageSchema],
    tags: {
      type: [String],
      default: [],
    },
    theme: {
      type: String,
      enum: ['green', 'black'],
      default: 'green',
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    shareToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Index for search and filtering
chatSchema.index({ userId: 1, title: 'text', tags: 1 });
chatSchema.index({ shareToken: 1 });

export const Chat = mongoose.model<IChat>('Chat', chatSchema);

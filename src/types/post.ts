// src/types/post.ts

import { Like } from "./like";
import { PostComment } from "./comment";

export interface Post {
  id: string;
  userId: string;
  caption?: string | null;
  createdAt: Date;
  updatedAt: Date;
  comments: PostComment[];
  likes: Like[];
  user: {
    name: string | null;
    image: string | null;
  };
  images: { imageUrl: string }[];
}

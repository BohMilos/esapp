// src/types/comment.ts

export type PostComment = {
    id: string;
    content: string;
    createdAt: string;
    user: {
      name: string | null;
      image: string | null;
    };
  };
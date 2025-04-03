// src/components/post/CommentSection.tsx

'use client';

import { Avatar, Box, Typography, Stack } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { PostComment } from '@/types/comment';


type CommentSectionProps = {
  comments: PostComment[];
};

export default function CommentSection({ comments }: CommentSectionProps) {
  if (!comments?.length) {
    return <Typography color="text.secondary" mt={2}>No comments yet.</Typography>;
  }

  return (
    <Stack spacing={2} mt={2}>
      {comments.map((comment) => (
        <Box key={comment.id} display="flex" gap={2} alignItems="flex-start">
          {/*<Avatar
            src={comment.user.image ?? undefined}
            alt={comment.user.name ?? 'User'}
            sx={{ width: 32, height: 32 }}
      />*/}
          <Box>
            <Typography variant="subtitle2">
              {comment.user.name ?? 'Anonymous'}
            </Typography>
            <Typography variant="body2">{comment.content}</Typography>
            <Typography variant="caption" color="text.secondary">
              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

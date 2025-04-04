//src components/post/CommentSection.tsx

"use client";

import { Avatar, Box, Typography, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatDistanceToNow } from "date-fns";
import { PostComment } from "@/types/comment";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type CommentSectionProps = {
  comments: PostComment[];
};

export default function CommentSection({ comments }: CommentSectionProps) {
  const router = useRouter();
  const { data: session } = useSession(); // ✅ get logged-in user

  const deleteComment = async (commentId: string) => {
    try {
      await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  if (!comments?.length) {
    return (
      <Typography color="text.secondary" mt={2}>
        No comments yet.
      </Typography>
    );
  }

  return (
    <Stack spacing={2} mt={2}>
      {comments.map((comment) => {
        const isOwner = comment.user.id === session?.user?.id;

        return (
          <Box key={comment.id} display="flex" gap={2} alignItems="flex-start">
            <Avatar
              src={comment.user.image ?? undefined}
              alt={comment.user.name ?? "User"}
              sx={{ width: 20, height: 20 }}
            />
            <Box flexGrow={1}>
              <Typography
                component="span"
                sx={{ fontWeight: "bold" }}
                variant="subtitle2"
              >
                {comment.user.name ?? "Anonymous"}{" "}
                <Typography variant="body2">{comment.content}</Typography>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                })}
              </Typography>
            </Box>

            {/* ✅ Show delete button only if current user is owner */}
            {isOwner && (
              <IconButton
                onClick={() => deleteComment(comment.id)}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}

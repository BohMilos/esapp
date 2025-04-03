// src/components/post/AddCommentForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { Button, TextField } from "@mui/material";

interface AddCommentFormProps {
    postId: string;
}

export default function AddCommentForm ({ postId }: AddCommentFormProps) {
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const session = await getSession();
            if (!session?.user?.id) {
                setError("You must be logged in to add a comment.");
                setLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append('content', content);
            formData.append('userId', session.user.id);
            formData.append('postId', postId);

            const response = await fetch('/api/comments', {
              method: 'POST',
              body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                alert("Comment added successfully!");
                setContent("");
                router.refresh();
            } else {
                setError(data.message || "Failed to add comment.");
            }
        } catch (error) {
            console.error("Error adding comment:", error);
            setError("Failed to add comment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Comment"
                variant="outlined"
                fullWidth
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Comment
            </Button>
        </form>
    );
}
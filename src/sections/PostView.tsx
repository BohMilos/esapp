// src/sections/PostView.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Post, User } from "@prisma/client";
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography,
  IconButton,
  Box,
  Avatar,
  Stack,
  styled
} from "@mui/material";
import { 
  FavoriteBorder as FavoriteIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  BookmarkBorder as BookmarkIcon
} from '@mui/icons-material';
import { fetchPosts } from "@/app/actions/posts";
import { formatDistanceToNow } from 'date-fns';
//import Image from "next/image";

// Extend the Post type to include the user property
interface PostWithUser extends Post {
  user: User;
}

/*interface PostViewProps {
    post?: Post;
}*/

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: '16px auto',
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
}));

const PostView = () => {
    const [posts, setPosts] = useState<PostWithUser[]>([]);
    
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts as PostWithUser[]);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        loadPosts();
    }, []);

    return (              
        <Box sx={{ maxWidth: 600, mx: 'auto', pb: 7 }}>
            {posts.map((post) => (
                <StyledCard key={post.id}>
                    {/* Post Header */}
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar 
                                src={post.user?.image || ''} 
                                alt={post.user?.name || 'user'}
                                sx={{ width: 32, height: 32 }}
                            />
                            <Typography variant="subtitle2" fontWeight="medium">
                                {post.user?.name}
                            </Typography>
                        </Box>
                        <IconButton size="small">
                            <MoreVertIcon />
                        </IconButton>
                    </Box>

                    {/* Post Image */}
                    <CardMedia
                        component="img"
                        image={post.imageUrl}
                        alt="Post image"
                        sx={{ 
                            width: '100%',
                            aspectRatio: '1/1',
                            objectFit: 'cover'
                        }}
                    />

                    {/* Post Actions */}
                    <Box sx={{ px: 2, pt: 1 }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Box>
                                <IconButton>
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton>
                                    <CommentIcon />
                                </IconButton>
                                <IconButton>
                                    <ShareIcon />
                                </IconButton>
                            </Box>
                            <IconButton>
                                <BookmarkIcon />
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* Post Content */}
                    <CardContent sx={{ pt: 1 }}>
                        <Typography variant="subtitle2" component="span" fontWeight="bold" sx={{ mr: 1 }}>
                            {post.user?.name}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {post.caption}
                        </Typography>
                        <Typography 
                            variant="caption" 
                            color="text.secondary" 
                            display="block" 
                            sx={{ mt: 1 }}
                        >
                            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                        </Typography>
                    </CardContent>
                </StyledCard>
            ))}
        </Box>
    );
}

export default PostView
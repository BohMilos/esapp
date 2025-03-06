"use client";

import React, { useEffect, useState } from "react";
import {
    Container,
    Box,
    Avatar,
    Typography,
    Paper,
    Divider,
    Stack,
    Button,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { Post, User } from "@prisma/client";
import { fetchPostsByUserId } from "@/app/actions/posts";
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Image from "next/image";

interface PostWithUser extends Post {
    user: User;
}

interface ProfileViewProps {
    id: string;
}

export default function ProfileView({ id }: ProfileViewProps) {
    const { data: session } = useSession();
    const [posts, setPosts] = useState<PostWithUser[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');
    const isOwnProfile = session?.user?.email === user?.email;

    useEffect(() => {
        const loadUserData = async () => {
            try {
                // Fetch user data
                const response = await fetch(`/api/users/${id}`);
                const userData = await response.json();
                setUser(userData);

                // Fetch user's posts
                const userPosts = await fetchPostsByUserId(id);
                setPosts(userPosts as PostWithUser[]);
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        };
        loadUserData();
    }, [id]);

    if (!user) {
        return (
            <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
                <Typography>Načítavam profil...</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Profile Header */}
            <Paper 
                elevation={0}
                sx={{ 
                    p: 4, 
                    mb: 4, 
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                        <Avatar
                            src={user.image || undefined}
                            alt={user.name || "User"}
                            sx={{ width: 120, height: 120 }}
                        />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Typography variant="h5" fontWeight="medium">
                                    {user.name}
                                </Typography>
                                {isOwnProfile && (
                                    <>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            startIcon={<EditIcon />}
                                            sx={{ textTransform: 'none' }}
                                        >
                                            Upraviť profil
                                        </Button>
                                        <Button
                                            variant="text"
                                            size="small"
                                            sx={{ minWidth: 0, p: 1 }}
                                        >
                                            <SettingsIcon />
                                        </Button>
                                    </>
                                )}
                                {!isOwnProfile && (
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{ textTransform: 'none' }}
                                    >
                                        Sledovať
                                    </Button>
                                )}
                            </Box>
                            <Stack direction="row" spacing={4} mb={2}>
                                <Box>
                                    <Typography component="span" fontWeight="bold">
                                        {posts.length}
                                    </Typography>
                                    {' príspevkov'}
                                </Box>
                                <Box>
                                    <Typography component="span" fontWeight="bold">0</Typography>
                                    {' sledovateľov'}
                                </Box>
                                <Box>
                                    <Typography component="span" fontWeight="bold">0</Typography>
                                    {' sledovaných'}
                                </Box>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                                {user.email}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>

            {/* Tabs */}
            <Paper 
                elevation={0}
                sx={{ 
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                }}
            >
                <Stack 
                    direction="row" 
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button
                        fullWidth
                        startIcon={<GridViewIcon />}
                        onClick={() => setActiveTab('posts')}
                        sx={{
                            py: 1.5,
                            color: activeTab === 'posts' ? 'primary.main' : 'text.secondary',
                            borderBottom: activeTab === 'posts' ? 2 : 0,
                            borderColor: 'primary.main',
                            borderRadius: 0,
                        }}
                    >
                        PRÍSPEVKY
                    </Button>
                    {isOwnProfile && (
                        <Button
                            fullWidth
                            startIcon={<BookmarkBorderIcon />}
                            onClick={() => setActiveTab('saved')}
                            sx={{
                                py: 1.5,
                                color: activeTab === 'saved' ? 'primary.main' : 'text.secondary',
                                borderBottom: activeTab === 'saved' ? 2 : 0,
                                borderColor: 'primary.main',
                                borderRadius: 0,
                            }}
                        >
                            ULOŽENÉ
                        </Button>
                    )}
                </Stack>

                {/* Posts Grid */}
                <Box sx={{ p: 2 }}>
                    {activeTab === 'posts' ? (
                        posts.length > 0 ? (
                            <ImageList 
                                variant="quilted" 
                                cols={3} 
                                gap={8}
                            >
                                {posts.map((post) => (
                                    <ImageListItem 
                                        key={post.id}
                                        sx={{ 
                                            aspectRatio: '1/1',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                opacity: 0.8,
                                            },
                                        }}
                                    >
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.caption || 'Post image'}
                                            loading="lazy"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        ) : (
                            <Box 
                                sx={{ 
                                    py: 8, 
                                    textAlign: 'center',
                                    color: 'text.secondary',
                                }}
                            >
                                <Typography>Zatiaľ žiadne príspevky</Typography>
                            </Box>
                        )
                    ) : (
                        <Box 
                            sx={{ 
                                py: 8, 
                                textAlign: 'center',
                                color: 'text.secondary',
                            }}
                        >
                            <Typography>Zatiaľ žiadne uložené príspevky</Typography>
                        </Box>
                    )}
                </Box>
            </Paper>
        </Container>
    );
} 
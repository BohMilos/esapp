// src/sections/SearchView.tsx
"use client";
import React, { useEffect } from "react";
import { 
    Box, 
    Card, 
    CardActionArea, 
    CardContent, 
    Typography,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Avatar,
    Stack,
    Grid,
    CircularProgress,
    styled
} from "@mui/material";
import { useSearch } from "@/components/SearchContext";
import { searchUsers, searchPosts } from "@/app/actions/search";
import { User, Post } from "@prisma/client";
import { formatDistanceToNow } from 'date-fns';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const SearchView = () => {
    const { 
        searchQuery, 
        setSearchQuery, 
        searchResults, 
        setSearchResults,
        isLoading,
        setIsLoading,
        searchType,
        setSearchType
    } = useSearch();

    // Load initial users
    useEffect(() => {
        const loadInitialUsers = async () => {
            if (searchType === 'users') {
                setIsLoading(true);
                try {
                    const users = await searchUsers('');
                    setSearchResults(users);
                } catch (error) {
                    console.error("Error loading initial users:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        loadInitialUsers();
    }, [searchType, setIsLoading, setSearchResults]);

    useEffect(() => {
        const performSearch = async () => {
            setIsLoading(true);
            try {
                const results = await (searchType === 'users' 
                    ? searchUsers(searchQuery)
                    : searchPosts(searchQuery)
                );
                setSearchResults(results);
            } catch (error) {
                console.error("Search error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const debounceTimer = setTimeout(performSearch, 300);
        return () => clearTimeout(debounceTimer);
    }, [searchQuery, searchType, setSearchResults, setIsLoading]);

    const handleSearchTypeChange = (_: React.MouseEvent<HTMLElement>, newType: 'users' | 'posts') => {
        if (newType !== null) {
            setSearchType(newType);
            setSearchQuery(''); // Clear search when switching types
        }
    };

    const renderUserResult = (user: User) => (
        <Grid item xs={6} sm={4} md={4} key={user.id}>
            <StyledCard>
                <CardActionArea href={`/profil/${user.id}`} sx={{ height: '100%' }}>
                    <CardContent>
                        <Stack spacing={2} alignItems="center" textAlign="center">
                            <Avatar 
                                src={user.image || undefined}
                                alt={user.name || 'User'}
                                sx={{ width: 80, height: 80 }}
                            />
                            <Box>
                                <Typography variant="subtitle1" noWrap>
                                    {user.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary"
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {user.email}
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Grid>
    );

    const renderPostResult = (post: Post & { user: User }) => (
        <Grid item xs={12} key={post.id}>
            <StyledCard>
                <CardActionArea href={`/prispevok/${post.id}`}>
                    <CardContent>
                        <Stack direction="row" spacing={2}>
                            <Box 
                                component="img" 
                                src={post.imageUrl}
                                sx={{ 
                                    width: 60, 
                                    height: 60, 
                                    objectFit: 'cover',
                                    borderRadius: 1
                                }}
                            />
                            <Box sx={{ flex: 1 }}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Avatar 
                                        src={post.user.image || undefined}
                                        alt={post.user.name || 'User'}
                                        sx={{ width: 24, height: 24 }}
                                    />
                                    <Typography variant="subtitle2">
                                        {post.user.name}
                                    </Typography>
                                </Stack>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        mt: 1,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                >
                                    {post.caption}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Grid>
    );

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: 2 }}>
            <Stack spacing={2}>
                <TextField
                    fullWidth
                    placeholder={`Search ${searchType}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    variant="outlined"
                />
                
                <ToggleButtonGroup
                    value={searchType}
                    exclusive
                    onChange={handleSearchTypeChange}
                    aria-label="search type"
                    fullWidth
                >
                    <ToggleButton value="users">Používatelia</ToggleButton>
                    <ToggleButton value="posts">Príspevky</ToggleButton>
                </ToggleButtonGroup>

                {isLoading ? (
                    <Box display="flex" justifyContent="center" p={4}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={2}>
                        {searchResults.map((result) => (
                            'email' in result 
                                ? renderUserResult(result as User)
                                : renderPostResult(result as Post & { user: User })
                        ))}
                        {searchType === 'posts' && !searchQuery && (
                            <Grid item xs={12}>
                                <Typography color="text.secondary" textAlign="center">
                                    Enter a search term to find posts
                                </Typography>
                            </Grid>
                        )}
                        {searchQuery && searchResults.length === 0 && (
                            <Grid item xs={12}>
                                <Typography color="text.secondary" textAlign="center">
                                    No results found
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                )}
            </Stack>
        </Box>
    );
};

export default SearchView;
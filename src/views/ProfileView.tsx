// src/views/ProfileView.tsx

"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import PostCard from "@/components/PostCard";
import { Post } from "@/types/post";

export default function ProfileView() {
  const router = useRouter();
  const { data: session } = useSession();
  const [value, setValue] = useState(0);
  const [stats, setStats] = useState({ posts: 0, followers: 0, following: 0 });
  const [posts, setPosts] = useState<Post[]>([]);
  const [bookmarks, setBookmarks] = useState<Post[]>([]);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (!session) {
      router.push("/auth/prihlasenie");
      return;
    }

    const fetchAll = async () => {
      const resStats = await fetch("/api/profile/stats");
      const dataStats = await resStats.json();
      setStats(dataStats);

      const resProfile = await fetch("/api/profile/details");
      const dataProfile = await resProfile.json();
      setBio(dataProfile.bio || "");
      setLocation(dataProfile.location || "");

      {
        /*const resPosts = await fetch("/api/posts");
      const dataPosts = await resPosts.json();
      setPosts(dataPosts.posts);
    setBookmarks(dataPosts.bookmarks);*/
      }
    };

    fetchAll();
  }, [session, router]);

  if (!session) return null;

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Profile Header */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 4,
          p: 3,
          mb: 4,
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <Avatar
          src={session.user.image ?? "/default-avatar.png"}
          sx={{
            width: 100,
            height: 100,
            mx: "auto",
            mb: 2,
          }}
        />
        <Typography variant="h5" fontWeight="bold" color="primary">
          {session.user.name}
        </Typography>
        <Button
          component={NextLink}
          href="/profil/upravit"
          variant="contained"
          sx={{
            mt: 2,
            px: 4,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Upraviť profil
        </Button>

        {bio && (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2.5 }}>
            {bio}
          </Typography>
        )}

        {location && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2.5 }}>
            📍 {location}
          </Typography>
        )}

        <Grid container spacing={2} mt={3}>
          {["príspevkov", "sledovateľov", "sledovaných"].map((label, i) => (
            <Grid item xs={4} key={label}>
              <Typography variant="h6" color="primary">
                {i === 0
                  ? stats.posts
                  : i === 1
                  ? stats.followers
                  : stats.following}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          background: "background.paper",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          variant="fullWidth"
          textColor="inherit"
        >
          <Tab label="Príspevky" />
          <Tab label="Uložené" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {value === 0 && (
            <>
              {posts.length > 0 ? (
                <Grid container spacing={2}>
                  {posts.map((post) => (
                    <Grid item xs={4} key={post.id}>
                      <PostCard post={post} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Box textAlign="center">
                  <Typography color="text.secondary" mb={2}>
                    Zatiaľ tu nie sú žiadne príspevky
                  </Typography>
                  <Button
                    component={NextLink}
                    href="/pridat"
                    variant="contained"
                    sx={{
                      px: 4,
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    Pridať prvý príspevok
                  </Button>
                </Box>
              )}
            </>
          )}

          {value === 1 && (
            <>
              {bookmarks.length > 0 ? (
                <Grid container spacing={2}>
                  {bookmarks.map((post) => (
                    <Grid item xs={4} key={post.id}>
                      <PostCard post={post} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography color="text.secondary" textAlign="center">
                  Zatiaľ žiadne uložené príspevky.
                </Typography>
              )}
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}

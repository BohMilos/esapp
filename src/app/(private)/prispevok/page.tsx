// src/app/(private)/prispevok/page.tsx

import NextLink from "next/link";

import { Link as MuiLink } from "@mui/material";
import { Container, Typography, Box } from "@mui/material";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import { Post } from "@/types/post";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Príspevky | SnapZoška" };

export default async function FeedPage() {
  const posts: Post[] = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true, images: true, likes: true, comments: { include: { user: true } } }, // Include user and images in the posttrue },
  });

  return (
    <Container sx={{ mt: 5, pb: 10 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}>
        Príspevky
      </Typography>

      {posts.length > 0 ? (
        posts.map((post) => {
          if (!post.user.name) {
            return null; // Skip posts with null user.name
          }
          return (
            <PostCard
              key={post.id}
              post={post}
            />
          );
        }) // Každý príspevok je zobrazený pomocou PostCard
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              textAlign: "center",
              color: "text.secondary",
            }}>
            Žiadne príspevky na zobrazenie.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "text.primary" }}>
            Buďte prvý, kto zdieľa príspevok!{" "}
            <MuiLink
              component={NextLink}
              href="/pridat">
              Create a new post
            </MuiLink>
          </Typography>
        </Box>
      )}
    </Container>
  );
}

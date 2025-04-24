// src/components/ProfileEdit.tsx

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Container, Box, Avatar, TextField, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function ProfileEditView() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setPreview(session.user.image || null);
      fetch("/api/profile/details").then(async (res) => {
        const data = await res.json();
        setBio(data.bio || "");
        setLocation(data.location || "");
      });
    }
  }, [session]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("location", location);
    if (fileInputRef.current?.files?.[0]) {
      formData.append("image", fileInputRef.current.files[0]);
    }

    await fetch("/api/profile", {
      method: "PATCH",
      body: formData,
    });

    router.refresh();
    router.push("/prispevok");
  };

  if (status === "loading") return null;
  if (!session) {
    router.push("/auth/prihlasenie");
    return null;
  }

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: 500,
          margin: "0 auto",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          border: "2px solid #e0e0e0",
          backgroundColor: "background.paper",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 100,
            height: 100,
            margin: "0 auto",
          }}
        >
          <Avatar
            src={preview ?? undefined}
            sx={{
              width: "100%",
              height: "100%",
              border: "2px dashed #ccc",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            {!preview && <CameraAltIcon sx={{ color: "#aaa" }} />}
          </Avatar>
          <input
            hidden
            accept="image/*"
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </Box>
        <TextField
          fullWidth
          label="Meno"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          label="Lokalita"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            padding: "12px",
            borderRadius: 2,
            marginTop: 2,
            fontWeight: 600,
          }}
        >
          Uložiť zmeny
        </Button>
      </Box>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="outlined"
          href="/profil"
          startIcon={<ArrowBackIcon />}
          size="large"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            px: 4,
          }}
        >
          Späť na profil
        </Button>
      </Box>
    </Container>
  );
}

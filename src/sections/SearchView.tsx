// src/sections/SearchView.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Box, Card, CardActionArea, CardContent, FormControl, Typography } from "@mui/material";
import { fetchUsers } from "@/app/actions/users";
import { User } from "@prisma/client";
//import Link from "next/link";

interface SearchViewProps {
    user?: User;
}

const SearchView = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        loadUsers();
    }, []);

    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
            {users.map((user) => (
                <Card key={user.id} sx={{ m: 0, textUnderline: "none" }}>
                    <CardActionArea href={`/profil/${user.id}`}>
                        <CardContent>
                            <Typography variant="body1" sx={{ color: "text.primary" }}>
                                <img
                                    src={user.image || "/default-avatar.png"}
                                    style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                                /> {user.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {/*user.profile.location*/}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {/*user.profile.bio*/}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}
export default SearchView
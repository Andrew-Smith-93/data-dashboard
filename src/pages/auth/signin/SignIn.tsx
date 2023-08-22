import React, { useEffect } from "react";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const SignIn = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Redirect to the home page after the user logs in
        if (session) {
            router.push("/");
        }
    }, [session, router]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h2>{session ? "Thank you for logging in" : "Please log in"}</h2>
            <Login />
        </Box>
    );
};

export default SignIn;

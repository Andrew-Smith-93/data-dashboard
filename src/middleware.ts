import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {

        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verify-request", // (used for check email message)
        
    },
});
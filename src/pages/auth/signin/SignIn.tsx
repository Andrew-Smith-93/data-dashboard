import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);

};

export default SignIn;

import { useSession, signIn, signOut } from "next-auth/react"

const Login= () => {
    const { data: session } = useSession();

    if(session) {
        return <>
        Signed in as {session?.user?.email} <br/>
        </>
    }
    return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
    </>

}

export default Login

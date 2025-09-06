import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/app/api/auth/auth";

export default async function Navbar() {
    const session = await auth()
    return (
        <header className="bg-white shadow-sm px-4 py-2">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Image src="/images/header-logo.png" alt="logo" width={100} height={24} priority/>
                </Link>

                <div className="flex items-center gap-4">
                    {session && session.user ?
                        <>
                            <Link href="/startup/create" className="text-black">
                                <span className="">
                                    Create
                                </span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({redirectTo: '/'})
                            }}>
                                <button type="submit" className="text-black">
                                    <span className="cursor-pointer">
                                        Logout
                                    </span>
                                </button>
                            </form>

                            <Link href={`/user/${session.user.id}`} className="text-black">
                                <span className="bg-sky-200 py-2 px-4 rounded-full">
                                    {session.user.name?.split(' ')[0]}
                                </span>
                            </Link>
                        </> :
                        <>
                            <form action={async () => {
                                "use server";
                                await signIn('github')
                            }}>
                                <button type="submit" className="text-black">
                                    <span className="cursor-pointer">
                                        Login
                                    </span>
                                </button>
                            </form>
                        </>
                    }
                </div>
            </nav>
        </header>
    )
}

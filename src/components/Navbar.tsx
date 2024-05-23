"use client"
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();
    const handleclic = () => {
        router.push("/");
    }
    return <div className="flex justify-between items-center md:px-[50px] h-[60px]">
        <div className="text-xl font-[500]"><button onClick={handleclic}>Recipe</button></div>
    </div>
}
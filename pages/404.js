import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push("/");
            // router.back()//geldiği sayfaya geri dön
        },3000)
    }, []);

    return (
        <div className="not-found">
            <h1>Oooopppss.....</h1>
            <h2>404 | Not Found</h2>
            <p>Please click for <Link href="/">Home</Link> </p>
        </div>
    );
}

export default NotFound;
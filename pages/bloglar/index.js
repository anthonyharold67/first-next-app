import Link from "next/link";
import styles from "../../styles/Blog.module.css"
const Bloglar = ({bloglar}) => {
    console.log(bloglar);
    return (
        <div className="bloglar">
            <h1 className={styles.title}>Bloglar</h1>
            {bloglar.map(blog=>{
                return (
                    <Link href={`/bloglar/${blog.id}`} key={blog.id}>
                        <p className={styles.single}>
                            <h3>{blog.title}</h3>
                        </p>
                    </Link>
                )
            })}
        </div>
    );
}

export default Bloglar;

export const getStaticProps= async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data);//local terminalde gözükür
    return {
        props: {
            bloglar: data.slice(0,10)
        }
    }
}
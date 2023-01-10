import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = ({blog}) => {
  const router = useRouter();
  const { id } = router.query;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((response) => setDetail(response));
  }, [id]);

  console.log(detail);

  return (
    <div>
      <p>
        <p>useEffectten gelen</p>
        <h3>{detail.title}</h3>
        <p>getServerSideProps tan gelen</p>
        <h3>{blog.title}</h3>
      </p>
    </div>
  );
};

export default Detail;

export const getServerSideProps=async(context)=>{
    const { id } = context.query;
    const detail = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then((response) => response.json())
     .then((response) => response);
     return {
        props: {
            blog:detail
        }
    }

}

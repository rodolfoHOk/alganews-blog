import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from 'querystring';
import { Post, PostService } from "rodolfohiok-sdk";

interface PostProps {
  post: Post.Detailed;
}

export default function PostPage(props: PostProps) {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return <div>
    {props.post.title}
  </div>
}

interface Params extends ParsedUrlQuery{
  id: string;
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> = async ({ params }) => {
  console.log(params);

  if (!params) return { notFound: true };
  const { id } = params;
  console.log(id);

  const postId = Number(id);
  if (isNaN(postId)) return { notFound: true };

  const post = await PostService.getExistingPost(postId);

  return {
    props: {
      post
    }
  };
}

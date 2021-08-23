import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from 'querystring';
import { Post, PostService } from "rodolfohiok-sdk";

interface PostProps extends NextPageProps{
  post?: Post.Detailed;
}

export default function PostPage(props: PostProps) {
  return <div>
    { props.post?.title }
  </div>
}

interface Params extends ParsedUrlQuery{
  id: string;
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> = async ({ params }) => {
  try {
    if (!params) return { notFound: true };
  
    const { id } = params;
    const postId = Number(id);
    if (isNaN(postId)) return { notFound: true };
  
    const post = await PostService.getExistingPost(postId);
  
    return {
      props: {
        post
      }
    };
  } catch (error) {
    console.log(error.response);
    return {
      props : {
        error: {
          message: error.response.data?.detail || error.message,
          statusCode: error.response.data?.status || 500,
        }
      }
    }
  }
}

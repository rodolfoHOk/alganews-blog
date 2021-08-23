import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from 'querystring';
import { Post, PostService } from "rodolfohiok-sdk";
import CustomError from "rodolfohiok-sdk/dist/CustomError";
import { ResourceNotFoundError, InvalidDataError } from "rodolfohiok-sdk/dist/errors";

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
    if (error instanceof CustomError)
      console.log('Error: CustomError');
    if (error instanceof ResourceNotFoundError) {
      console.log('Error: ResourceNotFoundError');
      return { notFound: true };
    }
    if (error instanceof InvalidDataError)
      console.log('Error: InvalidDataError');
    return {
      props : {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        }
      }
    }
  }
}

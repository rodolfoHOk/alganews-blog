import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from 'querystring';
import { Post, PostService } from "rodolfohiok-sdk";
import { ResourceNotFoundError } from "rodolfohiok-sdk/dist/errors";

interface PostProps extends NextPageProps{
  post?: Post.Detailed;
  host?: string;
}

export default function PostPage(props: PostProps) {
  return <>
    <Head>
      <link 
        rel="canonical" 
        href={`${props.host}/posts/${props.post?.id}/${props.post?.slug}`} 
      />
    </Head>
    <div>
      { props.post?.title }
    </div>
  </>
}

interface Params extends ParsedUrlQuery{
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<PostProps, Params> = 
async ({ params, req }) => {
  try {
    if (!params) return { notFound: true };

    const { id } = params;
    const postId = Number(id);
    if (isNaN(postId)) return { notFound: true };
  
    const post = await PostService.getExistingPost(postId);
 
    return {
      props: {
        post,
        host: req.headers.host
      }
    };
  } catch (error) {
    if (error instanceof ResourceNotFoundError)
      return { notFound: true };
    
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

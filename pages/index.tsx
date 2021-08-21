import type { NextPage } from 'next';
import Head from 'next/head';
import FeaturedPost from '../components/FeaturedPost';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AlgaNews - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPost postSummary={
        {
          "id": 1,
          "title": "Você sabe como é trabalhar em uma startup?",
          "slug": "voce-sabe-como-e-trabalhar-em-uma-startup",
          "imageUrls": {
            "small": "http://localhost:8080/downloads/posts/small/voce-sabe-como-e-trabalhar-em-uma-startup.jpg",
            "medium": "http://localhost:8080/downloads/posts/medium/voce-sabe-como-e-trabalhar-em-uma-startup.jpg",
            "large": "http://localhost:8080/downloads/posts/large/voce-sabe-como-e-trabalhar-em-uma-startup.jpg",
            "default": "http://localhost:8080/downloads/posts/voce-sabe-como-e-trabalhar-em-uma-startup.jpg"
          },
          "published": true,
          "tags": [
            "Java",
            "ReactJS",
            "Javascript"
          ],
          "createdAt": "2021-08-19T23:51:29Z",
          "updatedAt": "2021-08-19T23:51:29Z",
          "canBePublished": false,
          "canBeUnpublished": false,
          "canBeDeleted": false,
          "canBeEdited": false,
          "editor": {
            "id": 6,
            "name": "Débora Mendonça",
            "avatarUrls": {
              "small": "http://localhost:8080/downloads/photos/small/avatar-debora.jpeg",
              "medium": "http://localhost:8080/downloads/photos/medium/avatar-debora.jpeg",
              "large": "http://localhost:8080/downloads/photos/large/avatar-debora.jpeg",
              "default": "http://localhost:8080/downloads/photos/avatar-debora.jpeg"
            },
            "createdAt": "2021-02-20T23:51:29Z"
          }
        }
      } />
    </div>
  )
}

export default Home

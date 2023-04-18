import Link from 'next/link';
import { LikeButton } from './LikeButton';
import { fetchPosts } from '@/utils/fetchPosts';

//Async Component porque ahora asi se maneja el serverSideProps o sataticSideProps
export async function ListOfPost() {
  const posts = await fetchPosts();
  return posts.slice(0, 10).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}

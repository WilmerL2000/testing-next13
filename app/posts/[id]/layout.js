import { fetchPostById } from '@/utils/fetchPosts';
import Link from 'next/link';

//Children PostsLayout
export default async function Post({ children, params: { id } }) {
  const { title, body } = await fetchPostById(id);
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link
        href={`/posts/${id}/comments`}
        style={{
          backgroundColor: '#054078',
          textAlign: 'center',
          width: '20%',
          padding: '1rem',
          borderRadius: '10px',
        }}
      >
        Ver comentarios
      </Link>
      {children}
    </article>
  );
}

import { getPostCommments } from '@/utils/fetchPosts';

//Children Post Layout
export default async function Comments({ params: { id } }) {
  const comments = await getPostCommments(id);
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginTop: '10px',
        background: '#444',
        padding: '20px',
        borderRadius: '1rem',
      }}
    >
      {comments.map(({ id, name, body }) => (
        <li key={id}>
          <h2>{name}</h2>
          <small>{body}</small>
        </li>
      ))}
    </ul>
  );
}

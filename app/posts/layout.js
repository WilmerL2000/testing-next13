export default function PostsLayout({ children }) {
  return (
    <div>
      <small style={{ fontSize: '25px' }}>Home &bull; Posts </small>
      {children}
    </div>
  );
}

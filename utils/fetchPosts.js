export const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((resp) =>
    resp.json()
  );
};

export const fetchPostById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (resp) => resp.json()
  );
};

export const getPostCommments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((resp) => resp.json());
};

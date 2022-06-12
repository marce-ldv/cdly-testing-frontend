import { useState } from "react";
import Form from "./Form";
import PostPresentation from './PostPresentation';

// Container / Application
function PostsContainer({ postRepository }) {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = async (data) => {
    const newPost = await postRepository.create(data)
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <h1>Create new post</h1>
      <Form submit={handleCreatePost} />

      <section>
        {posts.map((post) => (
          <PostPresentation post={post} key={post.id} />
        ))}
      </section>
    </div>
  );
}

export default PostsContainer;

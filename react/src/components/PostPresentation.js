const PostPresentation = (post) => {
  return (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}

export default PostPresentation;

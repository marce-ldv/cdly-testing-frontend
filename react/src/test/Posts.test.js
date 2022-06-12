import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Posts from '../components/Posts';
import { postRepository } from '../model/post/postRepository';

const post = {
  id: 101,
  title: 'Mock title',
  content: 'Mock content'
};

describe('Post container', () => {
  it('should retrieve a post when create one', () => {
    postRepository.create = jest.fn();
    const setPosts = jest.fn()

    render(<Posts postRepository={postRepository}/>);

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    const result = postRepository.create.mockResolvedValue(post);

    act(() => {
      userEvent.click(submitBtn);
      setPosts(result);
    });

    expect(result).toHaveBeenCalledTimes(1);
  });
});

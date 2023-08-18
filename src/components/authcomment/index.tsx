import distanceToNow from 'src/lib/dateRelative';
import useComments from '../../hooks/useComment';
import { Comment, User } from '../../lib/types';
import { signIn, signOut, useSession } from 'next-auth/react';

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

type CommentListProps = {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
};

export default function AuthComment() {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <div className='mt-20'>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  );
}

function CommentForm({ onSubmit, text, setText }: CommentFormProps) {
  const { data: session } = useSession();
  return (
    <form onSubmit={onSubmit}>
      {session?.user?.name}
      {session?.user?.email}
      {session?.user?.image}
      <textarea
        className='flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500'
        rows={2}
        placeholder={
          session
            ? `What are your thoughts?`
            : 'Please login to leave a comment'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!session}
      />

      <div className='flex items-center mt-4'>
        {session ? (
          <div className='flex items-center space-x-6'>
            <button
              className='py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700'
              type='submit'
            >
              Send
            </button>
            <a
              href={`/api/auth/signout`}
              className='text-gray-500'
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Log Out
            </a>
          </div>
        ) : (
          <a
            href={`/api/auth/signin`}
            type='button'
            className='py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700'
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Log In
          </a>
        )}
      </div>
    </form>
  );
}

function CommentList({ comments, onDelete }: CommentListProps) {
  const user: User = {
    user_id: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    image: 'profile.jpg',
  };
  return (
    <div className='space-y-6 mt-10'>
      {comments &&
        comments.map((comment) => {
          const isAuthor = user && user.user_id === comment.user.user_id;

          return (
            <div key={comment.created_at} className='flex space-x-4'>
              <div className='flex-shrink-0'>
                <img
                  src={comment.user.image}
                  alt={comment.user.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              </div>

              <div className='flex-grow'>
                <div className='flex space-x-2'>
                  <b>{comment.user?.name}</b>
                  <time className='text-gray-400'>
                    {distanceToNow(comment.created_at)}
                  </time>
                  {isAuthor && (
                    <button
                      className='text-gray-400 hover:text-red-500'
                      onClick={() => onDelete(comment)}
                      aria-label='Close'
                    >
                      x
                    </button>
                  )}
                </div>

                <div>{comment.text}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

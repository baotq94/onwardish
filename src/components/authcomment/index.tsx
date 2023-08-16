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
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div className='mt-20'>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  );
}

function CommentForm({ onSubmit, text, setText }: CommentFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className='flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500'
        rows={2}
        placeholder={
          false ? `What are your thoughts?` : 'Please login to leave a comment'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!false}
      />

      <div className='flex items-center mt-4'>
        {false ? (
          <div className='flex items-center space-x-6'>
            <button className='py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700'>
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
  const user: User = { sub: '', email: '', name: '', picture: '' };
  return (
    <div className='space-y-6 mt-10'>
      {comments &&
        comments.map((comment) => {
          const isAuthor = user && user.sub === comment.user.sub;
          const isAdmin =
            user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

          return (
            <div key={comment.created_at} className='flex space-x-4'>
              <div className='flex-shrink-0'>
                <img
                  src={comment.user.picture}
                  alt={comment.user.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              </div>

              <div className='flex-grow'>
                <div className='flex space-x-2'>
                  <b>{comment.user.name}</b>
                  <time className='text-gray-400'>
                    {distanceToNow(comment.created_at)}
                  </time>
                  {(isAdmin || isAuthor) && (
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

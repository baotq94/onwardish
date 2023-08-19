import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { data: session } = useSession();

  return (
    <form onSubmit={onSubmit} className='bg-opacity-80'>
      <textarea
        className='flex w-full max-h-40 p-3 border border-600 rounded resize-y bg-gray-200 bg-opacity-0 text-900 placeholder-gray-500 focus:outline-none focus:border-gray-600'
        rows={2}
        placeholder={
          session
            ? 'Để lại bình luận cho bài viết này nhé'
            : 'Bạn cần đăng nhập để bình luận bài viết này'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!session}
      />
      <div className='flex items-center justify-end mt-4'>
        {session ? (
          <div className='flex items-center space-x-6'>
            <Link
              href='/api/auth/signout'
              className='py-2 px-4 rounded border border-600 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800'
              style={{
                minWidth: '5rem',
                transition: 'border-color 0.3s, color 0.3s',
              }}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Đăng xuất
            </Link>
            <button
              className='py-2 px-4 rounded border border-600 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800'
              style={{
                minWidth: '5rem',
                transition: 'border-color 0.3s, color 0.3s',
              }}
            >
              Bình luận
            </button>
          </div>
        ) : (
          <Link
            href='/api/auth/signin'
            type='button'
            className='py-2 px-4 rounded border border-600 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800'
            style={{
              minWidth: '5rem',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Đăng nhập
          </Link>
        )}
      </div>
    </form>
  );
}

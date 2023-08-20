import distanceToNow from 'src/lib/dateRelative';
import { CommentWithStringSCreatedAt } from '../../lib/types';
import { useSession } from 'next-auth/react';

type CommentListProps = {
  comments?: CommentWithStringSCreatedAt[];
  onDelete: (comment_id: string) => Promise<void>;
};

export default function CommentList({ comments, onDelete }: CommentListProps) {
  const { data: session } = useSession();

  return (
    <div className='space-y-6 mt-10'>
      {comments &&
        comments.map((comment) => {
          const isAuthor =
            session?.user && session.user.email === comment.user?.email;
          return (
            <div key={comment.created_at} className='flex space-x-4'>
              <div className='flex-shrink-0'>
                <img
                  src={comment.user?.image}
                  alt={comment.user?.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              </div>

              <div className='flex-grow'>
                <div className='flex space-x-2'>
                  <b>{comment.user?.name}</b>
                  <time className='text-gray-400'>
                    {distanceToNow(Number(comment.created_at))}
                  </time>
                  {isAuthor && (
                    <button
                      className='text-gray-400 hover:text-red-500'
                      onClick={() => onDelete(comment.comment_id)}
                      aria-label='Close'
                    >
                      x
                    </button>
                  )}
                </div>

                <div className='break-all'>{comment.text}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

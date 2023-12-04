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
                        session?.user &&
                        session.user.email === comment.user?.email;
                    return (
                        <div
                            key={comment.created_at}
                            className='flex space-x-4'
                        >
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
                                        {distanceToNow(
                                            Number(comment.created_at),
                                        )}
                                    </time>
                                    {isAuthor && (
                                        <button
                                            className='text-gray-400 hover:text-red-500'
                                            onClick={() =>
                                                onDelete(comment.comment_id)
                                            }
                                            aria-label='Close'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 24 24'
                                                fill='currentColor'
                                                aria-hidden='true'
                                                className='w-6 h-6 text-gray-600 hover:opacity-80'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                                                    clipRule='evenodd'
                                                ></path>
                                            </svg>
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

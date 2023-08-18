import type { NextApiRequest, NextApiResponse } from 'next';
import type { Comment, User } from './types';
import clearUrl from './clearUrl';
import prisma from './prisma';

export default async function fetchComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let url;
  if (req.headers.referer) {
    url = clearUrl(req.headers.referer);
  } else {
    throw new Error('Referer header is missing or not a valid string.');
  }

  // // Dummy comment data
  // let rawComments1 = [
  //   {
  //     comment_id: '1',
  //     created_at: Date.now(),
  //     url: 'https://example.com',
  //     text: 'This is the first comment.',
  //     user_id: 'user1',
  //   },
  //   {
  //     comment_id: '2',
  //     created_at: Date.now(),
  //     url: 'https://example.com',
  //     text: 'This is the second comment.',
  //     user_id: 'user1',
  //   },
  //   // ... other dummy comments
  // ];

  try {
    console.log(url);
    // Fetch rawComments using Prisma
    const rawComments = await prisma.comments.findMany({
      where: {
        url,
      },
    });

    console.log(rawComments);

    // Fetch user information based on user_id
    const commentsWithUserInfo = await Promise.all(
      rawComments.map(async (rawComment) => {
        const user = await prisma.users.findUnique({
          where: {
            user_id: rawComment.user_id,
          },
        });
        const comment: Comment = {
          comment_id: rawComment.comment_id,
          created_at: rawComment.created_at,
          url: rawComment.url,
          text: rawComment.text,
          user: user as User, // Type assertion
        };

        console.log(comment);
        return comment;
      })
    );
    console.log(commentsWithUserInfo);
    return res.status(200).json(commentsWithUserInfo);
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' });
  }
}

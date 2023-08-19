import type { NextApiRequest, NextApiResponse } from 'next';
import type { CommentWithStringSCreatedAt, User } from './types';
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

  try {
    // Fetch rawComments using Prisma
    const rawComments = await prisma.comment.findMany({
      where: {
        url,
      },
    });

    // Fetch user information based on user_id
    const commentsWithUserInfo = await Promise.all(
      rawComments.map(async (rawComment) => {
        const user = await prisma.user.findUnique({
          where: {
            email: rawComment.user_email,
          },
        });

        const comment: CommentWithStringSCreatedAt = {
          comment_id: rawComment.comment_id,
          created_at: rawComment.created_at.toString(),
          url: rawComment.url,
          text: rawComment.text,
          user: user as any, // Type assertion
        };

        return comment;
      })
    );

    return res.status(200).json(commentsWithUserInfo);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Unexpected error occurred.' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import type { CommentWithUserId } from './types';
import { nanoid } from 'nanoid';
import clearUrl from './clearUrl';
import { useSession } from 'next-auth/react';
import prisma from './prisma';

export default async function createComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: session } = useSession();
  let url;
  let userName = session?.user?.name;

  console.log(userName);

  if (req.headers.referer) {
    url = clearUrl(req.headers.referer);
  } else {
    throw new Error('Referer header is missing or not a valid string.');
  }

  const { text } = req.body;

  console.log(text);

  if (!text) {
    return res.status(400).json({ message: 'Missing parameter.' });
  }

  if (userName === null || userName === undefined) {
    userName = 'anonymous';
  }

  try {
    const comment: CommentWithUserId = {
      comment_id: nanoid(),
      created_at: Date.now(),
      url,
      text,
      user_id: userName,
    };

    // Use Prisma to create the comment in the database
    const createdComment = await prisma.comments.create({
      data: {
        comment_id: comment.comment_id,
        created_at: comment.created_at,
        url: comment.url,
        text: comment.text,
        user_id: comment.user_id,
      },
    });

    return res.status(200).json(createdComment);
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' });
  }
}

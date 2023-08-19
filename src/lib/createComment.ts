import type { NextApiRequest, NextApiResponse } from 'next';
import type { CommentWithUserEmail } from './types';
import { nanoid } from 'nanoid';
import clearUrl from './clearUrl';
import prisma from './prisma';

export default async function createComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let url;

  if (req.headers.referer) {
    url = clearUrl(req.headers.referer);
  } else {
    throw new Error('Referer header is missing or not a valid string.');
  }

  console.log('req.body', req.body);

  const { text, user_email, user_name } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Missing text parameter.' });
  }

  try {
    const comment: CommentWithUserEmail = {
      comment_id: nanoid(),
      created_at: Date.now(),
      url,
      text,
      user_email: user_email,
      user_name: user_name,
    };

    // Use Prisma to create the comment in the database
    const createdComment = await prisma.comment.create({
      // await prisma.comment.create({
      data: {
        comment_id: comment.comment_id,
        created_at: comment.created_at,
        url: comment.url,
        text: comment.text,
        user_email: comment.user_email,
        user_name: comment.user_name,
      },
    });

    // Convert bigint property to string in a new object
    const serializedComment = {
      ...createdComment,
      created_at: createdComment.created_at.toString(),
    };

    return res.status(200).json(serializedComment);
    // return res.status(200);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: 'Unexpected error occurred.', error });
  }
}

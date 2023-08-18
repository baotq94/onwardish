import type { NextApiRequest, NextApiResponse } from 'next';
import type { User, Comment } from './types';
import clearUrl from './clearUrl';

export default async function deleteComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.headers.referer ? clearUrl(req.headers.referer) : undefined;
  const { comment }: { url: string; comment: Comment } = req.body;
  const { authorization } = req.headers;

  // verify user token
  const user: User = {
    user_id: '1',
    name: 'bao',
    email: 'tranquocbao031094@gmail.com',
    image: '',
  };

  if (!comment || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' });
  }

  try {
    comment.user.email = user.email;
    const isAuthor = user.user_id === comment.user.user_id;

    if (!isAuthor) {
      return res.status(400).json({ message: 'Need authorization.' });
    }

    // delete
    // await redis.lrem(url, 0, JSON.stringify(comment));

    return res.status(200).end();
  } catch (err) {
    return res.status(400);
  }
}

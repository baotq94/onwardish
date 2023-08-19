import type { NextApiRequest, NextApiResponse } from 'next';
import clearUrl from './clearUrl';
import prisma from './prisma';

export default async function deleteComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let url;
  if (req.headers.referer) {
    url = clearUrl(req.headers.referer);
  } else {
    throw new Error('Referer header is missing or not a valid string.');
  }

  const { comment_id } = req.body;

  if (!comment_id) {
    return res.status(400).json({ message: 'Missing comment parameter.' });
  }

  try {
    await prisma.comment.delete({
      where: {
        comment_id,
      },
    });

    return res.status(200).end();
  } catch (err) {
    return res.status(400);
  }
}

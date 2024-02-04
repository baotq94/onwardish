import type { NextApiRequest, NextApiResponse } from 'next';
import clearUrl from './clearUrl';
import prisma from './prisma';

export default async function fetchComment(
    req: NextApiRequest,
    res: NextApiResponse,
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

        return res.status(200).json(rawComments.reverse());
    } catch (error) {
        return res.status(400).json({ message: 'Unexpected error occurred.' });
    }
}

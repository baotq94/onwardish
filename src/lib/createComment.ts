import type { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import clearUrl from './clearUrl';
import prisma from './prisma';

export default async function createComments(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    let url;

    if (req.headers.referer) {
        url = clearUrl(req.headers.referer);
    } else {
        throw new Error('Referer header is missing or not a valid string.');
    }

    const { text, user_id, user } = req.body;

    if (!text) {
        return res.status(400).json({ message: 'Missing text parameter.' });
    }

    try {
        // Use Prisma to create the comment in the database
        const createdComment = await prisma.comment.create({
            // await prisma.comment.create({
            data: {
                id: nanoid(),
                created_at: Date.now().toString(),
                url,
                text,
                user_id,
                user
            },
        });

        // Convert bigint property to string in a new object
        const serializedComment = {
            ...createdComment,
            created_at: createdComment.created_at,
        };

        return res.status(200).json(serializedComment);
        // return res.status(200);
    } catch (error) {
        return res
            .status(400)
            .json({ message: 'Unexpected error occurred.', error });
    }
}

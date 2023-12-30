import type { Comment } from '../lib/types';
import React, { useState } from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const fetcher = (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());

export default function useComments() {
    const [text, setText] = useState('');
    const { data: session } = useSession();

    const { data: comments, mutate } = useSWR<Comment[]>(
        '/api/comment/',
        fetcher,
        { fallbackData: [] },
    );

    const onSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();

            // empty comment is not allowed
            if (text === '') return;

            // XSS prevent
            // any html tag including <script>
            const htmlTagPattern = /<[^>]*>/;
            // any script tag uppercase and lowercase
            const scriptTagPattern = /<\s*script[^>]*>.*?<\s*\/\s*script\s*>/i;

            if (htmlTagPattern.test(text) || scriptTagPattern.test(text)) {
                alert(
                    'Chứa ký tự không cho phép \nNếu bạn là hacker lỏ, tha cho mình đi blog mình viết chơi thôi chưa làm secure layer :(',
                );
                return;
            }

            const user_email = session?.user?.email || '';
            const user_name = session?.user?.name || '';
            const token = '';

            const requestBody = {
                text,
                user_email,
                user_name,
            };

            await fetch('/api/comment/', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
            });
            setText('');
            await mutate();
        } catch (err) {
            console.log('onSubmit', err);
        }
    };

    const onDelete = async (comment_id: string) => {
        const token = '';

        try {
            await fetch('/api/comment/', {
                method: 'DELETE',
                body: JSON.stringify({ comment_id }),
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
            });
            await mutate();
        } catch (err) {
            console.log(err);
        }
    };

    return { text, setText, comments, onSubmit, onDelete };
}

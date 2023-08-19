import type { Comment, CommentWithStringSCreatedAt } from '../lib/types';
import React, { useState } from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function useComments() {
  const [text, setText] = useState('');
  const { data: session } = useSession();

  const { data: comments, mutate } = useSWR<CommentWithStringSCreatedAt[]>(
    '/api/comment/',
    fetcher,
    { fallbackData: [] }
  );

  const onSubmit = async (e: React.FormEvent) => {
    console.log('123');

    let user_email;
    if (
      session?.user?.email == null ||
      session?.user?.email === undefined ||
      session?.user?.email === ''
    ) {
      user_email = 'errorAuthor';
    }

    const requestBody = {
      text,
      user_email: user_email, // Replace with the actual userId value
    };

    console.log(requestBody);

    e.preventDefault();
    const token = '';

    try {
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
      console.log(err);
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

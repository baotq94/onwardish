import type { Comment } from '../lib/types';
import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function useComments() {
  const [text, setText] = useState('');

  const { data: comments, mutate } = useSWR<Comment[]>(
    '/api/comment/comment/',
    fetcher,
    { fallbackData: [] }
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = '';

    console.log(text);

    try {
      await fetch('/api/comment/comment/', {
        method: 'POST',
        body: JSON.stringify({ text }),
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

  const onDelete = async (comment: Comment) => {
    const token = '';

    try {
      await fetch('/api/comment/comment/', {
        method: 'DELETE',
        body: JSON.stringify({ comment }),
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

import useComments from '../../hooks/useComment';
import CommentForm from './form';
import CommentList from './list';

export default function AuthComment() {
    const { text, setText, comments, onSubmit, onDelete } = useComments();

    return (
        <div className='mt-20'>
            <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
            <CommentList comments={comments} onDelete={onDelete} />
        </div>
    );
}

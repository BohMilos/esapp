// src/app/prispevok/[postId]/komentar/[commentId]/page.tsx

export const metadata = { title: 'Komentár príspevku | SnapZoška' };

export default function CommentDetails({ params }: {
        params: {
            postId: string;
            commentId: string;
        }
    }) {

    const { postId } = params
    const { commentId } = params
  
    return (
        <h1>Komentar #{commentId} prispevku #{postId} </h1>
    );
}
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (content: string) => void;
}

export function Comment ({content,onDeleteComment}: CommentProps){
    const [likeAccount, setLikeAccount] = useState(0)
    
    const handleDeleteComment = () => {
        onDeleteComment(content)
    }
    const handleLikeAccount = () => {
        setLikeAccount(likeAccount + 1)
    }

    return (
        <div className={styles.comment}>
            
            <Avatar hasBorder={false} src='https://github.com/diego3g.png' />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                    <strong>Andre Macedo</strong>
                    <time title="20 of Dezember by 08:13" dateTime="2022-05-11 08:13:00">About 1 hour ago</time>
                    </div>

                    <button
                    onClick={handleDeleteComment}
                    title="Delete Comment" >
                    <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
                </div>

                <footer>
                <button  onClick={handleLikeAccount}>
                    <ThumbsUp />
                    Likes <span>{likeAccount}</span>
                </button>
                </footer>
            </div>

        </div>
    )
}
import { useState } from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({author,publishedAt,content}) {
    const [comments, setComments] = useState([
        1,
        2
    ])
    
    const handleCreateNewComment = () => {
        event.preventDefault()
       setComments([...comments, comments.length + 1])
    }
    
    const publishedDateFormatted = format(publishedAt, "d 'of' LLLL 'at' HH:mm ")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        addSuffix: true ,
    })
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src={author.authorUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>
        <div className={styles.content}>
            {content.map(line => {
                if(line.type ==='paragraph'){
                    return <p>{line.content}</p>
                }else if (line.type ==='link'){
                    return <p><a href='#'>{line.content}</a></p>
                }
                
            })}
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="">
            <strong>Type your Feedback</strong>
            <textarea 
                placeholder='Type your comment' 
            />
            <footer>
                <button type='submit'>Comment</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            {comments.map(comment =>{
                return <Comment/>
            })}
            
        </div>
    </article>
  )
}

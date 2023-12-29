import { useState,ChangeEvent,FormEvent} from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    authorUrl: string;  
}

interface PostContent {
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: PostContent[]
}


export function Post({author,publishedAt,content}:PostProps) {
    const [comments, setComments] = useState<Array<string>>([
        'Great post!',
    ])

    const [newCommentChange, setNewCommentChange] = useState<string>('')
    
    const handleCreateNewComment = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

       setComments([...comments, newCommentChange])
       setNewCommentChange('')
    }

    const handleNewCommentChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewCommentChange(event.target.value)
    }
    
    const publishedDateFormatted = format(publishedAt, "d 'of' LLLL 'at' HH:mm ")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        addSuffix: true ,

    })

    const handleNewCommentInvalid = (event:ChangeEvent<HTMLTextAreaElement>)=>{
        event.target.setCustomValidity('')
        event.target.setCustomValidity('You must enter a comment before creating a new comment')
    }

    const deleteComment = (commentToDelete:string) => {
        const commentWithoutDeletedone = comments.filter(comment => {
          return comment != commentToDelete
        })
        setComments(commentWithoutDeletedone)
       
    //ArrayOriginal.filter(arrayOriginal => { arrayOriginal != ItenSelecionado })
    }
  

    const isNewCommentEmpty = newCommentChange.trim().length === 0
    

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
                    return <p key={line.content}>{line.content}</p>
                }else if (line.type ==='link'){
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
                
            })}
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="">
            <strong>Type your Feedback</strong>
            <textarea 
                name='comment'
                placeholder='Type your comment'
                onChange={handleNewCommentChange} 
                value={newCommentChange}
                required
                onInvalid={handleNewCommentInvalid}
            />
            <footer>
                <button type='submit' disabled={isNewCommentEmpty}>Comment</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            {comments.map(comment =>{
                return <Comment key={comment} content={comment} onDeleteComment = {deleteComment}/>
            })}
            
        </div>
    </article>
  )
}

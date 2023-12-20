import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment ({content}){
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

                    <button title="Delete Comment">
                    <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
                </div>

                <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
                </footer>
            </div>

        </div>
    )
}
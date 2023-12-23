import {Post} from './components/Post';
import { Header } from './components/Header';
import {Sidebar} from './components/Sidebar';
import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id:1,
    author:{
      authorUrl: 'http://github.com/andrevitormb.png',
      name: 'Andre Maccedo',
      role: 'Web Developer'
    },
    content: [
      {type : 'paragraph', content: 'Fala galeraa 👋'},
      {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-12-18 21:10:47'),
  },
  {
    id:2,
    author:{
      authorUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web Developer'
    },
    content: [
      {type : 'paragraph', content: 'Fala galeraa 👋'},
      {type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-12-17 20:10:47'),
  }
]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>

      </div>
   
    </div>
  )
}

export default App

import './App.css'
import Login from './components/Login'
import { Context } from './Context'
import { useContext } from 'react'
import Profile from './components/Profile'

function App() {
  const {isLogin, profile} = useContext(Context)
  const a = [
    {id: 1, login: 'vasya', name: 'Vasya', avatar: 'https://placeimg.com/640/480/nature'} ,
    {id: 551, title: 'Nature', image: 'https://placeimg.com/640/480/nature', content: 'Content1..............................'},
    {id: 552, title: 'Arch', image: 'https://placeimg.com/640/480/arch', content: 'Content2..............................'},
    {id: 553, title: 'Tech', image: 'https://placeimg.com/640/480/tech', content: 'Content3..............................'},
    {id: 554, title: 'Sepia', image: 'https://placeimg.com/640/480/sepia', content: 'Content4..............................'}
  ]

  return (
    <div className="App">
      {!isLogin && <Login />}
      {/* {isLogin && <Profile data={profile}/>} */}
      {isLogin && <Profile data={a}/>}
    </div>
  )
}

//если login true показывает News, если false показывает Login

export default App

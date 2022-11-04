import { useContext } from 'react'
import { Context } from '../Context'

export default function Profile(props){
    const {isLogin, unlog} = useContext(Context)

    const arr = props.data.slice(1, props.data.length)
    const news = arr.map(item => {
        return(
            <div key={item.id} className="news">
                <img src={item.image}/>
                <div className="text">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="profile">
            <header>
                <h3>Neto Social</h3>
                <div>
                    <p>Hello, {props.data[0].name}</p>
                    <img src={props.data[0].avatar}/>
                    <button onClick={unlog}>Log out</button>
                </div>
            </header>
            <div className="news-container">
                {news}
            </div>
        </div>
    )
}
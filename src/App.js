import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { data } from './data'
import Card from "./components/Card";

const App = () => {
    const [dateState, setDateState] = useState(new Date())

    //setInterval(() => window.location.reload(), 1000)
    setInterval(() => setDateState(new Date()), 1000)

    return <>
        <h1 className='text-3xl font-bold underline'>Bonjorno Булкастик {dateState.toLocaleTimeString()}</h1>
        <div className='bg-white w-4/5 m-auto rounded-xl shadow-xl mt-10'>
            <Header/>
            <h2>Все товары</h2>
            <div className='container'>
                <div className='list'>
                    {
                        data.map(item => {
                            return <Card
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                imageName={item.imageName}
                                isFavourite={item.isFavourite}
                                isAdded={item.isAdded}
                                description={item.description}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default App

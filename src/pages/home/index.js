import { useState, useEffect } from 'react'
import { API_GET_DATA } from '../../global/constants'
import Edit from "./components/Edit"
import List from "./components/List"
import "./index.css"

async function fetchData() {
    const res = await fetch(API_GET_DATA)
    const data = await res.json()
    console.log(data)
}

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch(API_GET_DATA)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [data])
    return <div className="app">
        <Edit add={setData}/>
        <List listData={data} deleteData={setData}/>
    </div>
}

export default Home
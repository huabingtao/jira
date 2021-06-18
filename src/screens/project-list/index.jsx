import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import { List } from "./list"
import { cleanObject } from "utils"
import qs from 'qs'
console.log('qs:',qs);

export const ProjectListScreen = ()=>{
    const apiUrl = process.env.REACT_APP_API_URL
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (res)=>{
            if(res.ok){
                setList(await res.json())
            }
        })
    },[param])
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async (res)=>{
            if(res.ok){
                setUsers(await res.json())
            }
        })
    },[])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}
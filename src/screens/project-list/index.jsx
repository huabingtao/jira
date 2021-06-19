import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import { List } from "./list"
import { cleanObject, useDebounce, useMount } from "utils"
import qs from 'qs' // qs 用来处理请求入参
export const ProjectListScreen = ()=>{
    const apiUrl = process.env.REACT_APP_API_URL
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debouncedParam = useDebounce(param,2000)
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (res)=>{
            if(res.ok){
                setList(await res.json())
            }
        })
    },[debouncedParam])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async (res)=>{
            if(res.ok){
                setUsers(await res.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}
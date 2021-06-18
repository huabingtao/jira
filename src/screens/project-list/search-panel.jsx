import { useEffect, useState } from "react"

export const SearchPanel = ()=>{

    const [users, setUsers] = useState([])

    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={event=>{
                setParam({
                    ...param,
                    name:event.target.value
                })
            }} />
            <select value={param.personId} onChange={event=>{
                setParam({
                    ...param,
                    persinId: event.target.value
                })
            }}>
                <option value="">负责人</option>
                {users.map(user=> <option value={user.id}>{user.name}</option>)}
            </select>
        </div>
    </form>
}
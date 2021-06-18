import { SearchPanel } from "./search-panel"
import { List } from "./list"
export const ProjectListScreen = ()=>{
    const [list, setList] = useState([])
    useEffect((param,setParam)=>{
        fetch('').then(async (res)=>{
            if(res.ok){
                setList(await res.json())
            }
        })
    },[param])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    return <div>
        <SearchPanel param={param} setParam={setParam}></SearchPanel>
        <List list={list}></List>
    </div>
}
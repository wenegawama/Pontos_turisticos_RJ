import './unica.css'
import Sidebar from "../../components/sidebar/Sidebar"
import UnicaPost from '../../components/unicaPost/UnicaPost'

function Unica() {
    return (
        <div className="unica">
            <UnicaPost />
            <Sidebar />
        </div>
    )
}

export default Unica

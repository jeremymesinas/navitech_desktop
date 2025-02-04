import AdminSidebar from "../components/adminsidebar";
import AdminDiv from "../components/admindiv";
import '../../src/styles/AdminPages.css';

const Dashboard = () => {
    return (
        <div>
            <AdminSidebar />
            <div className="left-indent">
            <h1>Good Evening, Admin!</h1>
            <AdminDiv />
            </div>
        </div>
    )
}

export default Dashboard;
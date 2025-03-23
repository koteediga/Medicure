import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/auth/Login"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import { ToastContainer } from "react-toastify"
import NoMatch from "./components/pages/NoMatch";
import NoAccess from "./components/pages/NoAccess";
import ProductSingle from "./components/pages/ProductSingle";
import Register from "./components/auth/Register";
import SetPassword from "./components/auth/SetPassword";
import Test from "./components/Test";
import AddDoctor from "./components/admin/AddDoctor";
import AddMedicine from "./components/admin/AddMedicine";
import Dashboard from './components/users/Dashboard';
import PlaceOrder from "./components/users/PlaceOrder";
import UserOrders from "./components/users/UserOrders";
import MakeAppointment from "./components/users/MakeAppointment";
import UserAppointment from "./components/users/UserAppointment";
import Disease from "./components/pages/Disease";
import DiseaseSingle from "./components/pages/DiseaseSingle";
import Doctors from "./components/admin/Doctors";
import Medicines from "./components/admin/Medicines";
import Departments from "./components/admin/Departments";
import AddDepartment from "./components/admin/AddDepartment";
import RequiredAuth from "./components/auth/RequiredAuth";

function App() {

    return (
        <>
            <ToastContainer />

            <Routes>
                {/* Static Pages */}
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="medicine-details" element={<ProductSingle />} />

                <Route element={<RequiredAuth />}>
                    {/* Dashboard */}
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* Orders */}
                    <Route path="place-order" element={<PlaceOrder />} />
                    <Route path="my-orders" element={<UserOrders />} />

                    {/* Appointments */}
                    <Route path="make-appointment" element={<MakeAppointment />} />
                    <Route path="my-appointments" element={<UserAppointment />} />
                </Route>

                {/* Disease */}
                <Route path="disease" element={<Disease />} />
                <Route path="disease-single" element={<DiseaseSingle />} />

                
                
                {/* ADMIN URLs */}
                <Route path="add-medicine" element={<AddMedicine />} />
                <Route path="add-doctor" element={<AddDoctor />} />
                <Route path="add-department" element={<AddDepartment />} />
                <Route path="manage-doctor" element={<Doctors />} />
                <Route path="manage-medicine" element={<Medicines />} />
                <Route path="manage-department" element={<Departments />} />

                <Route path="test" element={<Test />} />

                {/* AUTH URLs */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="set-password" element={ <SetPassword /> } />

                {/* Error URLs */}
                <Route path="error-403" element={<NoAccess />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    )
}

export default App

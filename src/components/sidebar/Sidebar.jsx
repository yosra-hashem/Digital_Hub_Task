import "./Sidebar.css"
// import { GrRadialSelected } from "react-icons/gr";

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li>المواليد</li>
            <li>تسجيل واقعة ميلاد</li>
            <li>تسجيل ميلاد (معثور عليه)</li>
            <li>تسجيل ميلاد (ساقط قيد معثور عليه)</li>
            <li>استعلام - تعديل واقعة الميلاد</li>
            <li>طلب تعديل واقعة ميلاد</li>
        </ul>
        <hr id="horizontal"></hr>
    </div>
  )
}

export default Sidebar
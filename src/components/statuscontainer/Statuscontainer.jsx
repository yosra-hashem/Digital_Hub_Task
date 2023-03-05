import Datepicker from "../dateselector/Datepicker";
import { Numbers } from "../numberscontainer/Numbers";
import { Rate } from "../ratecontainer/Rate";
import Statusselector from "../statusselector/Statusselector";
import "./Statuscontainer.css";
function Statuscontainer() {
  return (
    <div className="status">

      <div>
        <Statusselector/>
        <Datepicker/>
      </div>

      <div className="statusWrapper">
      <Numbers
          number="400"
          para="طلبات تعديل مقدمة"
          imgSrc="https://cdn0.iconfinder.com/data/icons/modifiers-add-on-2-flat/48/Mod_Add-On_2-19-512.png"
        />
        <Numbers
          number="20"
          para="عدد الوفيات المدخلين"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Disc_Plain_grey.svg/460px-Disc_Plain_grey.svg.png"
        />
        <Numbers
          number="10,918"
          para="عدد المواليد المدخلين"
          imgSrc="http://www.clker.com/cliparts/3/I/d/S/s/W/green-circle-md.png"
        />
      </div>


      <div className="rateWrapper">
        <Rate header="النسبة بين الذكور والإناث للوفيات"/>
        <hr></hr>
        <Rate header="النسبة بين الذكور والإناث للمواليد"/>
      </div>
    </div>
  );
}

export default Statuscontainer;

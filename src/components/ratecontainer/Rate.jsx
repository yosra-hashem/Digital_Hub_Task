import "./Rate.css";
import {ReactComponent as Male} from "../../assets/male.svg";
import {ReactComponent as FeMale} from "../../assets/female.svg";

export const Rate = (props) => {
  return (
    <div className="rate">
        <h2>{props.header}</h2>
        <div className="maleAndFemale">
            <div className="male">
                <h3>ذكور</h3>
                <Male />
                <p>12%</p>
            </div>
            <div className="female">
                <h3>إناث</h3>
                <FeMale />
                <p>88%</p>
            </div>
        </div>
    </div>
  )
}

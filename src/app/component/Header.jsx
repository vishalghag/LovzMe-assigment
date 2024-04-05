import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPersonCircleQuestion,
  faSterlingSign,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-[20px]">
      <div className="flex flex-row">
        <FontAwesomeIcon
          icon={faSterlingSign}
          size="1x"
          style={{ width: "60px", marginLeft: "30px", zIndex: "200" }}
        />
        <span
          style={{
            background: "white",
            borderRadius: "10px",
            borderLeftRadius: "none",
            height: "30px",
            padding: "3px",
            marginLeft: "-10px",
            marginTop: "30px",
          }}
          className=" "
        >
          <strong>BSNUSD</strong> $5990900
        </span>
      </div>

      <div className=" flex flex-row mr-[30px]">
        <span className="mt-[30px] bg-white h-[40px] rounded-md p-2 m-2 w-auto mr-[-20px]">
          <strong>9:00</strong> 20m
        </span>
        <FontAwesomeIcon
          icon={faClock}
          size="1x"
          style={{ width: "60px", margin: "16px" }}
        />
        <FontAwesomeIcon
          icon={faTrophy}
          size="1x"
          style={{ width: "60px", margin: "16px" }}
        />
        <FontAwesomeIcon
          icon={faPersonCircleQuestion}
          size="1x"
          style={{ width: "60px", margin: "16px" }}
        />
      </div>
    </div>
  );
};

export default Header;

import {ThreeCircles} from "react-loader-spinner";
import "../CSS/LoadingIndicator.css";

const LoadingIndicator = () => {
    return <div className="loading-indicator">
        <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#61dafb"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
};

export default LoadingIndicator;

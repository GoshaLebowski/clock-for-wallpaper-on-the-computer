import './index.css';
import {Clock} from "./components/";
import {ClockData} from "./utils/object";

function App() {
    return (
        <>
            <Clock clock={ClockData}/>
        </>
    );
}

export default App;

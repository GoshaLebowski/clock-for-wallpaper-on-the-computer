import './index.css'
import {ClockData} from "./utils/object";
import {Clock} from "./components/clock";

function App() {
    return (
        <>
            <Clock clock={ClockData}/>
        </>
    );
}

export default App;

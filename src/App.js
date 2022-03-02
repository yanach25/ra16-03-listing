import Listing from "./Listing";
import entry from "./data/entry";

function App() {
  return (
    <div className="App">
        <Listing items={entry.filter((item) => !item.error_messages)}/>
    </div>
  );
}

export default App;

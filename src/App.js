import "./App.css";
import YtEmbed from "./components/ytEmbed/index";

const App = () => {
  return (
    <div className="app">
      <div>
        <span>
          Lost Ark new class : Artist <br />
          Release Soon
          <p>Source : Trust me bro</p>
        </span>
      </div>
      <YtEmbed embedId="wl0q0xi10Ng" />
    </div>
  );
};

export default App;

import "./App.css";
import YtEmbed from "./components/ytEmbed/index";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const App = () => {
  return (
    <>
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
      <LinkPreview
        url="https://www.youtube.com/watch?v=wl0q0xi10Ng"
        width="400px"
      />
      ;
    </>
  );
};

export default App;

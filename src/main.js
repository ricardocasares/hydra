import "./style.css";
import Hydra from "hydra-synth";

new Hydra({ detectAudio: true });

if (import.meta.hot) {
  import.meta.hot.accept("./song");
}

await import("./song");

import "./style.css";
import Hydra from "hydra-synth";

new Hydra({ detectAudio: true });

if (import.meta.hot) {
  try {
    import.meta.hot.accept("./song");
  } catch (e) {
    console.error(e);
  }
}

await import("./song");

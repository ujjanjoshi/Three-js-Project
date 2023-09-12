import { Home } from "./pages/home";
import { CanvasModel } from "./canvas";
import { Customize } from "./pages/Customize";
function App() {
  return (
    <main className="app-transiton-all ease-in">
      <Home/>
      <Customize/>
      <CanvasModel/>
    </main>
  )
}

export default App

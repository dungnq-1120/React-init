import AppRoutes from "./AppRoutes";
import ProcessLoading from "./components/organisms/loading";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ProcessLoading />
    </div>
  );
}

export default App;

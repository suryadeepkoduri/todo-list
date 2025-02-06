import Page from "./app/dashboard/page";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
        <AddTodo />
        <Todos />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

import ProjectSidebar from "./components/ProjectSidebar";
import DataContextProvider from "./store/DataContext";
import Content from "./components/Content";

function App() {
  return (
    <DataContextProvider>
      <main className="h-screen mt-8 flex gap-8">
        <ProjectSidebar />
        <Content />
      </main>
    </DataContextProvider>
  );
}

export default App;

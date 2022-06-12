import "./App.css";
import Posts from "./components/Posts";
import { postRepository } from './model/post/postRepository';


function App() {
  return (
    <main className="App">
      <Posts postRepository={postRepository} />
    </main>
  );
}

export default App;

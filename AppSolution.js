import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>Home Page</div>
  );
}

function About() {
  return (
    <div>About Page</div>
  );
}

function NotFound() {
  return (
    <div>404 Not Found</div>
  );
}

function User(){
  let {userId} = useParams();
  return (
    <div>User {userId}</div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
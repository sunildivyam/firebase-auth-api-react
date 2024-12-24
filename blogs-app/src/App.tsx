import { useEffect, useState } from 'react'
import './App.css'
import { Blog, IBlog } from './Blog';
import { login, logout } from './Auth';
import axios from 'axios';

function App() {
  const [blogs, setBlogs] = useState<Array<IBlog>>([]);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');

  useEffect(() => {
    token && getBlogs();
  }, [token]);

  function getBlogs() {
    const url = 'http://localhost:3000/blogs';
    axios.get<Array<IBlog>>(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setBlogs(() => res.data || []);
    })
  }

  function signIn() {
    login().then(accessToken => {
      setToken(() => accessToken);
      sessionStorage.setItem('token', accessToken);
    });
  }

  function signOut() {
    logout().then(() => {
      setToken(() => '');
      sessionStorage.setItem('token', '');
    });
  }

  return (<>
    <h1>My Blogs:</h1>
    {!token && <button onClick={() => signIn()}>Sign In</button>}
    {token && <button onClick={() => signOut()}>Sign Out</button>}

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {
        token && blogs.map(blog => <Blog key={blog.id} {...blog}></Blog>)
      }
    </div>
  </>)
}

export default App

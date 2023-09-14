
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import { useState } from 'react';

function App() {
  
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setRedingTime] = useState(0);

  const handleAddToBookmarks = blog => {

        const newBookmarks = [...bookmarks,blog]
        setBookmarks(newBookmarks)

  }

  const handleMarkAsRead = time => {

        setRedingTime(readingTime + time);


  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>

          <Blogs handleAddToBookmarks = {handleAddToBookmarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks = {bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App

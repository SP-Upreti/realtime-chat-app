import React from 'react'
import Sidebar from "../../components/sidebar/sidebar"
import Chatbox from '../../components/chatbox/chatbox'

export default function Home() {
  return (
    <main>
      <div className="App flex ">
        <Sidebar />
        <Chatbox />
      </div>
    </main>
  )
}

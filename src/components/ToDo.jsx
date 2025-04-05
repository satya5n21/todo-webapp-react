import React, { useState } from 'react'

export default function ToDo() {
  const [inputValue, setInputValue] = useState('');

  return <div className='w-2/3 bg-red-500 flex flex-col items-center justify-between h-full'>
    <header className="border border-b-2 border-amber-300 rounded-2xl py-3 px-6 text-center text-2xl">
      <h1>Todo List</h1>
    </header>
    <section className="##form">
      <form>
        <div>
          <input type="text" className="##todo-input" autoComplete="off"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <div>
          <button type="submit"
            className="##todo-button"
          >Add Task
          </button>
        </div>
      </form>
    </section>
  </div>;
}

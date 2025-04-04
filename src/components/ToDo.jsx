import React from 'react'

export default function ToDo() {
  return <div>
    <header className="border border-b-2 border-amber-300 rounded-2xl py-3 px-6 text-center text-2xl">
      <h1>Todo List</h1>
    </header>
    <section className="##form">
      <form>
        <div>
          <input type="text" className="##todo-input" autoComplete="off"
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

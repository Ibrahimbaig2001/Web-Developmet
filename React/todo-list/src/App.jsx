
import React, { useState, useEffect } from 'react'
import Entertask from './components/Entertask'

const App = () => {

  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tasks')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  // Mark task as completed or pending
  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Add a new task
  const addTask = (task) => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        text: task.trim(),
        completed: false
      }
    ]);
  };

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 px-4 py-10">

      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl shadow-lg shadow-purple-300 mb-4">
            <span className="text-3xl">✓</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
            My <span className="text-purple-600">To-Do List</span>
          </h1>

          <p className="text-gray-500 mt-3 text-base">
            Organize your day, one task at a time.
          </p>
        </header>

        {/* Main Card */}
        <main className="bg-white rounded-3xl shadow-xl shadow-purple-100 p-5 sm:p-8 border border-purple-100">

          {/* Task Input */}
          <Entertask onAddTask={addTask} />

          {/* Task Statistics */}
          <div className="flex items-center justify-between mt-8 mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Your Tasks
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Stay focused and productive.
              </p>
            </div>

            <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl text-sm font-semibold">
              {completedTasks}/{tasks.length} Completed
            </div>
          </div>

          {/* Progress Bar */}
          {tasks.length > 0 && (
            <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(completedTasks / tasks.length) * 100}%`
                }}
              />
            </div>
          )}

          {/* Task List */}
          <ul className="space-y-3">

            {tasks.length === 0 ? (

              <li className="text-center py-12">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-lg font-semibold text-gray-700">
                  No tasks yet!
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Add your first task and get started.
                </p>
              </li>

            ) : (

              tasks.map((task, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 rounded-2xl p-4 transition-all duration-200 group"
                >

                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                    className="w-5 h-5 accent-purple-600 cursor-pointer shrink-0"
                  />

                  {/* Task Text */}
                  <span
                    className={`flex-1 text-sm sm:text-base font-medium break-words transition-all ${
                      task.completed
                        ? 'line-through text-gray-400'
                        : 'text-gray-700'
                    }`}
                  >
                    {task.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shrink-0"
                  >
                    Delete
                  </button>

                </li>

              ))

            )}

          </ul>

          {/* Footer */}
          {tasks.length > 0 && (
            <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-center text-sm">
              <span className="text-gray-400">
                {tasks.length - completedTasks} tasks remaining
              </span>

              <span className="text-purple-600 font-semibold">
                Keep going! 🚀
              </span>
            </div>
          )}

        </main>

        {/* Bottom Footer */}
        <footer className="text-center mt-8 text-gray-400 text-sm">
          Built with React & Tailwind CSS
        </footer>

      </div>
    </div>
  )
}

export default App

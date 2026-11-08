
import React, { useState } from 'react'

const Entertask = ({ onAddTask }) => {

  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() === '') return;

    onAddTask(taskText);
    setTaskText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">

      <input
        type="text"
        placeholder="What do you need to do?"
        value={taskText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="flex-1 min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
      />

      <button
        onClick={handleAddTask}
        className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-200 transition-all duration-200"
      >
        + Add Task
      </button>

    </div>
  )
}

export default Entertask

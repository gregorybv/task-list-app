import React, { useState } from 'react'
import { GiHornedHelm } from 'react-icons/gi'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  // добавляем задачи
  const handleSubmit = (e) => {
    e.preventDefault()
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTasks([...tasks, addTask])
    setInput('')
  }

  // удаляем задания
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
    setTasks(filteredTasks)
    // console.log('task deleted')
  }

  // переключить выполненное задание
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => (
        task.id === id ? { ...task, completed: !task.completed } : task
      ))
    )
  }

  // создаем переменные
  const date = new Date()
  // console.log(date)
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]


  return (
    <div className='app'>
      <div className="container">
        <h1><GiHornedHelm /> Powerlist</h1>
        {/* Создаем текущую дату */}
        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()}</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <AiOutlinePlus className='icon' />
            <input
              value={input}
              onChange={e => setInput(e.target.value)} //target value - текущее значение
              placeholder='Введите задачу'
              type="text" />
          </div>
        </form>

        <div>
          {tasks.map(task => (
            <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} onDoubleClick={() => toggleComplete(task.id)} >
              <p>{task.text} </p>
              <AiOutlineClose onClick={() => deleteTask(task.id)} className='icon' />
            </div>
          ))}
        </div>
            {/* создаём счетчик задач */}
          <p className='length'>{(tasks < 1) ? 'У вас нет задач' : `Задач: ${tasks.length}`}</p>
      </div>
    </div>
  );
}

export default App;
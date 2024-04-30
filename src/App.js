import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [items, setItems] = useState('')
  const [list, setList] = useState([])

  const notifyWarn = () =>
    toast.warn('Please Provide Value!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })
  const notifySuccess = () =>
    toast.success('Item Successfully Added!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })
  const notifyDelete = () =>
    toast.error('Item Deleted Successfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })
  const notifyCheck = () =>
    toast.info('Item Checked!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })
  const notifyUncheck = () =>
    toast.info('Item Unchecked!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })

  const handleInput = (e) => {
    setItems(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (items.trim() !== '') {
      setList([...list, { name: items.trim(), checked: false }])
      notifySuccess()
      setItems('')
    } else {
      notifyWarn()
    }
  }

  const handleCheckboxChange = (index) => {
    const updatedList = [...list]
    const isChecked = updatedList[index].checked
    updatedList[index].checked = !isChecked
    setList(updatedList)
    if (isChecked) {
      notifyUncheck()
    } else {
      notifyCheck()
    }
  }

  const handleDelete = (index) => {
    const updatedList = [...list]
    updatedList.splice(index, 1)
    setList(updatedList)
    notifyDelete()
  }

  return (
    <>
      <section className='container'>
        <form onSubmit={handleSubmit}>
          <h4>grocery bud</h4>
          <div className='control'>
            <input
              type='text'
              className='input'
              value={items}
              onChange={handleInput}
            />
            <button className='btn' type='submit'>
              add item
            </button>
            <ToastContainer />
          </div>
        </form>

        <section className='cart'>
          {list.map((item, index) => (
            <div className='list' key={index}>
              <div className='item-cont'>
                <input
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <h5
                  style={{
                    textDecoration: item.checked ? 'line-through' : 'none',
                  }}
                >
                  {item.name}
                </h5>
              </div>
              <button className='button' onClick={() => handleDelete(index)}>
                delete
              </button>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default App
// import React, { useState, useEffect } from 'react'

// function Alert({ message, onClose }) {
//   const [countdown, setCountdown] = useState(5)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prevCountdown) => prevCountdown - 1)
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   useEffect(() => {
//     if (countdown === 0) {
//       onClose()
//     }
//   }, [countdown, onClose])

//   return (
//     <div className='alert'>
//       <p>{message}</p>
//       <p style={{ fontWeight: '200' }}>Auto-closing in {countdown} seconds</p>
//     </div>
//   )
// }

// function App() {
//   const [items, setItems] = useState('')
//   const [list, setList] = useState([])
//   const [alertMessage, setAlertMessage] = useState('')

//   const handleInput = (e) => {
//     setItems(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (items.trim() === '') {
//       setAlertMessage('Please provide a value.')
//       setTimeout(() => {
//         setAlertMessage('')
//       }, 5000)
//       return
//     }
//     setList([...list, { name: items.trim(), checked: false }])
//     setItems('')
//     setAlertMessage('Item successfully added.')
//     setTimeout(() => {
//       setAlertMessage('')
//     }, 5000)
//   }

//   const handleCheckboxChange = (index) => {
//     const updatedList = [...list]
//     updatedList[index].checked = !updatedList[index].checked
//     setList(updatedList)
//   }

//   const handleDelete = (index) => {
//     const updatedList = [...list]
//     updatedList.splice(index, 1)
//     setList(updatedList)
//     setAlertMessage('Item successfully deleted.')
//     setTimeout(() => {
//       setAlertMessage('')
//     }, 5000)
//   }

//   return (
//     <div>
//       {alertMessage && (
//         <div className='alert-container'>
//           <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
//         </div>
//       )}

//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <h4>Grocery Bud</h4>
//           <div className='control'>
//             <input
//               type='text'
//               className='input'
//               value={items}
//               onChange={handleInput}
//             />
//             <button className='btn' type='submit'>
//               Add Item
//             </button>
//           </div>
//         </form>

//         <section className='cart'>
//           {list.map((item, index) => (
//             <div className='list' key={index}>
//               <div className='item-cont'>
//                 <input
//                   type='checkbox'
//                   checked={item.checked}
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//                 <h5
//                   style={{
//                     textDecoration: item.checked ? 'line-through' : 'none',
//                   }}
//                 >
//                   {item.name}
//                 </h5>
//               </div>
//               <button className='button' onClick={() => handleDelete(index)}>
//                 Delete
//               </button>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {
//   const [items, setItems] = useState('')
//   const [list, setList] = useState([])

//   const handleInput = (e) => {
//     setItems(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (items.trim() === '') {
//       alert('Please provide a value.')
//       return
//     }
//     setList([...list, { name: items.trim(), checked: false }])
//     setItems('')
//     alert('Item successfully added.')
//   }

//   const handleCheckboxChange = (index) => {
//     const updatedList = [...list]
//     updatedList[index].checked = !updatedList[index].checked
//     setList(updatedList)
//   }

//   const handleDelete = (index) => {
//     const updatedList = [...list]
//     updatedList.splice(index, 1)
//     setList(updatedList)
//     alert('Item successfully deleted.')
//   }

//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <h4>Grocery Bud</h4>
//         <div className='control'>
//           <input
//             type='text'
//             className='input'
//             value={items}
//             onChange={handleInput}
//           />
//           <button className='btn' type='submit'>
//             Add Item
//           </button>
//         </div>
//       </form>

//       <section className='cart'>
//         {list.map((item, index) => (
//           <div className='list' key={index}>
//             <div className='item-cont'>
//               <input
//                 type='checkbox'
//                 checked={item.checked}
//                 onChange={() => handleCheckboxChange(index)}
//               />
//               <h5
//                 style={{
//                   textDecoration: item.checked ? 'line-through' : 'none',
//                 }}
//               >
//                 {item.name}
//               </h5>
//             </div>
//             <button className='button' onClick={() => handleDelete(index)}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Alert from './Alert'

// function App() {
//   const [items, setItems] = useState('')
//   const [list, setList] = useState([])
//   const [alertMessage, setAlertMessage] = useState('')

//   const handleInput = (e) => {
//     setItems(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (items.trim() === '') {
//       setAlertMessage('Please provide a value.')
//       setTimeout(() => {
//         setAlertMessage('')
//       }, 5000)
//       return
//     }
//     setList([...list, { name: items.trim(), checked: false }])
//     setItems('')
//     setAlertMessage('Item successfully added.')
//     setTimeout(() => {
//       setAlertMessage('')
//     }, 5000)
//   }

//   const handleCheckboxChange = (index) => {
//     const updatedList = [...list]
//     updatedList[index].checked = !updatedList[index].checked
//     setList(updatedList)
//   }

//   const handleDelete = (index) => {
//     const updatedList = [...list]
//     updatedList.splice(index, 1)
//     setList(updatedList)
//     setAlertMessage('Item successfully deleted.')
//     setTimeout(() => {
//       setAlertMessage('')
//     }, 5000)
//   }

//   return (
//     <div>
//       {alertMessage && (
//         <div className='alert-container'>
//           <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
//         </div>
//       )}

//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <h4>Grocery Bud</h4>
//           <div className='control'>
//             <input
//               type='text'
//               className='input'
//               value={items}
//               onChange={handleInput}
//             />
//             <button className='btn' type='submit'>
//               Add Item
//             </button>
//           </div>
//         </form>

//         <section className='cart'>
//           {list.map((item, index) => (
//             <div className='list' key={index}>
//               <div className='item-cont'>
//                 <input
//                   type='checkbox'
//                   checked={item.checked}
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//                 <h5
//                   style={{
//                     textDecoration: item.checked ? 'line-through' : 'none',
//                   }}
//                 >
//                   {item.name}
//                 </h5>
//               </div>
//               <button className='button' onClick={() => handleDelete(index)}>
//                 Delete
//               </button>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   )
// }

// export default App

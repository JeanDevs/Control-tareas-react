import { useState } from "react"

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState(
    [
      {
        id: '1',
        title: 'comida',
        completed: false},
        {
          id: '2',
          title: 'futbol',
          completed: false},
          {
            id: '3',
            title: 'estudiar',
            completed: false}])

  const handleChange = (event) => {
    // console.log('')
    // console.log(event.target.value)
    const value = event.target.value
    setInput(value)
  }

  const handleSubmit = (event) => {
    //evitar que el formulario actualice la pag.
    event.preventDefault();
    // event.target.input[1].value = 'ayynnn'
    // console.log(event.target);

    // crearemos un id random con una libreria nativa del navegador
    const newIds = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }
    // console.log(newIds);

    //esto me trae a mi arreglo tasks y lo concateno con mi nuevo objeto que estoy creando.
    setTasks([...tasks, newIds]);

    //borramos el valor que se queda en el value del input (2do paso en la linea 60)
    setInput('')

  }

  return (
    <>
      <main>
        <h1>TODO APP</h1>

        {input}
        {/* jason stringify: para mostrar el objeto en un string.
        no puedo imprimir un array de objetos directamente
        {JSON.stringify(tasks)} */}
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="¿Qué deseas hacer hoy?" required onChange={handleChange} value={input}/>
          {/* para actualizar el input, debemos asociar este input con la variable input( y asi termina los 2 pasos) */}

          <input type="submit" value='ADD'/>
          
        </form>

        <section>
          <ul>
            {tasks.map(task=>{
              return (
                //este key es un optimizador, debes darle este identificador unico solo a la raiz (padre de todos).
                <li key={task.id} style={{listStyle: 'none', backgroundColor: 'red'}}>
                  
                  <input type="checkbox" /> {task.title}

                  <button type="button">❌</button>
                </li>
              )

            })}
            


          </ul>
        </section>

      </main>
      <h1>Bienvenidos al repaso</h1>

      <p>Estados:</p>
    </>
  )
}

export default App

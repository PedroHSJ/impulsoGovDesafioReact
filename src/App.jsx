import { CardComponent } from "./components/Card"
import './App.css';
import { useEffect } from "react";
import { useAluno } from "./hooks/useAluno";

function App() {
  const {
    alunos,
    getAlunos,
    loading
} = useAluno();

useEffect(()=>{
  getAlunos();
},[])

  return (
   <CardComponent data={alunos}/>
  )
}

export default App

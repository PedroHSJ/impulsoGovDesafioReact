import { useState } from 'react';
import {getAluno} from '../services/api/AlunoApi';

export function useAluno(){
    const [loading, setLoading] = useState(false);
    const [alunos, setAlunos] = useState(null);

    const compararNome = (a, b) => {
        const nomeA = a.nome.toUpperCase(); // Convertendo para letras maiúsculas
        const nomeB = b.nome.toUpperCase();
      
        if (nomeA < nomeB) {
          return -1;
        }
        if (nomeA > nomeB) {
          return 1;
        }
        return 0;
    }

    const getAlunos = () => {
        setLoading(true);
        try{
            setLoading(true);
            const response = getAluno();
            const alunosOrdenados = response.sort(compararNome);
            setAlunos(alunosOrdenados);
        }catch(err){
            console.log("erro getAluno; " + err);
        }finally{
            setLoading(false);
        }
    }


    return {loading, alunos, getAlunos}
}
import { useState } from 'react';
import {getAluno} from '../services/api/AlunoApi';

export function useAluno(){
    const [loading, setLoading] = useState(false);
    const [alunos, setAlunos] = useState(null);

   

    const getAlunos = () => {
        setLoading(true);
        try{
            setLoading(true);
            const response = getAluno();
            console.log(response)
            setAlunos(response);
        }catch(err){
            console.log("erro getAluno; " + err);
        }finally{
            setLoading(false);
        }
    }


    return {loading, alunos, getAlunos}
}
import {Card} from './style';
import { useAluno } from '../../hooks/useAluno';
import { useEffect } from 'react';

export function CardComponent(){
    const {
        alunos,
        getAlunos,
        loading
    } = useAluno();

    useEffect(()=>{
        getAlunos();
    },[])

    return(
        <Card>
            {alunos &&
            alunos.map(aluno => {
                
                let color = aluno.nota >= 50 ? '#0f0' : '#f00';             
                return (
                <span 
                style={{color: color}}>
                    {aluno.nome}
                </span>
                )
               
            
            })
            }
            
        </Card>
    )
}
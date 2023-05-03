import {Card} from './style';
import { useAluno } from '../../hooks/useAluno';
import { useEffect } from 'react';
import compararNome from '../../utils/compararNome';

export function CardComponent({data}){
    
    const dataForJSON = JSON.parse(data);
    const dataForJSONOrdenado = dataForJSON.sort(compararNome);

    return(
        <Card>  
            {dataForJSONOrdenado &&
            dataForJSONOrdenado.map(aluno => {
                
                let color = aluno.nota >= 50 ? '#0f0' : '#f00';             
                return (
                <span key={aluno.nome}
                style={{color: color}}>
                    {aluno.nome}
                </span>
                )
               
            
            })
            }
            
        </Card>
    )
}
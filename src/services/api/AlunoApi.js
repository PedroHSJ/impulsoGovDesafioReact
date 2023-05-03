export function getAluno(){
    const json = 
        [
        { nome : "José Alves Dos Santos", nota : 37 },
        { nome : "Anderson Da Silva", nota : 49 }, 
        { nome : "Maria Ferreira", nota : 68 },
        { nome : "Ana Oliveira", nota : 87 } 
      ];

    
    return JSON.stringify(json);
}

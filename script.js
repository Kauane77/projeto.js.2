let students = [
    {
       name:"Rafael",
       n1: 7,
       n2: 10,
    },
    {
        name:"Gustavo",
        n1: 4,
        n2: 6,
    },
    {
        name:"Henrique",
        n1: 7,
        n2: 9,
    }
]

function media(n1, n2){
    return(((n1+n2)/2).toFixed(2))
}

function mediaFinal(student){
    if(media(student.n1, student.n2) >= 7){
      return `
      A média do(a) aluno(a) ${student.name} é de: ${media(student.n1, student.n2)}. 
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
    } else {
       return `
       A média do(a) aluno(a) ${student.name} é de: ${((student.n1 + student.n2)/2)}.
       Não foi dessa vez, ${student.name}! Tente novamente!`
    }
  
  } 
  
  for(let student of students){
    let studantMessage = mediaFinal(student)
    alert(studantMessage)
  }






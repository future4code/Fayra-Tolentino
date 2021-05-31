# Aula 47- Exercícios banco de dados SQL Knex e Query Builder - 🎟 Sistema de Cinema

### 🎟 Exercício 1-   Utilize os *raws* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

***a. Explique como é a resposta que temos quando usamos o `raw`.*** 

A resposta ao utilizar o raw é dada com um objeto RawDataPacket, por ser uma biblioteca de baixo nível. Para converter essa saída usa-se **console.log(JSON.stringify(result))**

***b. Faça uma função que busque um ator pelo nome;***

```sql
const getActorByName =async(name:string):Promise<any> =>{
    const result =await connection.raw(`
    SELECT * FROM Actor_Table WHERE name = '${name}'
    `)
    console.log(result)
    console.log
    return result [0] [0]
}
app.get("/users/:name",async(req:Request, res:Response)=>{
    try{
        const name = req.params.name
        console.log(name)
        console.log(await getActorByName(name))
        res.end()
    }catch (error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
```

***c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.***

```sql
const groupByGender = async(gender:string):Promise<any>=>{
    const  result =await connection.raw(`
        SELECT COUNT(*), gender from Actor_Table GROUP BY gender
    `)
    return result [0] [0]
}

app.get("/users/group-by-gender",async(req:Request, res:Response)=>{
    try{
        const gender = req.params.gender
        console.log(await groupByGender(gender))
        res.end()
    }catch(error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
    
})
```

### 🎟 Exercício 2-   Utilize os *queries builders* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.

***a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão***

```sql
app.put("/users/update-salary/:id",async(req:Request,res:Response)=>{
    try{
        
        const actorData ={
            salary:req.body.salary
        }
        await connection('Actor_Table').update(actorData).where({id:req.params.id})
        res.send(actorData)
    }catch(error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
    
})
```

***b. Uma função que receba um id e delete um ator da tabela***

***c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`***
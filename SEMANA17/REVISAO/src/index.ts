import app from './app'
import createCharacter from './endpoints/createCharacter'
import deleteCharacters from './endpoints/deleteCharacteres'
import getAllCharacteres from './endpoints/getAllCharacteres'

app.get('/characters',getAllCharacteres)
app.put('/characters',createCharacter)
app.delete('/characters/:id',deleteCharacters)
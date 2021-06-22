import app from './app'
import editUser from './endpoints/editUser'
import createUser from './endpoints/editUser'

app.post('user/signup',createUser)
app.put('user/edit/:id', editUser)


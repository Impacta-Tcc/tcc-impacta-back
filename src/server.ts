import { app } from './app'

app.listen({
  host: '0.0.0.0',
  port: '7500'
}).then(() => {
  console.log('Server listening on port 7500')
})
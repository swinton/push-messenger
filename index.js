require('dotenv').config()

const http = require('http')
const webhooks = require('@octokit/webhooks')

const app = new webhooks({
  secret: process.env.WEBHOOK_SECRET
})

app.on('push', ({id, name, payload}) => {
  console.log(name, 'event received')
})

http.createServer(app.middleware).listen(process.env.PORT || 3000)

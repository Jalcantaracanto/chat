const { addMessage, getMessages } = require('../controllers/message.controller')

module.exports = (app) => {
    app.post('/message', addMessage)
    app.get('/message/:chatId', getMessages)
}

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('البوت يعمل بنجاح!');
});

// مسار التحقق من فيسبوك (Webhook Verification)
app.get('/webhook', (req, res) => {
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  if (mode && token === 'MY_VERIFY_TOKEN') {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(process.env.PORT || 3000, () => console.log('Server is live!'));

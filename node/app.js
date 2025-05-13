// started project on 5/8/25 -- made sure project would launch locally
// added code for form submission on 5/9/25
// made sure its all working on 5/13/25
console.log('Hello World from Nodejs');

const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/submit-form', (req, res) => {
  console.log('Form submitted:');
  console.log('Name:', req.body.txtName);
  console.log('Email:', req.body.txtEmail);
  console.log('Phone:', req.body.txtPhone);
  console.log('Message:', req.body.txtMsg);
  
  res.send(`
    <script>
      alert('Thank you for contacting Blitz! We will get back asap!!');
      window.location.href = '/#contact';
    </script>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
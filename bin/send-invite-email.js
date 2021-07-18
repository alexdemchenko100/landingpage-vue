const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const sendgrid = require('@sendgrid/mail');

const config = require('../config');

const inviteEmail = fs.readFileSync(path.resolve(__dirname, '../lib/email/invite.html'), 'utf8'); // sync fetch of invite_email.html
sendgrid.setApiKey(process.env.SENDGRID_KEY);

const sendList = [
  'kwaku@alphamiddle.com', // TODO: invite emails
  'watsonbev@hotmail.com',
  'globalimprints@gmail.com',
  'lindsay@authentic-ventures.com',
];

Promise.mapSeries(
  sendList,
  (to) =>
    Promise.resolve()
      .then(() =>
        sendgrid.send({
          to,
          from: 'Lindsay Lee <lindasy@authentic-ventures.com>',
          subject: 'You’re invited: Join Authentic Ventures\' Network',
          html: inviteEmail
        })
      )
      .then(() => Promise.resolve(true))
      .catch((err) => {
        console.error(err.toString());
        Promise.resolve(false);
      })
)
.then((results) => {
  let totalSent = 0;
  console.log(results);
  results.forEach((r) => {
    if (r) totalSent++;
  });
  console.log(`${totalSent} of ${results.length} emails sent`);
  process.exit();
})
.catch((err) => {
  console.log(err);
  process.exit(1);
});

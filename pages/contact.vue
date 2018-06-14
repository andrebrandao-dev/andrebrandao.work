<template>
  <div class="container">
    <h1>Contato</h1>

    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-group-label"for="name">Name</label>
        <input class="form-group-control" id="name" type="text" placeholder="Name" v-model="form.name">
      </div>
      <div class="form-group">
        <label class="form-group-label"for="email">Email</label>
        <input class="form-group-control" id="email" type="text" placeholder="Email" v-model="form.email">
      </div>
      <div class="form-group">
        <label class="form-group-label"for="message">Message</label>
        <input class="form-group-control" id="message" type="text" placeholder="Message" v-model="form.message">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" name="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// import nodemailer from 'nodemailer'

export default {
  name: 'page-contact',
  data() {
    return {
      form: {
        name: '', email: '', message: ''
      }
    }
  },
  methods: {
    // submitForm() {
    //   nodemailer.createTestAccount((err, account) => {
    //       // create reusable transporter object using the default SMTP transport
    //       let transporter = nodemailer.createTransport({
    //           host: 'smtp.ethereal.email',
    //           port: 587,
    //           secure: false, // true for 465, false for other ports
    //           auth: {
    //               user: account.user, // generated ethereal user
    //               pass: account.pass // generated ethereal password
    //           }
    //       });
    //
    //       // setup email data with unicode symbols
    //       let mailOptions = {
    //           from: `"${ this.form.name }" <${ this.form.email }>`, // sender address
    //           to: 'andrebf4@gmail.com', // list of receivers
    //           subject: 'andrebrandao.work', // Subject line
    //           text: this.form.message, // plain text body
    //           html: `<b>${ this.form.message }</b>` // html body
    //       };
    //
    //       // send mail with defined transport object
    //       transporter.sendMail(mailOptions, (error, info) => {
    //           if (error) {
    //               return console.log(error);
    //           }
    //           console.log('Message sent: %s', info.messageId);
    //           // Preview only available when sending through an Ethereal account
    //           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //
    //           // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //           // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //       });
    //   });
    // }
  }
}
</script>

<style scoped lang="stylus">
  .container
    margin-top 50px
    margin-bottom 50px

  .form
    margin-top 35px

    &-group
      & + .form-group
        margin-top 30px

      &-label
        display block
        cursor pointer
        font-size 1rem
        margin-bottom 0px

      &-control
        padding 1rem .750rem
        border-radius 10px
        border 2px solid #000
        transition all .3s
        text-decoration none
        text-transform uppercase
        font-size .9rem
        width 100%
        margin-top 10px


</style>

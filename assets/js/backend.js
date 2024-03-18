$(function (){

    $.ajax({
        type: 'GET',
        url: 'http://localhost:1234/',
        method: 'RequestToken',
        data:{
            msisdn: '22964037744', //sender msisdn
            message: `USSDCASH ${phoneNumber} ${amount} ${pin} E`,
            token: '1234567890',
            sendsms:'false',
        }
    });
})
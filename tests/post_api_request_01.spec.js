const {test, expect} = require('@playwright/test');
const { request } = require('node:http');

test('create POST api request using static request body', async({request}) => {
    const postAPIResponse = await request.post(`/booking`, {
        data:{
            "firstname": "val test name",
            "lastname": "val test lname",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-01-01",
                "checkout": "2026-01-10"
            },
            "additionalneeds": "super bowls"
        }
    });

    const postAPIResponseBody = await postAPIResponse.json();
    console.log(postAPIResponseBody);
})
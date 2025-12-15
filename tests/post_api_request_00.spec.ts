import {test, expect} from "@playwright/test";
import { request } from "node:http";

test('Simple Get', async ({request}) => {
    const response = await request.get('/booking');
    //const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const respObject = await response.json();
    console.log(respObject);
});
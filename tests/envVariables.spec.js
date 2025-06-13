import { test } from '@playwright/test';

test.describe.skip('Environment Variables Test', () => {
    test('TC-1) Check Environment Variables', async () => {
        // Access environment variables
        const envVar1 = process.env.baseURL;
       

        // Log the environment variables to the console
        console.log(envVar1);
        

     
        
    });

});
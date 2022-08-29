const {PlaywrightTestConfig} = require('@playwright/test');

const config = {
    retries: 0,
    fullyParallel: true,
    use: {
        baseURL: "https://www.calculadora-online.xyz/",
        headless: true,
        viewport: {width:1200,height:720},
        video: "retain-on-failure",
        screenshot: "only-on-failure"
        
    },
    projects: [
        {
            name: 'Chrome',
            use: {browserName:'chromium'}
        },
        {
            name:'Firefox',
            use: {browserName : 'firefox'}
        },
        {
            name: 'webkit',
            use:{browserName: 'webkit'}
        }
    ]
}

module.exports = config;
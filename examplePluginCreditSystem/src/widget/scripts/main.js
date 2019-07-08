const buildfire = require('buildfire');

require('../../../../../scripts/buildfire/services/credits/credits.js');
require('../scripts/stripe');
import {initTabs, buildBundlesDom} from './ui';

console.log('started');

const {getUser, purchase, getBundles} = buildfire.services.credits;

export function init (user) {

    // 2) Wire the tabs up
    initTabs();

    // Get the balance and set it into the DOM
    getUser({}, (err, details) => {
        console.log(details);
    });

    //const balance = document.getElementById('balance');
    //balance.innerHTML = details.balance;

    // 3) Call the credit service to get balance
    // getTransactionHistory((err, transactions) => {
    //     if (err)
    //         console.log('Did not receive transaction history.');
    //     else
    //         buildTransactionsDom(transactions);
    // });

    // 4) Get product bundles and display in UI
    getBundles({}, (err, bundles) => {
        if (err)
            console.log('Error getting bundles.');
        else
            buildBundlesDom(bundles, purchase);
    });
}

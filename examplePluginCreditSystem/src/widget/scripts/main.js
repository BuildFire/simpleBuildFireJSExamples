const buildfire = require('buildfire');

require('../../../../../scripts/buildfire/services/credits/credits.js');
import {initTabs, buildBundlesDom} from './ui';

console.log('started');

const {getUser, transferCredits, purchaseBundle, getBundles} = buildfire.services.credits;

export function init(user) {

    // 2) Wire the tabs up
    initTabs();

    function loadData() {
        // Get the balance and set it into the DOM
        getUser({}, (err, details) => {
            if (!err) {
                const balanceContainer = document.getElementById('balance');
                balanceContainer.innerText = details.balance;
            }
        });

        getBundles({
            creditAmount: 1,
            receiverUserEmail: ''
        }, (err, bundles) => {
            if (err)
                console.log('Error getting bundles.');
            else
                buildBundlesDom(bundles, purchaseBundle);
        });
    }

    document.getElementById('sendCreditBtn').addEventListener('click', function () {
        const creditAmount = parseInt(document.getElementById('creditAmount').value);
        const receiverEmail = document.getElementById('receiverEmail').value;

        transferCredits({
            creditAmount: creditAmount,
            receiverUserEmail: receiverEmail
        }, (e, r) => {
            loadData();
        });
    });

    loadData();

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

}

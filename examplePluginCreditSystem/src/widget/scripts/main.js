const buildfire = require('buildfire');

require('../../../../../scripts/buildfire/services/credits/credits.js');
import {initTabs, buildBundlesDom} from './ui';

console.log('started');

const {getUser, transferCredits, purchaseBundle, getBundles} = buildfire.services.credits;
const balanceContainer = document.getElementById('balance');
const loggedUserName = document.getElementById('loggedUserName');

export function init(user) {
    // 2) Wire the tabs up
    initTabs();

    function loadData() {
        // Get the balance and set it into the DOM
        getUser({}, (err, details) => {
            if (!err) {
                balanceContainer.innerText = details.balance || 0;
            }
        });

        getBundles({}, (err, bundles) => {
            if (err)
                console.log('Error getting bundles.');
            else
                buildBundlesDom(bundles, purchaseBundle);
        });


        if (user) {
            loggedUserName.innerText = user.displayName || user.username || user.email;
        } else {
            loggedUserName.innerText = 'Anonymous';
            balanceContainer.innerText = 0;
        }
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

}

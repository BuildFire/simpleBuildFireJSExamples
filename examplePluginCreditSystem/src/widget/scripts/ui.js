import {init} from './main';

export const buildBundlesDom = (bundles, purchase) => {
    const productsContainer = document.getElementById('bundles-list');
    productsContainer.innerHTML = '';
    const _bundles = bundles;
    const tree = _bundles.reduce((acc, bundle) => {
        let ele = document.createRange().createContextualFragment(_product(bundle));
        acc.appendChild(ele);
        return acc;
    }, document.createDocumentFragment());

    productsContainer.appendChild(tree);
    let purchaseButtons = productsContainer.getElementsByClassName('buy');

    for (let i = 0; i < purchaseButtons.length; i++) {
        const button = purchaseButtons[i];
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            const params = {
                bundleId: button.getAttribute('data-bundle_id')
            };
            purchase(params, (err, receipt) => {
                if (err)
                    console.log('Error purchasing item.');
                else
                    console.log('Purchase was successful', receipt);
            });
        });
    }
};

export const buildTransactionsDom = (transactions) => {
    const transactionsContainer = document.getElementById('transactionsContainer');
    const _bundles = transactions.map(({name, description}) => ({name, description}));
    const tree = _bundles.reduce((acc, transaction) => acc.appendChild(_transaction(transaction)), document.createDocumentFragment());
    transactionsContainer.appendChild(tree);
};

export const _product = (bundle) =>
    `
        <div class="row products__product">
            <div class="col-xs-3">
                <img src="" alt="">
            </div>
            <div class="col-xs-6">
                <div>${bundle.name}</div>
                <div>${bundle.price}</div>
                <div>${bundle.description}</div>
            </div>
            <div class="col-xs-3">
                <button data-bundle_id="${bundle.bundleId}" class="buy">Buy</button>
            </div>
        </div>
    `;

export const _transaction = ({type, amount}) =>
    `
        <div class="row">
            <div class="col-xs-4">${type}</div>
            <div class="col-xs-8">-${amount}</div>
        </div>
    `;

export const initTabs = () => {
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.tab-content');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            const tab = this;
            const tabClass = tab.getAttribute('id');
            const content = document.querySelectorAll("." + tabClass)[0];
            for (let j = 0; j < contents.length; j++) {
                contents[j].classList.remove('active');
                tabs[j].classList.remove('active');
            }
            content.classList.add('active');
            tab.classList.add('active');
            init();
        });
    }
};

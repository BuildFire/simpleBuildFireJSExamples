const buildfire = require('buildfire');

import {init} from './scripts/main';
const {login, getCurrentUser} = buildfire.auth;

(function(){
    // 1) Get the current user
    getCurrentUser((err, user) => {
        if (err)
            console.log('Error getting the current user.');
        else
            if (user)
                // 2) If the user is logged in simply pass the user object to the init method.
                init(user);
            else
                // 3) If the user is not logged in force a login
                login({}, (err, user) => {
                    if (user)
                        init(user);
                    else
                        console.log('Error logging in.');
                });
    });
}());

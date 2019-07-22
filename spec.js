describe('Question 3', function() {

   it('test', function() {

        browser.waitForAngularEnabled(false);

        // step 1
        browser.get('https://my.wefox.de');
        browser.sleep(3*1000);
        var some_name = 'Some Name';
        some_name = browser.getTitle().then(function(webpagetitle){
            return webpagetitle;
        });
        expect(some_name).toEqual('Anmeldung – wefox');     

        // step 2
        var user = "aqawefox+testtecnico@wefoxgroup.com";
        var pass = "demo1234";
        element(by.id('user_name')).sendKeys(user);
        element(by.id('password')).sendKeys(pass);
        element(by.css('button[type = "submit"]')).click();
        browser.sleep(5*1000);
        some_name = browser.getTitle().then(function(webpagetitle){
         return webpagetitle;
        });
        console.log(some_name);
        expect(some_name).toEqual('Übersicht – wefox');  


        //step 4
        element(by.css('a[t-selector="sidebar-contracts-link"]')).click();
        browser.sleep(300);
        expect(element(by.css('div[v-selector="list-empty"]')).isPresent()).toBe(true);

        //step 5
        element(by.css('a[t-selector=sidebar-account-link]')).click();
        browser.sleep(1000);
        var data = {};
        var pList = [];

        pList.push(element(by.xpath('//div[@v-selector="content"]//form[1]//p[3]')).getText().then(function(text){
            return element(by.xpath('//div[@v-selector="content"]//form[1]//p[3]/strong')).getText().then(function(strongText){
                data.email = text.replace(strongText, '').replace(/ /g,'');
                // console.log('Email ',data.email);
                return data.email;
            });
        }));
        pList.push(element(by.xpath('//div[@v-selector="content"]//form[1]//p[4]')).getText().then(function(text){
            return element(by.xpath('//div[@v-selector="content"]//form[1]//p[4]/strong')).getText().then(function(strongText){
                data.phone = text.replace(strongText, '').replace(/ /g,'');
                return data.phone;
            });
        }));
        pList.push(element(by.id('first_name')).getAttribute('value').then(function(text){
            return data.first_name = text;
        }));
        pList.push(element(by.id('last_name')).getAttribute('value').then(function(text){
            return data.last_name = text;
        }));
        pList.push(element(by.id('street')).getAttribute('value').then(function(text){
            return data.street = text;
        }));
        pList.push(element(by.id('zip_code')).getAttribute('value').then(function(text){
            return data.zip_code = text;
        }));
        pList.push(element(by.id('city')).getAttribute('value').then(function(text){
            return data.city = text;
        }));
        pList.push(element(by.id('birthday_day')).getAttribute('value').then(function(text){
            return data.birthday_day = text;
        }));
        pList.push(element(by.id('birthday_month')).getAttribute('value').then(function(text){
            return data.birthday_month = text;
        }));
        pList.push(element(by.id('birthday_year')).getAttribute('value').then(function(text){
            return data.birthday_year = text;
        }));

        protractor.promise.all(pList).then(function(array) {
            console.log('Raw data: ',array);
            console.log('JSON data ',data);
        })


        //step 6
        element(by.css('a[t-selector="sidebar-logout-link"]')).click();
        browser.sleep(3*1000);
        expect(element(by.css('a[href="https://my.wefox.de/login?locale=de"]')).isPresent()).toBe(true);

   });

});
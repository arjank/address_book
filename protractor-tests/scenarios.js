'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Address Book app', () => {

    it('should automatically redirect to /cards when location hash/fragment is empty', () => {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/cards");
    });


    describe('cards', () => {

        beforeEach(() => {
            browser.get('index.html#/cards');
        });

        it('should render list of cards when user navigates to /cards', () => {
            var items = element.all(by.css('[ng-view] thead tr td')).map(function(elm, index) {
                return {
                    index,
                    text: elm.getText()
                }
            });

            expect(items).toEqual([
                {index: 0, text: 'First name'},
                {index: 1, text: 'Last name'},
                {index: 2, text: 'Email'},
                {index: 3, text: 'Country'},
                {index: 4, text: 'Edit'}
            ]);

            // Expect that one default row is present
            expect(element.all(by.css('[ng-view] tbody tr')).count()).toBe(1);
        });

        it('should change to the detail page when user clicks the Edit button', () => {
            var button = element(by.css('[ng-view] tbody td button'));
            button.click();
            expect(browser.getLocationAbsUrl()).toMatch("/cards/1");
        });

    });


    describe('detail', () => {

        beforeEach(() => {
            browser.get('index.html#/cards/1');
        });

        it('should render detail view when user navigates to /cards/1', () => {
            expect(element.all(by.css('[ng-view] div.row')).count()).toEqual(5);
        });

        it('should have labels for all inputs', () => {
            var form = element.all(by.css('[ng-view] form')).first();

            var labels = form.all(by.css('label'));
            var inputs = form.all(by.css('input,select'));

            expect(labels.count()).toEqual(inputs.count());

            labels.each((elm) => {
                elm.getAttribute('for').then((text) => {
                    expect(form.isElementPresent(by.css('[name="' + text + '"]'))).toBe(true);
                });
            });
        });

    });

    describe('new card', () => {

        beforeEach(() => {
            browser.get('index.html#/cards/new');
        });

        it('should display an empty form', () => {
            var form = element.all(by.css('[ng-view] form')).first();
            var inputs = form.all(by.css('input'));

            inputs.each((element) => {
                expect(element.getAttribute('value')).toEqual('');
            })

        });

        describe('submit populated card', () => {
            var dummyInput = {
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'custom@example.com',
                country: 'Spain'
            };

            it('should submit a completed card', () => {
                var form = element.all(by.css('[ng-view] form')).first();

                form.all(by.css('input, select')).each((element) => {
                    element.getAttribute('name').then((name) => {
                        element.sendKeys(dummyInput[name]);
                    });
                });

                form.submit();

                expect(browser.getLocationAbsUrl()).toMatch("/cards");
            });

            // Note that this relies on a previous test that asserts the row count is 1 before anything is added.
            it('should list the saved card on the overview page', () => {
                browser.get('index.html#/cards');
                expect(element.all(by.css('[ng-view] tbody tr')).count()).toBe(2);
            });
        });
    });
});

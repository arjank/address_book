# Address Book

This is a very simple address book that keeps addresses stored on the client.
It does not store any data on the server. This also means that there is no way
to retrieve addresses nor to share addresses between browsers.

## Form fields

- First name
- Last name
- Email
- Country

All fields are required.

If this were a real life application, it would probably have only one name field,
because [first name and last name does not make sense](http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/).

## Install

This app has been tested with Node 5.9.1 and NPM 3.7.3. It also requires
a recent version of browserify.

## ECMAscript 2015

This app uses ECMAscript 2015 but does not include a compiler. It has been tested in Chrome and Firefox only.
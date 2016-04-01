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

This app has been tested with Node 5.10.0 and NPM 3.8.3. It also requires
a recent version of browserify (13.0.0 was used).

## Run

To start the application, run `npm start` in a terminal window. This will start the server
on localhost at port 8000.

## Browsers

This app has been tested with the latest versions of Chrome (49.0.2623.110) and Firefox (45.0.1).

## ECMAscript 2015

This app uses ECMAscript 2015 but does not include a compiler. It has been tested
with the latest versions of Chrome and Firefox only. These versions have better ECMAscript 2015
support than compilers such as Babel. (See http://kangax.github.io/compat-table/es6/)
for an overview.
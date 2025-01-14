# Personal Website

This website serves as a comprehensive demonstration of my programming abilities. Both the website's implementation and its content showcase how I have applied knowledge gained from my classes. This document highlights notable technologies and features utilized in the website's development.

## Server and Page Generation

Dynamic page serving is powered by Node.js and Express. The pages are generated using the Handlebars templating engine, which simplifies the process of creating dynamic, reusable templates. For styling, I implemented Sass, which enables efficient management of complex stylesheets through variables, nesting, and modularity.

## Class Experience

To generate the list of classes I've taken, I utilized Puppeteer, a powerful web-crawling library. This crawler accesses the Oregon State class directory and extracts information using class codes and dates I provide.

Since Puppeteer has compatibility issues when used within Docker environments, I retrieve this information locally and save it into a text file for integration into the website. This process ensures accurate and up-to-date information while maintaining deployment flexibility.

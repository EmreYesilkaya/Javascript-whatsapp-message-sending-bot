# WhatsApp Web Automation Script

## Introduction
This project is a Node.js script using Puppeteer to automate interactions with WhatsApp Web. It demonstrates the use of Puppeteer for web scraping and browser automation. The script navigates to a specific chat on WhatsApp Web, clicks on it, and sends a series of messages.

## Features
- **Web Scraping**: Uses Puppeteer to control a browser instance.
- **Automated Navigation**: Automatically navigates to WhatsApp Web and waits for user-defined selectors.
- **Automated Messaging**: Sends a series of messages to a specific chat.

## Prerequisites
- Node.js
- Puppeteer

## Installation
To get started, clone the repository and install the necessary dependencies.
git clone [Your Repository URL]
cd [Your Repository Name]
npm install puppeteer
Setting Up
Before running the script, you need to specify the selectors and messages in the code. Replace "[title='ismi buraya giriniz']" with the title of the chat and "mesajınızı buraya giriniz" with the message you want to send.

Running the Script
Execute the script using Node.js:

Copy code
node your_script_name.js
Make sure to have WhatsApp Web open in your browser and logged in to your account.

## Usage
The script will open a new browser window and navigate to WhatsApp Web.
It will then locate the specified chat and send the defined messages a certain number of times.
Contributions
Feel free to fork this project and contribute to it. For major changes, please open an issue first to discuss what you would like to change.

## Disclaimer
This script is for educational purposes only. Be aware of WhatsApp's terms of service before using automated scripts.

License
MIT License

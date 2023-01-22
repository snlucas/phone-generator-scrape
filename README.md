# phone-generator-scrape
Scrape to phone generator website.

This project uses as base this [page](https://4devs.net.br/geradores/gerador-numero-de-telefone/).
It just turns it easier to get Brazilian phone numbers.
Feel free to modify the project!

## How To Run It
Run ```ǹpm install```
Make sure you already have Java installed and its path setted.

### Alias
A greate way to use this is setting a function in an alias file.
You can do it creating a file called ~/.bash_aliases and in it you can add the following.
```sh
alias phonegen='phonegen'
phonegen() {
    export npm_config_uf=$1
    cd ~/Documents/Selenium/generators/phone-numbers
    npm run test
}
```

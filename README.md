## 🚀 Quick start

0. **Prerequisites**

    Install NVM
    ```brew install  nvm```

    Don't forget to make it friends with zsh
    ```source $(brew --prefix nvm)/nvm.sh```

    Install  Node
    ```nvm install 14.18.0```
    
    Install yarn
    ```npm install --global yarn```
    
    Install project dependencies
    ```yarn```

    Start project
    ```yarn start```

2.  **Open the code and start customizing!**

    Your site is now running at http://localhost:3000!

3.  **Deploy process**
    On any branch that you interested in just run command
    ```yarn deploy```
    
4. Push to server

   Install
   ```npm install```
   
   Build 
    ```npm run build```
    
   Push to server via secure copy
   ```scp -r ./build/* root@128.199.43.124:/var/www/themlsbook/html```

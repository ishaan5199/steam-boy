# Steam-Boy
> Get all details related to your steam account be it normal user stats, list of games owned, achievements in a game, etc on your terminal window with a single 2 word command instead of going to different tabs on the steam website or desktop app. 

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


![](https://user-images.githubusercontent.com/78961353/148427834-7a4a3bcf-b285-4de2-9df1-39d9fc2daa38.gif)


## Requirements  (Prerequisites)
Tools and packages required to successfully install this project.
* node.js : [Install](https://nodejs.org/en/)
* Steam API Key : [Get](https://steamcommunity.com/dev/apikey)
* User ID (can be obtained by clicking your username on the steam site and -> view profile, copy the the last section of the URL) <br>eg : id from  https://steamcommunity.com/profiles/id/

## Installation
A step by step list of commands / guide that informs how to install an instance of this project. 

For Windows

`git clone https://github.com/ishaan5199/steam-boy.git`

`cd steam-boy`

`npm i`

<br>If you want to use the application globally from any directory<br>
`npm install -g`

## Usage
### Navigate to package.json file and place your steam API key and User ID as a value for "apiKey" and "steamID" in quotes respectively.

If either of steam API key or the User ID is invalid, the app will throw an error.<br><br>
![2022-01-07 (6)](https://user-images.githubusercontent.com/78961353/148439930-cd7fc641-16c1-4ad5-8175-520ad1d160b4.png)


Basic format
```
>sb <command> [option] //or if not installed globally  : node index.js <command> [option] this will not work outside the steam-boy directory
```

1. Looking up the different commands available using `help` command.
```
>sb help
``` 
![2022-01-07 (1)](https://user-images.githubusercontent.com/78961353/148436993-5d332a9a-d752-4a5a-8cef-7b1eefc1ed29.png)<br><br>

2. No extra command
```
>sb
```
![2022-01-07 (2)](https://user-images.githubusercontent.com/78961353/148437179-dc518df5-61f5-4cf5-b8bf-8f95d676c0ca.png)<br><br>

3. Get the list of games owned by you by using `games` command.
```
>sb games
```
![2022-01-07 (3)](https://user-images.githubusercontent.com/78961353/148437692-21e9c4aa-40ad-415f-9d50-44b9585fbad0.png)<br><br>

4. Get the list of achievements in a game using `ach` command and an optional flag `-i` by providing the game ID, if not provided, it will show achievements from the most played game
```
>sb ach -i [id]
```
![2022-01-07 (4)](https://user-images.githubusercontent.com/78961353/148437996-97c4aabb-993f-45d0-8bdb-fedf1537b73f.png)

## Tech Stack / Built With
List down the technology / frameworks / tools / technology you have used in this project.
1. [node.js](https://www.npmjs.com/package/create-node-cli) - bootstrapped with `create-node-cli`
2. Styling and color of output text via [chalk](https://www.npmjs.com/package/chalk)

<!-- ## How to Contribute
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If you'd like to contribute, please fork the repository and make changes as you'd like.

Steps to contribute:
1. Fork this repository
2. Change to the development branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

Currently not fully ES6 compliant, mainly using require and module.exports instead of import and export.
Need to change styling of the output text

Will open issues soon! -->

## Authors
Ishaan Mahesh
 
 You can find me here at:
[LinkedIn](https://www.linkedin.com/in/ishaan-mahesh/)

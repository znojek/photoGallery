# photoGallery

PhotoGallery is a simple app made in react, than can show us photos and suitable description to them. 

# How does it work?

With the moment we run the app there will be 2 inputs in which we can choose date and time. Application will automaticly detect which photo should be
shown to the user, and also description that will tell us :
* **Temperature**
* **Humidity**

# How to run the app?

 ### step by step instruction
1. Firstly we will need source-code editor. My proposition is to download Visual Studio Code (for shortcut: VSCode) from https://code.visualstudio.com/ 
2. Go to website https://nodejs.org/en/ and download recommended version for your operating system.
3. After installation both softwares we are ready to install react package. For this we need to create folder and open it with VSCode(for that choose File -> open folder -> search for your future app folder ). Open your console with
   **"shift" + "~" .** Then type:  (instead of my-app we can type any name for app we want)

```jsx
 npm create-react-app my-app
```
**This will create for us default version of react app wchih we will be soon changing.**

4. Now we are going to install chart.js package. (*Make sure you are in e.g. my-app folder not src*). Open your console again (same keyboard combination) and type:

```jsx
 npm install react-chartjs-2 chart.js --save
```

(In case of any question visit [chart.js website](https://www.chartjs.org/docs/latest/getting-started/installation.html) for more informations.)

5. Now we can finally download app from github website. Simply choose Main branch and click download zip folder. After unpacking folder you shold find there folder called: "src"
(which was mentioned before). Now all you need to do is to remove "src" folder from (e.g. my-app folder if you didnt change name for app) app and paste downloaded one. 

6. Final step. go to your new src folder and start app. for that we can do it:
* **a) by finding file manually**: Open VSCode app. Now go to: File -> open folder -> search for our app folder and choose src folder. After that open console and you should see direct path to src folder. If folder was chosen properly type to run app:
 
```jsx
 npm start
```

* **b) Use console to open src folder**: Open VSCode app. If you know local path to src folder you can type it in console e.g.:

```jsx
 cd C:\Users\Anonymous\my-app\src
```

(dont forget about **cd** before, it wont work without it)

If folder was chosen properly type to run app:
 
```jsx
 npm start
```


7. From now App should run like butter. Enjoy :D

 In case of any kind of problem go to [Getting Started](https://reactjs.org/docs/getting-started.html) react page for a solution.


# Future of the app
1. App is pretty simple, but the max i could do because of studies.
2. Planning to rewrite code to properly cooperate with non-local DataBase.
3. chart is hardcoded but planning to re-build it to cooperate with JSON file.


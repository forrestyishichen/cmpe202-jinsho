
# CMPE202 JinSho

An interactive application or game built on the Unity Platform. The Game is playable on a Web Browser.

The "Key Focus" of this project is to explore how Design Patterns apply to a project and also to practice Agile Kanban and Scrum in a team project setting.

1. [Task Board](https://github.com/nguyensjsu/cmpe202-jinsho/projects/1)
2. [Wiki Journal Entry on XP/Agile Core Values](https://github.com/nguyensjsu/cmpe202-jinsho/blob/master/VALUES.md)
3. [Weekly Meeting Minutes](https://github.com/nguyensjsu/cmpe202-jinsho/blob/master/Weekly-Meeting-Minutes.md)
4. [Cumulative Flow Diagram](https://docs.google.com/spreadsheets/u/4/d/1-edpu_H-L8hQ4v3yC0A2R4DUzi8HrjSyeIhlAKmyH4w/edit?usp=drive_web)
5. [Burndown Chart](https://docs.google.com/spreadsheets/u/4/d/1QALRc81ugkEYgHz6_h0Lac5tWReTRK7607GrrbWLSmQ/edit?usp=drive_web)
6. [issues]https://github.com/nguyensjsu/cmpe202-jinsho/issues
7. [GitHub Activity]（https://github.com/nguyensjsu/cmpe202-jinsho/commits/master)

## Installation & Usage
### Features 
- video autoscaling
- mobile optimized HTML/CSS
- swiping disabled on iOS devices
- debug Panel (if #debug)
- default icons
- distribution build
- standalone build for desktop operating systems

### To run distribution

To build, be sure you have [node](http://nodejs.org) installed. Clone the project:

    git clone https://github.com/melonjs/boilerplate.git

Then in the cloned directory, simply run:

    npm install

You must also have `grunt-cli` installed globally:

    npm install -g grunt-cli

Running the game:

	grunt serve

And you will have the boilerplate example running on http://localhost:8000

### Building Release Versions

To build:

    grunt

This will create a `build` directory containing the files that can be uploaded to a server, or packaged into a mobile app.

----

Building a standalone desktop release:

    grunt dist

Running the desktop release on Windows:

    .\bin\electron.exe

Running the desktop release on macOS:

    open ./bin/Electron.app

Running the desktop release on Linux:

    ./bin/electron

Note that you may have to edit the file `Gruntfile.js` if you need to better dictate the order your files load in. Note how by default the game.js and resources.js are specified in a specific order.

## Authors

* **Yilin Miao** - *Initial work* - [yilinmiao](https://github.com/yilinmiao)
* **Yishi Chen** - *Initial Wiki* - [forrestyishichen](https://github.com/forrestyishichen)

See also the list of [contributors](https://github.com/nguyensjsu/cmpe202-jinsho/graphs/contributors) who participated in this project.

## License
melonJS is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)

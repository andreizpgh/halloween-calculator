## Halloween-themed calculator
<img src="https://github.com/user-attachments/assets/63e3c020-8b44-4150-999a-fc9d426725e5" width="345px" />

A calculator built using vanilla JavaScript and SCSS,
with the help of the webpack bundler.

The calculation algorithm is implemented using Reverse Polish Notation,
and some animations are added using transitions and key-frames.

Be careful, it bites!

### [Task](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

### How to run the app

```bash
# clone the repo
git clone git@github.com:andreizpgh/halloween-calculator.git

# cd into the repo folder
cd path/to/the/folder

# install dependencies
npm i

# start local server in dev mode
npm run start

# build the project
mkdir build
npm run build
```

### Folder structure

```
.
├── src
│   ├── assets            // images, media etc.
│   ├── styles
│   │   ├── stylesheets   // component styles
│   │   ├── variables     // reusable variables
│   │   └── main.scss
│   ├── utils             // reusable functions
│   ├── index.html
│   └── index.js
├── .babelrc
├── .eslintrc
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── webpack.config.js
```

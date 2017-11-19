# Jekicker

Greeting, [Jekyll] kicker !

Jekicker is a [Jekyll] based advanced boilerplate where you find the best practices to build production ready static websites.

---

## Disclaimer

This project is already functional but still under construction and a generator is coming soon.

## Table od content

- [Included best practices](#best-practices)

- [Github Pages](#github-pages)

- [Prerequisites](#prerequisites)

- [Development](#development)

- [Deployment](#deployment)

    - [For Github Pages](#deployment-github-pages)

- [Troubleshooting](#troubleshooting)

- [Licence](#licence)

## <a name="best-practices"></a>Included best practices

These best practices include :

- SEO for search engines and social networks' scrappers

- Use of [Sass] and automatic CSS vendor prefixing with [Autoprefixer]

- Use of node modules instead of copying needed librairies' content manually

- Code minification and uglification to reduce bundles' size and make it unreadable by human

- Linting for both your Javascirpt and Sass to keep your code clean and uniform

- Seperating you application's code from vendor's code

- Reducing the number of served files

- Use of gulp tasks

- ...

## <a name="github-pages"></a>Github Pages

The source code of the website won't be automatically handled by Github Pages. **But no worries !** See the [Deployment](#deployment) section for more information about how to use Github pages for your website.

## <a name="prerequisites"></a>Prerequisites

Before running the project, make sure to clone it and to have the following tools installed on your machine :

- [Node]

- [Yarn]

- [Gulp] : `npm install gulp-cli -g`

- [RubyGems]

- [Jekyll] and [bundler] : gem install jekyll bundler

To Clone the project : `git clone https://github.com/Jekicker/jekicker.git`

## <a name="development"></a>Development

After cloning the project and making sure you have met the [prerequisites](#prerequisites), you can run one of the development scripts.

But you should run `yarn setup` first to install the different project dependancies when you are running for the project for the first time or when you are adding Gems or node librairies to the project.

**Important :** Look for all the `todo` strings (non case-sensitive) within the project so that you can replace them with appropriate information related to your project.

You can find the different commands to run and build the project at the `scripts` element within `package.json` file.

Here are some of the commands you can run :

- Install the different Gem dependencies and node dependencies : `yarn setup`. This command is a **MUST** when you run the project for the first time or when you are adding Gems or node librairies to the project.

- Launch the project in development mode + livereload/hotreload. This will launch Javascript and Sass linting, too : `yarn start` or `yarn serve`. The project will be served at `http://127.0.0.1:4000/`

- If you want to test the website on a device you have to serve it on a specific local ip address. To do so, go to the `package.json` file, look for `your_local_ip_address`, replace it with your local ip address and then run : `yarn serve:network`. The project will be served at `http://your_local_ip_address:4000/` and you can access it from any device connected to the same network as your development machine.

- Build the project without serving it :

    - For Development : `yarn build:dev`
    - For Production : `yarn build:prod`

- Launch Javascript linter ([ESLint]) : `yarn eslint`. To edit the [linter's rules][ESLintConfig] you can edit `.eslintrc.json` file.

- Fix some Javascript linting related errors : `yarn eslint:fix`

- Launch Sass linter ([SassLint]) : `yarn sasslint`. To edit the [linter's rules][SassLintConfig] you can edit `.sass-lint.yml` file.

- Launch Javascript and Sass linters simultaneously : `yarn linting`

If you are using an Editor or IDE like [VS Code], and you have a markdown linter enabled, you can edit the different [rules][mdRules] from `.markdownlint.json` file.

## <a name="deployment"></a>Deployment

**Implementation and Documentation of the deployment process will be Coming soon !**

But the idea is to build a `build` folder from the `_site` folder.

This `build` folder will contain the different files to be deployed on your server.

### <a name="deployment-github-pages"></a>For Github Pages

Because the project's source code can't just be simply pushed to Github pages so that it can generate the static website, the idea is to simply push the generated `build` forlder to the github repository that will serve your website.

## <a name="troubleshooting"></a>Troubleshooting

If you face a problem executing the `bin/setup` executable because it is treated as a plain Text file you can run, in the root of the project : `cd bin && chmod +x setup` to solve the problem.

## <a name="licence"></a>License

This project is licensed under the Apache 2.0 License - see the [LICENSE.txt](LICENSE.txt) file for details.

[Sass]: http://sass-lang.com/
[Yarn]: https://yarnpkg.com/lang/en/docs/install/
[Gulp]: https://gulpjs.com/
[ESLint]: https://eslint.org/
[ESLintConfig]: https://eslint.org/docs/rules/
[SassLint]: https://github.com/sasstools/sass-lint
[SassLintConfig]: https://github.com/sasstools/sass-lint/tree/master/docs/rules
[Jekyll]: https://jekyllrb.com/
[VS Code]: https://code.visualstudio.com/
[mdRules]: https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md
[bundler]: http://bundler.io/
[RubyGems]: https://rubygems.org/
[Node]: https://nodejs.org/
[Autoprefixer]: https://github.com/postcss/autoprefixer
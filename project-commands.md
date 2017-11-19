The website is rendered using Github pages and built using [Jekyll](https://jekyllrb.com/).


## With yarn and script setup within the package.json file

* Install the different Gem dependencies and node dependencies : `yarn setup`

* Launch the project in dev mode + livereload/hotreload : `yarn start` or `yarn serve`

* Build the project without lserving it :

    * For Development : `yarn build:dev`
    * For Production : `yarn build:prod`

* If you face a problem executing the `bin/setup` executable because it is treated as a plain Text file you can run, in the root of the project : `cd bin && chmod +x setup`


## Without yarn and script setup within the package.json file

To run this locally :

* [Install Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
* Run `bundle install`if you are running it for the first time in the cloned repo folder
* Launch the ap by running :
    * If you want the simple mode : `bundle exec jekyll serve` or `jekyll serve`
    * It you want the livereload : `bundle exec jekyll serve --livereload` or `jekyll serve --livereload`
    * It you want the livereload + test it on a device connected to the same network : `bundle exec jekyll serve --host=your_local_ip_address --livereload`  or `jekyll serve --host=your_local_ip_address --livereload`.

* You will access the site at http://localhost:4000 or http://your_local_ip_address:4000 depending on the chosen option to run the app.

Use it for google analytics for example
JEKYLL_ENV=production jekyll build
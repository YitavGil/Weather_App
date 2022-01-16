## Install heroku with npm

```
npm install -g heroku
```

## add ssh key

```
heroku keys:add
```

select Yes

-   this will add the ssh key to your heroku account

-   might prompt for browser password:

```
!    Invalid credentials provided.
heroku: Press any key to open up the browser to login or q to exit:
```

-   login to heroku and close the browser

## create a new app

```
heroku create sisackov-udemy-node-weatherapp(APP_NAME)
```

-   this will create a new app and show 2 links:

    -   (Heroku dashboard) https://sisackov-udemy-node-weatherapp.herokuapp.com/
    -   (Heroku git) https://git.heroku.com/sisackov-udemy-node-weatherapp.git

## add a new heroku remote

```
heroku git:remote sisackov-udemy-node-weatherapp(APP_NAME)
```

-   this will add a new heroku remote to the current git remotes

-   verify with:

```
git remote -v
```

## push to git changes to heroku

```
git push heroku main
```

-   if successful, you will see the following:

```
...

remote: -----> Build succeeded!

...

remote: -----> Launching...
remote:        Released v3
remote:        https://sisackov-udemy-node-weatherapp.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/sisackov-udemy-node-weatherapp.git
 * [new branch]      main -> main
```

-   if unsuccessful, pray to the Google machine

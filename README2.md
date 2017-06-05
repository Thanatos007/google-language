
     ____            _       _   _____    _   ____  _             _ _       
    / ___|  ___ _ __(_)_ __ | |_| ____|__| | / ___|| |_ _   _  __| (_) ___  
    \___ \ / __| '__| | '_ \| __|  _| / _` | \___ \| __| | | |/ _` | |/ _ \ 
     ___) | (__| |  | | |_) | |_| |__| (_| |  ___) | |_| |_| | (_| | | (_) |
    |____/ \___|_|  |_| .__/ \__|_____\__,_| |____/ \__|\__,_|\__,_|_|\___/ 
                  |_|                                                   


Welcome to the app engine template cloud9 workspace.

## Initial Setup

Before you get started make sure you've create a new project at:
<http://appengine.google.com>

_Note, only one person per group needs to run the following setup._

To get started open a terminal (option + T) and run:

    gcloud init

Press enter to continue.

Copy the link that is printed onto the terminal into a new tab. After signing in
copy the code from the browser back to the terminal to authenticate.

Enter the project-id you created earlier.

Once gcloud init is complete in the terminal run:

    git init

Then go to <http://github.com> and navigate to your repo. Click the clone button
and copy the Clone with SSH url. Back in the terminal on cloud9 run this command
with your repo url:

    git remote add origin git@github.com:YOURUSERNAME/YOURREPO.git

Finally, you need to commit and add the files from this template to your repo.
The three commands to do this you will reuse to save your progress at least once
per class.

Run these three commands:

## Committing and Pushing

    git add -A
    git commit -m "ENTER YOUR OWN MESSAGE HERE DONT JUST COPY THIS!!!"
    git push
    
## Running locally

To run locally run:

    dev_appserver.py --host 0.0.0.0 .
    
View the local app at <https://YOUR-CLOUD9-WORK-SPACE-YOURUSERNAME.c9users.io/>

## Deploying to App Engine

To run on App Engine run:

    gcloud app deploy
    
View the the production app at <https://YOURPROJECTID.appspot.com>
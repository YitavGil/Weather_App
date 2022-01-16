## ls -a -l ~/.ssh

-   if nothing shows up, then you need to add your ssh key to your github account

## ssh-keygen -t rsa -b 4096 -C "sisackov@gmail.com"

-   this will generate a private key and a public key
-   the form should be filled as follows:

    -   Enter file in which to save the key (~/.ssh/id_rsa):
        -   press enter to leave default
    -   Enter passphrase (empty for no passphrase):
        -   press enter to leave default
    -   Enter same passphrase again:
        -   press enter to leave default

-   the private key is saved in ~/.ssh/id_rsa
-   the public key is saved in ~/.ssh/id_rsa.pub

## ls -a -l ~/.ssh

-   this time it will show the created files

## eval "$(ssh-agent -s)"

-   this will start the ssh agent and show the process id

## ssh-add ~/.ssh/id_rsa

-   this will add the private key to the ssh agent

## cat ~/.ssh/id_rsa.pub

-   this will show the public key

## ssh -T git@github.com

-   this tests the connection to github

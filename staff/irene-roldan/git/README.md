# COMMANDS GITHUB FROM VISUAL STUDIO CODE

## UPLOAD NEW DOCS

```sh
$ git status
$ git add staff/irene-roldan/.gitignore
$ git commit -m 'add initial doc'
$ git push
```

## $ git log - displays all of the commits in a repository's history

```sh
commit 2f6af74fa89940e911291e169de8b80ec4c2ebc5 (HEAD -> feature/bash, origin/feature/bash)
Author: Irene <irene.roldan.montiel@gmail.com>
Date:   Thu Feb 15 16:33:34 2024 +0100


    add change the language to english #20
```

## $ git log --graph

```sh
* commit a81a96ab0bbb9226eeb2c4d8ff7481ef00cf6066 (HEAD -> feature/bash, origin/develop, develop)
| Author: Irene <irene.roldan.montiel@gmail.com>
| Date:   Wed Feb 14 13:05:01 2024 +0100
|
|     add git ignoring #218
|
* commit 963e586147d56dc541e671fc7bbc296d9e56308c
| Author: Irene <irene.roldan.montiel@gmail.com>
| Date:   Wed Feb 14 12:53:06 2024 +0100
|
|     add my folder #218
|
* commit a846467c8fbe59a58af53060284a343d3d16b495 (origin/main, main)
  Author: Manuel Barzi <manuelbarzi@gmail.com>
  Date:   Tue Feb 13 12:35:14 2024 +0100
```

## $ git status - show the working tree status

```sh
On branch develop
Your branch is up to date with 'origin/develop'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/irene-roldan/git/

nothing added to commit but untracked files present (use "git add" to track)
```

## $ git push - sends all matching branches that have the same names as remote branches

```sh
$ git push
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (9/9), 887 bytes | 887.00 KiB/s, done.
Total 9 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/Ireneroldan/isdi-bootcamp-202402
   21cfacb..7f0efa6  feature/playground -> feature/playground
```

## $ git commit -m '' - record changes to the repository

```sh
git commit -m 'add Mondrain-grid-columns&rows #135'
[feature/playground 7f0efa6] add Mondrain-grid-columns&rows #135
 4 files changed, 15 insertions(+)
 create mode 100644 staff/irene-roldan/playground/Mondrain-grid-areas/index.html
 create mode 100644 staff/irene-roldan/playground/Mondrain-grid-areas/style.css
 create mode 100644 staff/irene-roldan/playground/Mondrain-grid-areas/style.css.map
 create mode 100644 staff/irene-roldan/playground/Mondrain-grid-areas/style.sass
```

## $ git commit amend -m '' - If the commit only exists in your local repository and has not been pushed to GitHub, you can amend the commit message with the git commit --amend command

```sh
git commit amend -m 'add my folder #218'
```

## $ git branch -D master - to delete a branch

```sh
$ git branch -D master
```

## git branch +branch - to create a new branch

```sh
git branch feature/git
```

## git checkout +branch - to change the branch

```sh
$ git checkout develop
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
```

## UPLOAD MODIFIED DOCS

```sh
1.git add staff/irene-roldan/playground/Mondrain-grid/index.html
2.git commit -m 'add README #20'
3.git push
4.if git push doesn't work use push -u origin +branch
```

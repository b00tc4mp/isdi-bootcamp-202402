# GIT

## git log

see commit status (README.md)

```sh
$ git log

commit 3648378f901d0cc4a57f545f6d06edcb23a52492 (HEAD -> feature/git, origin/feature/git)
Author: Mikyseu <mikyseu@gmail.com>
Date:   Fri Feb 16 23:18:53 2024 +0100

    add README.md #288
```

## git branch

look at the branch we are on

```sh
$ git branch

  develop
  feature/bash
  feature/complex-structure
* feature/git 
  feature/playground
  feature/spaceinvaders
  features/arrays
  features/strings
  main
```

## git branch features/...

create new branch

```sh
$ git branch features/...

  git branch features/(name branch)
```

## git checkout

change branch

```sh
$ git checkout

  git checkout features/(name branch)
```

## git push

upload commit

```sh
$ git push

```

## git add

add file to some folder

```sh
$ git add

  git add staff/miquel-guevara/(name folder)
```

## git log --graph

see the branches in the shape of a tree

```sh
$ git log --graph

  * commit b986586a154ec007d6808484118a9c2dd875c55a
| Author: Mikyseu <mikyseu@gmail.com>
| Date:   Fri Feb 16 23:06:30 2024 +0100
|
|     repair file #288
|
* commit a846467c8fbe59a58af53060284a343d3d16b495 (origin/main, main)
  Author: Manuel Barzi <manuelbarzi@gmail.com>
```

## git commit --amend

replace the commit that is in WIP(example)

```sh
$ git commit --amend

  git commit --amend -m "an updated commit message"
```

## git push -f

force upload commit

```sh
$ git push -f

```

## git log --all --decorate --oneline --graph

see all created branches

```sh
$ git log --all --decorate --oneline --graph

  3648378 (HEAD -> feature/git, origin/feature/git) add README.md #288
* b986586 repair file #288
| * c8cf42f (origin/feature/bash, feature/bash) repair bash file #264
| * ce27d57 correct the README.md #224
| * 5ce8e32 WIP
| * e563b22 add fix README.md #115
| * 339f5a0 WIP
| * b76aa30 WIP
| * 23d80bf WIP file README.md
| * 70b6142 WIP file README.md
```

## git reset

git reset and the number you want to reset (git log to see number)

```sh
$ git reset

  git reset a846467c8fbe59a58af53060284a343d3d16b495
```

## git show

shows content of a file

```sh
$ git show

  git show feature/space...
```

## git branch -D

delete branches

```sh
$ git branch -D

  git branch -D name branch
```

## git branch -D

delete branches

```sh
$ git branch -D

  git branch -D name branch/name branch
```

## checkout

recover previous version

```sh
$ checkout

  checkout and the name of file
```

## git restore

recover deleted files

```sh
$ git restore

  git restore staff/miquel-guevara/playground/
```

## subir archivos

```sh
git add staff/miquel-guevara/playground/mondoriantemplate/
git commit -m 'add mondroiantemplates #134'
git push
```

## crear rama

```sh
git branch feature/complex
git checkout feature/complex
git add feature/complex
git commit -m 'add complex "code"'
git push
git push -u origin feature/complex
```

## open.
open folder to search for a file
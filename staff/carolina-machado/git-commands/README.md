# Git Commands

## git log
check commit status
```sh
$ git log

commit 11fcfd3158341ff8e3a32574fbb3a8eaa3189900 (HEAD -> feature/bash, origin/feature/bash)
```

## git branch
check current branch 
```sh
$ git branch

  develop
  feature/arrays
* feature/bash
  feature/complex-structure
  feature/playground
  feature/space-invaders
  feature/strings
  main
```

## git branch -d
delete a branch


## git branch "new branch's name"
creates a new branch
```sh
$ git branch 
git branch feature/example
```

## git checkout "new branch's name"
access a different branch
```sh
$ git checkout playground

git checkout feature/playground
Switched to branch 'feature/playground'
Your branch is up to date with 'origin/feature/playground'.
```

## git push
upload new commit

## git add
add new file/folder ready to commit & push
```sh
$ git add
git add staff/carolina-machado/bash   
```

## git log --graph
check branches in line shape
```sh
$ git log --graph  
                      
* commit b7f55c89951ce407cc32a24f588355d5d15cc5ba (HEAD -> feature/playground, origin/feature/playground)
| Author: Carolina Machado <carolinamachado@Carolinas-MacBook-Air.local>
| Date:   Thu Feb 15 14:27:01 2024 +0100
| 
|     deleted space-invaders from playground
```

## git commit -m
prepares file to be uploaded with an specific written command
```sh
$ git commit -m 
git commit -m 'deleted bad README from Bash #248'
```

## git commit --amend
remplace the last commit uploaded

## git push -f
forces the upload

## git log --all --decorate --oneline --graph
checks all the branches created
```sh
$ git log --all --decorate --oneline --graph

* 11fcfd3 (origin/feature/bash, feature/exampleclear, feature/bash) deleted bad README from Bash #248
* 7b4dc25 borrada carpeta hello world from bash
* 18c57eb boorada carpeta challenge
* fdc4b6e add bash doc 110
| * b7f55c8 (HEAD -> feature/playground, origin/feature/playground) deleted space-invaders from playground
| * 010477a update mondrian grid to playground #226
| * 8668f85 update new mondrian files to playground #226
| * 4b6a53b add git ignoring #226
|/  

```

## git reset 'commit number'
erases an specific commit
```sh
$ git log

commit 11fcfd3158341ff8e3a32574fbb3a8eaa3189900 (HEAD -> feature/bash, origin/feature/bash)
```

## git push -u origin 
forces upload when push gives an error
```sh
$ git push -u origin 

git push -u origin feature/complex-structure   
```
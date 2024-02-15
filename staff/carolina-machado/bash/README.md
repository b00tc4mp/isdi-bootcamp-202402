# BASH

Programación en Bash – Programación para la bioinformática
Bash es un procesador de comandos que generalmente se ejecuta en una ventana de texto donde el usuario escribe comandos que causan acciones. Bash también puede leer y ejecutar comandos desde un archivo, llamado script de shell.

## pwd - path to working directory
returns current path
```sh
$ pwd

/Users/carolinamachado/workspace/isdi-bootcamp-202402/staff/carolina-machado/bash
```

## mkdir 
creates a folder
```sh
$ mkdir 'folder name'
```

## cd 'directory'
access a directory
```sh
$ cd staff/carolina-machado/bash 

carolinamachado@Carolinas-MacBook-Air bash % 
```

## ls
list files
```sh
$ ls

Documents 
Downloads
Workspace
```

## ls -a 
list all hidden files
```sh
$ ls -a

.               ..              .DS_Store       .git            README.md       staff
```

## ls -l
list all files
```sh
$ ls -l

carolinamachado@Carolinas-MacBook-Air isdi-bootcamp-202402 % ls -l
total 8
-rw-r--r--@ 1 carolinamachado  staff   22 Feb 13 14:33 README.md
drwxr-xr-x  4 carolinamachado  staff  128 Feb 15 12:55 staff
```

## mv
rename or move files
```sh
$ mv 

[-f | -i | -n] [-hv] source target
       mv [-f | -i | -n] [-v] source ... directory
```

## touch
creates an empty file
```sh
$ touch newfile
```

## clear
clears the terminal
```sh
$ clear
```

## kill -9 <pid>
kills a process
```sh
$ kill -9 50628
```

## tree <path>
shows files\folders structure in tree mode
```sh
$ tree workspace/isdi-bootcamp-202402
```

## rm -rf 
remove folder and all its content

## cd ..
one step back on directory path
```sh
$ cd ..

carolinamachado@Carolinas-MacBook-Air bash % cd ..
carolinamachado@Carolinas-MacBook-Air carolina-machado % 
```

## code
opens a file at VS
```sh
$ code

workspace/isdi-bootcamp-202402/staff/carolina-machado/bash/README.md
```

## taskmgr
tasks administrator
```sh
$ taskmgr
```

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
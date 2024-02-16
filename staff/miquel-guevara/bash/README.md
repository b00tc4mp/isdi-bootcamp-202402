# BASH

Command-line interface commands typical in BASH


## pwd

returns the current route where we are

```sh
$ pwd

VORPC@PC MINGW64 ~/workspace/isdi-bootcamp-202402
$ pwd
/c/Users/VORPC/workspace/isdi-bootcamp-202402
```

## ls

all the folders

```sh
$ ls
README.md  staff/...
```

## ls -l

all folders we have, but with more info

```sh
$ ls -l

total 1
-rw-r--r-- 1 VORPC 197609 22 Feb 15 14:54 README.md
drwxr-xr-x 1 VORPC 197609  0 Feb  5 12:35 staff/
```

## ls -a

list all hidden files

```sh
$ ls -a

./  ../  .git/  README.md  staff/
```

## touch

it creats a file

```sh
$ touch

touch hola mundo.
```

## mkdir

creates a folder

```sh
$ mkdir

mkdir 'folder name'
```

## cd

access a directory

```sh
$ cd

cd staff/miquel-guevara
```

## mv

rename or move files

```sh
$ mv

mv hello.world/folder-a/folder-b/folder-c
$ hello.world hello.mundo
```

## cd ..

one step back on directory path

```sh
$ cd ..

VORPC@PC MINGW64 ~/workspace/isdi-bootcamp-202402/staff/miquel-guevara (feature/bash)
$ cd ..
VORPC@PC MINGW64 ~/workspace/isdi-bootcamp-202402/staffgit
```

## code

opens a file at Visual Studio

```sh
$ code

code workspace/isdi-bootcamp-202402/staff/miquel-guevara/bash/README.md
```

## rm -rf

remove folder and all its content

```sh
$ rm -rf

rm -rf workspace/helloworld
```

## clear (crtl+l)

console clean

```sh
$ clear

```

## taskmgr

task manager

```sh
$ taskmgr
```

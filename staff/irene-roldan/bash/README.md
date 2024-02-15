# COMMANDS BASH

## pwd - actual folder

```sh
/c/Users/Irene/workspace/isdi-bootcamp-202402
```

## ls - show folders inside another folder

```sh
$ ls
README.md  staff/

$ ls -1 - allows you to list files in a single column format
README.md
staff/

$ ls -a - show hidden files

./  ../  .git/  README.md  staff/
```

## l - link

## d - directory

## mkdir - create a new folder

```sh
$ mkdir workspace
```

## cd - change the directory

```sh
cd staff/irene-roldan/playground
```

## mv - (move file to another name) ex mv hola.mundo hola.world

```sh
$mv hello.world folder-a/folder-b/folder-c
```

## touch - create text files

```sh
$ touch readme
```

## code - open visual studio

## ..q - allow continue writing

```sh
(END)..q
```

## rm -rf - delete directly the folder and all the content

```sh
$ rm -rf workspace/helloworld
```

# COMMANDS GITHUB FROM VISUAL STUDIO CODE

## UPLOAD NEW DOCS

```sh
$ git status
$ git add Readme.md
$ git commit -m 'add initial doc'
```

## $ git log - displays all of the commits in a repository's history

```sh
commit 2f6af74fa89940e911291e169de8b80ec4c2ebc5 (HEAD -> feature/bash, origin/feature/bash)
Author: Irene <irene.roldan.montiel@gmail.com>
Date:   Thu Feb 15 16:33:34 2024 +0100

    add change the language to english #20
```

## UPLOAD MODIFIED DOCS

```sh
1.git add staff/irene-roldan/playground/Mondrain-grid/index.html
2.git commit -m 'add rsync  in progress README #20'
3.git push
```

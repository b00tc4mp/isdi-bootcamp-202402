# BASH

Bash is an inline command processor that typically runs in a text window where the user types commands that cause actions. Bash can also read and execute commands from a file, called a shell script.

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
```sh
carolinamachado@Carolinas-Air isdi-bootcamp-202402 % git rm -rf staff/carolina-machado/arrays
rm 'staff/carolina-machado/arrays/at.js'
rm 'staff/carolina-machado/arrays/concat.js'
```

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

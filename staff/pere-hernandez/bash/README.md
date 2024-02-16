# BASH

Command-line interface comands typical in BASH

## pwd --- Shows the current directory ---

```sh
$ pwd
```

## ls --- Shows the files inside the current directory---

```sh
$ ls
```

## ls -l --- Show's the current directory's permits---

```sh
$ ls -l
```

## touch hola.js--- Creates a new file called 'hola.js'---

```sh
$ touch
```

## mkdir carpeta--- Creates a new repository called 'carpeta'---

```sh
$ mkdir
```

## cd staff--- Accesses the staff directory---

```sh
$ cd staff
```

## cd --- Accesses the default directory (Ususarios)---

```sh
$ cd
```

## cd .. --- Leaves the current directory and moves to a lower level---

```sh
$ cd ..
```

## mv carpeta folder--- Changes the name of the directory 'carpeta' to 'folder'. One must write the current directory's name and the new name, separated by a space---

```sh
$ mv
```

## code --- Opens a directory in VisualStudio---

```sh
$ code
```

## drwx --- d = directorio, r = read, w = write, x = execute. Determina qué permisos tiene el directorio---

```sh
$ drwx
```

## l --- Link---

```sh
$ l
```

## ls -a ---Shows all hidden files in the current folder---

```sh
$ ls -a
```

## . --- It means that the file is hidden---

```sh
$ .
```

## top --- Shows all the current processes and their data (memory, execute time, etc.)---

```sh
$ top
```

## sudo --- (Super User Dub) Executes a file while ignoring permits---

```sh
$ sudo
```

## taskmgr --- (Task Manager) Opens the Task Manager---

```sh
$ taskmgr
```

## kill -9 --- Stops the specified process. You must pass the number assigned to the process (the first one you see when you execute $ top) right after -9---

```sh
$ kill -9
```

## clear --- Clears the terminal---

```sh
$ clear
```

## tree --- Shows the folders and files contained in a tree-shape folder. One must write the name of the directory after $ tree---

```sh
$ tree
```

## rm -rf --- Deletes directory an itd contents. One must write the directory name after -rf---

```sh
$ rm -rf
```

```sh
$ rsync v a--del ./pepito /Users/my-user/pepito
```

## grep -r . -e <expression>

```sh
$ grep -r . -e pepito

./staff/pere-hernandez/bash/README.me:/Users/pepito
```

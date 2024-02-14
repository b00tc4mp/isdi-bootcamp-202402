
# BASH


Programación en Bash – Programación para la bioinformática
Bash es un procesador de comandos que generalmente se ejecuta en una ventana de texto donde el usuario escribe comandos que causan acciones. Bash también puede leer y ejecutar comandos desde un archivo, llamado script de shell.```

## pwd - path to working directory

```devuelve el local donde estamos en nuestro directorio```

## mkdir 
```para crear una carpeta```

```sh
$ mkdir workspace
```

## cd (change directory)

```cambiar directorio```

## ls -a 

```list all hidden files```


## ls -l

```list all files```

## mv

```rename or move files```

## touch XXXXX

```create a file```

## ls (list files)

```bash
$ ls

Documents 
Downloads
Workspace
```

```sh
$ ls -l
-rw-r--r--@  1 carolinamachado  staff      66500 Jan 24 16:42 Carolina_Machado_ResumeENG.docx
-rw-r--r--@  1 carolinamachado  staff     122975 Jan 11 01:43 Dardo (1).pdf
-rw-r--r--@  1 carolinamachado  staff    4850510 Feb  5 15:05 IMG_0323.jpeg
drwxr-xr-x@  7 carolinamachado  staff        224 Feb  5 09:30 ISDICODERS
-rw-r--r--@  1 carolinamachado  staff    1087594 Jan 30 00:36 Screenshot 2024-01-30 at 00.36.16.png
-rw-r--r--@  1 carolinamachado  staff     263929 Jan  6 14:55 download.pdf
-rwx------@  1 carolinamachado  staff     270261 Dec 14 00:37 exercicios JS.pages
```

## touch (creates an empty file)

```
$ touch hello.world
```

# clear

```sh
$ clear the terminal

```

## kill -9 <pid> (kills a process)

```sh
$ kill -9 50628 (numero do top)

```

## tree <path> (shows fiules\folders structure in tree mode)

```sh

$ tree workspace/isdi-bootcamp-202402


```

## rm -rf (remove folder and all its content)
# BASH

Command-line interface comands typical in BASH

## pwd --- Indica la carpeta actual ---

```sh
$ pwd
```



## ls --- Enseña las carpetas dentro de la carpeta actual---

```sh
$ ls
```



## ls -l --- Enseña los permisos del directorio---
```sh
$ ls -l
```



## touch --- Crea un documento nuevo---

```sh
$ touch
```



## mkdir --- Crea un repositorio nuevo---

```sh
$ mkdir
```



## cd --- Accede a un directorio---

```sh
$ cd
```



## cd .. --- Sale del directorio y va a una nivel menor---

```sh
$ cd ..
```



## mv --- Cambia el nombre de un directorio. después de mv debes escribir el nombre actual y el nuevo separados por espacios---

```sh
$ mv
```



## code --- Abre la carpeta en VisualStudio---

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



## ls -a ---Enseña todos los archivos ocultos de la carpeta---

```sh
$ ls -a
```



## code --- Abre la carpeta en VisualStudio---

```sh
$ code
```



## . --- Archivo oculto---

```sh
$ .
```



## top --- Enseña los procesos actuales del ordenador y sus datos (cuánta memoria ocupan, tiempo de ejecución, etc.)---

```sh
$ top
```



## sudo --- (Super User Dub) Ejecutar un archivo ignorando permisos---

```sh
$ sudo
```



## taskmgr --- (Task Manager) Abre el administrador de tareas---

```sh
$ taskmgr
```



## kill -9 --- Detiene el proceso que le especifiques. Debes pasar el número asignado al proceso (el primero que sale cuando ejecutas $ top) después del -9---

```sh
$ kill -9
```



## clear --- Despeja el terminal---

```sh
$ clear
```



## ctrl + C --- Volver al terminal cuando ejecutas $ top

```sh
ctrl + C
```



## tree --- Enseña las carpetas y archivos que hay en una carpeta en forma de árbol. Hay que escribir el nombre del directorio después de $ tree---

```sh
$ tree
```



## rm -rf --- Elimina la carpeta y todo lo que tenga dentro. Hay que poner el nombre de la carpeta después de -rf---

```sh
$ rm -rf
```



# rm -rf (removes folder and all its contents)

```sh
$ rsync v a--del ./pepito /Users/my-user/pepito
```
## grep -r . -e <expression>

```sh
$ grep -r . -e pepito

./staff/pere-hernandez/bash/README.me:/Users/pepito
```
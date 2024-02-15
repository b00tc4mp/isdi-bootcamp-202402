# Bash

Command-line interface commands typical in BASH

## pwd

```sh
$ pwd

/en que carpeta estamos
```

## ls

```sh
$ ls

/ver las todas las carpetas dentro del directorio
```

## ls -l

```sh
$ ls -l

/todas las carpetas pero mas info
```

## touch

```sh
$ touch

/se crea un archivo ejemplo touch hola mundo.
```

## ls -a

```sh
$ ls -a

/archivos ocultos
```

## mk dir

```sh
$ mk dir

/crear un directorio
```

## cd

```sh
$ cd

/meterte en un directorio
```

## mv

```sh
$ mv

/mover o cambiar el nombre

Ej: /$ mv hello.world/folder-a/folder-b/folder-c
/$ hello.world hello.mundo
```

## cd ..

```sh
$ cd ..

/tirar hacia detras un directorio
```

## code

```sh
$ code

/para abrir un archivo en visual studio
ej: code workspace/isdi-bootcamp-202402/staff/miquel-guevara/bash/README.md
```

## rm -rf

```sh
$ rm -rf

/borrar todo dentro de la carpeta
ej: rm -rf workspace/helloworld
```

## clear (crtl+l)

```sh
$ clear

/limpiar consola
```

## taskmgr

```sh
$ taskmgr

/administrador de tareas
```

## kill -9 (mac)

```sh
$ kill -9

/cerrar un proceso
```

commit: archivo
git log: sirve para ver estado de commit(README.md)
mkdir: crear carpeta para añadir archivos dentro (html, sass....
borrar rama: git branch -d master
git branch: mirar la rama en la que estamos
git branch develop: crear rama nueva
git checkout develop(rama): cambiar de rama
git push: subir commit
touch: fichero vacio
git add: añadir fichero alguna carpeta
git log --graph: ver en forma de lineas las ramas
git add .
git commit --amend: remnplaza el commit que esta en WIP 
git push -f: forzar a subir commit
git log --all --decorate --oneline --graph: ver todas las ramas creadas
git reset y el numero que quieres resetear (git log para ver numero)

subir archivos 
git add staff/miquel-guevara/playground/mondoriantemplate/
git commit -m 'add mondroiantemplates #134'
git push

# siginificados

## drwn

```sh
$ drwx
```

directorio read write execute

```sh
$ lrwx
```

lo mismo pero link l

# BASH

Command-line interface commands typical in BASH

## git commit

```sh
$ git commit

captura una instantánea de los cambios preparados en ese momento del proyecto
```

## pwd

```sh
$ pwd

en que carpeta estamos

Ej: /c/Users/VORPC/workspace/isdi-bootcamp-202402
```

## ls

```sh
$ ls

ver las todas las carpetas dentro del directorio

Ej: README.md  staff/
```

## ls -l

```sh
$ ls -l

todas las carpetas pero mas info

Ej: total 1
-rw-r--r-- 1 VORPC 197609 22 Feb 15 14:54 README.md
drwxr-xr-x 1 VORPC 197609  0 Feb  5 12:35 staff/
```

## touch

```sh
$ touch

se crea un archivo 

Ej: touch hola mundo.
```

## ls -a

```sh
$ ls -a

archivos ocultos

Ej: ./  ../  .git/  README.md  staff/
```

## mkdir

```sh
$ mkdir

crear un directorio

```

## cd

```sh
$ cd

meterte en un directorio

Ej: cd staff/miquel-guevara
```

## mv

```sh
$ mv

mover o cambiar el nombre

Ej: $ mv hello.world/folder-a/folder-b/folder-c
$ hello.world hello.mundo
```

## cd ..

```sh
$ cd ..

tirar hacia detras un directorio

Ej: VORPC@PC MINGW64 ~/workspace/isdi-bootcamp-202402/staff/miquel-guevara (feature/bash)
$ cd ..
VORPC@PC MINGW64 ~/workspace/isdi-bootcamp-202402/staffgit
```

## code

```sh
$ code

para abrir un archivo en visual studio
ej: code workspace/isdi-bootcamp-202402/staff/miquel-guevara/bash/README.md
```

## rm -rf

```sh
$ rm -rf

borrar todo dentro de la carpeta
ej: rm -rf workspace/helloworld
```

## clear (crtl+l)

```sh
$ clear

limpiar consola
```

## taskmgr

```sh
$ taskmgr

administrador de tareas
```

## git log

```sh
$ git log

sirve para ver estado de commit

Ej: $ git log
commit e563b22d81d0f5c47eafa126751b089d07c831a3 (HEAD -> feature/bash, origin/feature/bash)
Author: Mikyseu <mikyseu@gmail.com>
Date:   Thu Feb 15 13:15:09 2024 +0100

    add fix README.md #115

```

## mkdir

```sh
$ mkdir

crear carpeta para añadir archivos dentro (html, sass...).
```

## borrar rama

```sh
$ borrar rama

git branch -d master
```

## git branch

````sh
$ git branch

mirar la rama en la que estamos


# siginificados

## drwn

```sh
$ drwx
```

La (d) indica que es un directorio, la (rwx) son los permisos para el propietario, donde la (r) significa permisos de lectura (read), la (w) permisos de escritura (write) y la letra (x) permisos de ejecución (execute)

```sh
$ lrwx
```

lo mismo pero link l

git log: sirve para ver estado de commit(README.md)
mkdir: crear carpeta para añadir archivos dentro (html, sass....
borrar rama: git branch -d master
git branch: mirar la rama en la que estamos
git branch nombre de la rama que queramos hacer (features/play): crear rama nueva
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
git show feature/space...: muestra contenido de un fichero
borrar ramas: git branch -D ejemplo (feature/playground...)
git push -u origin ejemplo(Develop)
recuperar version anterior checkout y nombre del fichero
git restore staff/miquel-guevara/playground/ para recuperar archivos eliminados

subir archivos
git add staff/miquel-guevara/playground/mondoriantemplate/
git commit -m 'add mondroiantemplates #134'
git push

crear rama
git branch feature/complex
git checkout feature/complex
git add feature/complex
git commit -m 'add complex "code"
git push
git push -u origin feature/complex
si ya hay una forzar rama git push -u origin feature/complex -f

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

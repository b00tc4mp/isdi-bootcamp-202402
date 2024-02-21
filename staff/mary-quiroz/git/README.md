# Git

Command-line interface commands typical in Git.

## git add (Moves changes from the working directory to the staging area.)

```sh
$ git add
git add staff/mary-quiroz/arrays
```

## git branch (This command is your general-purpose branch administration tool. It lets you create isolated development environments within a single repository.)

```sh
$ git branch
git branch feature/arrays
```

## git checkout (In addition to checking out old commits and old file revisions, git checkout is also the means to navigate existing branches. Combined with the basic Git commands, it’s a way to work on a particular line of development.)

```sh
$ git checkout
git checkout feature/arrays
```

## git clean (Removes untracked files from the working directory. This is the logical counterpart to git reset, which (typically) only operates on tracked files.)

```sh
$ git clean
```

## git commit ( Takes the staged snapshot and commits it to the project history. Combined with git add, this defines the basic workflow for all Git users.)

```sh
$ git commit
git commit -m "Commit message in quotes"
```

## git init (Initializes a new Git repository. If you want to place a project under revision control, this is the first command you need to learn.)

```sh
$ git init
```

## git log (Lets you explore the previous revisions of a project. It provides several formatting options for displaying committed snapshots.)

```sh
$ git log
```

## git pull (Pulling is the automated version of git fetch. It downloads a branch from a remote repository, then immediately merges it into the current branch. This is the Git equivalent of svn update.)

```sh
$ git pull
```

## git push (Pushing is the opposite of fetching (with a few caveats). It lets you move a local branch to another repository, which serves as a convenient way to publish contributions. This is like svn commit, but it sends a series of commits instead of a single changeset.)

```sh
$ git push
```

## git reset (Undoes changes to files in the working directory. Resetting lets you clean up or completely remove changes that have not been pushed to a public repository.)ç

```sh
$ git reset
```

## git status (Displays the state of the working directory and the staged snapshot. You’ll want to run this in conjunction with git add and git commit to see exactly what’s being included in the next snapshot.)

```sh
$ git status
```

## git config (With Git, there are many configurations and settings possible. git config is how to assign these settings. Two important settings are user user.name and user.email. These values set what email address and name commits will be from on a local computer. )

```sh
$ git config
git config <setting> <command>
```

## git rm (Remove files or directories from the working index (staging area). With git rm, there are two options to keep in mind: force and cached. Running the command with force deletes the file. The cached command removes the file from the working index. When removing an entire directory, a recursive command is necessary.)

```sh
$ git rm
# To remove a file from the working index (cached):
$ git rm --cached <file name>

# To delete a file (force):
$ git rm -f <file name>

# To remove an entire directory from the working index (cached):
$ git rm -r --cached <directory name>

# To delete an entire directory (force):
$ git rm -r -f <file name>
``





```

# syscall-table

Generate JSON system call table from Linux source. Hosted at https://www.nullmethod.com/syscall-table/.

## Generating JSON
```
$ brew install ctags
$ easy_install python-ctags simplejson
$ tar -zxvf linux-2.6.35.4.tar.gz
$ cd linux-2.6.35.4
$ ctags --fields=afmikKlnsStz --c-kinds=+pc -R
```
:coffee: or :beer:
```
$ python ../gen_syscalls.py > ../www/syscalls-2.6.35.4.json
```

## Web
* uses [jQuery DataTables](http://datatables.net/) to pull JSON file and format table
* links to http://lxr.free-electrons.com for source cross-reference and http://www.kernel.org for manpages
* `www` dir checked into gh-pages branch w/ JSON file using `deploy.sh`

## Other
* only tested on 2.6 kernel versions, needs to be updated
* largely unmaintained, feel free to open a PR and help out!

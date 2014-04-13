# syscall-table

Generate JSON system call table from Linux source. Hosted at http://syscalls.kernelgrok.com.

## Generating JSON
* install ctags
* easy_install python-ctags simplejson
* download and extract the linux source (kernel.org)
* go inside the extracted directory and execute the following cmd:<br>
`ctags --fields=afmikKlnsStz --c-kinds=+pc -R`
:coffee: or :beer:
* python ../gen_syscalls.py > ../www/syscalls-x86.json

## Web
* uses [jQuery DataTables](http://datatables.net/) to pull JSON file and format table
* links to http://lxr.free-electrons.com for source cross-reference and http://www.kernel.org for manpages
* `www` dir checked into gh-pages branch w/ JSON file using `deploy.sh`

## Contributors
* Paolo Stivanin (www.paolostivanin.com)

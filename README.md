# syscall-table
Generate JSON system call table from Linux source. Hosted at http://syscalls.kernelgrok.com.

## Generating JSON
* Install ctags (http://ctags.sourceforge.net)
* `easy_install python-ctags simplejson`
* Download and extract the Linux kernel sources (https://www.kernel.org)
* Move the extraced folder to `/usr/src/linux-$VERSION`
* `chmod +x prepare-files.sh && ./prepare-files.sh`
* :coffee: or :beer:
* `chmod +x gen_syscalls.py && ./gen_syscalls.py > www/syscalls-x86.js`

## Web
* uses [jQuery DataTables](http://datatables.net/) to pull JSON file and format table
* links to http://lxr.free-electrons.com for source cross-reference and http://www.kernel.org for manpages
* `www` dir checked into gh-pages branch w/ JSON file using `deploy.sh`

## Kernel version
Generated from Linux kernel v4.2.0

## Contributors
* Paolo Stivanin (https://github.com/paolostivanin)

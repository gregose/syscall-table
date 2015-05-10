#!/bin/bash

KERNEL_VERSION="4.0.2"
TBL_32="/usr/src/linux-${KERNEL_VERSION}/arch/x86/syscalls/syscall_32.tbl"
TBL_64="/usr/src/linux-${KERNEL_VERSION}/arch/x86/syscalls/syscall_64.tbl"


if [ ! -d /usr/src/linux-${KERNEL_VERSION} ];then
	echo "The Linux source tree doesn't exist"
	exit -1
fi

if [ ! -f ${TBL_32} ] || [ ! -f ${TBL_64} ];then
	echo "File syscall_32.tbl or syscall_64.tbl doesn't exist"
	exit -1
fi

echo "[+] Generating tags, this may take a while..."
ctags --fields=afmikKlnsStz --c-kinds=+pc -R /usr/src/linux-${KERNEL_VERSION}
echo "[+] Tags generated"
echo "[+] Preparing the syscall table file..."
cp -v $TBL_32 .
sed -i '1,8d' syscall_32.tbl
cp -v $TBL_64 .
sed -i '1,8d' syscall_64.tbl
echo "[+] Done :)"

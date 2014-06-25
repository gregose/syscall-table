#!/bin/sh

KERNEL_VERSION="3.15.1"

if [ ! -d /usr/src/linux-${KERNEL_VERSION} ];then
	echo "The Linux source tree doesn't exist"
	exit -1
fi

if [ ! -f /usr/src/linux-${KERNEL_VERSION}/arch/x86/syscalls/syscall_32.tbl ];then
	echo "File syscall_32.tbl doesn't exist"
	exit -1
fi

echo "[+] Generating tags, this may take a while..."
ctags --fields=afmikKlnsStz --c-kinds=+pc -R /usr/src/linux-${KERNEL_VERSION}
echo "[+] Tags generated"
echo "[+] Preparing the syscall table file..."
cp -v /usr/src/linux-${KERNEL_VERSION}/arch/x86/syscalls/syscall_32.tbl .
sed -i '1,8d' syscall_32.tbl
echo "[+] Done :)"

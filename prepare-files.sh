#!/bin/bash

KERNEL_VERSION="4.2"
LINK="https://www.kernel.org/pub/linux/kernel/v4.x/linux-${KERNEL_VERSION}.tar.xz"
DIR="/usr/src"

TBL_32="${DIR}/linux-${KERNEL_VERSION}/arch/x86/entry/syscalls/syscall_32.tbl"
TBL_64="${DIR}/linux-${KERNEL_VERSION}/arch/x86/entry/syscalls/syscall_64.tbl"


if [ $(id -u) != 0 ]
then
    echo "[E] Must be root"
    exit -1
fi

if [ ! -d ${DIR}/linux-${KERNEL_VERSION} ];then
    curl $LINK > /tmp/linux-${KERNEL_VERSION}.tar.xz
    tar xf /tmp/linux-${KERNEL_VERSION}.tar.xz -C $DIR
fi

if [ ! -f ${TBL_32} ] || [ ! -f ${TBL_64} ];then
	echo "File syscall_32.tbl or syscall_64.tbl doesn't exist"
	exit -1
fi

echo "[+] Generating tags, this may take a while..."
ctags --fields=afmikKlnsStz --c-kinds=+pc -R ${DIR}/linux-${KERNEL_VERSION}
echo "[+] Tags generated"
echo "[+] Preparing the syscall table file..."
cp -v $TBL_32 .
sed -i '1,8d' syscall_32.tbl
cp -v $TBL_64 .
sed -i '1,8d' syscall_64.tbl
echo "[+] Done :)"
rm -rf "${DIR}/linux-${KERNEL_VERSION}"
rm -rf "/tmp/linux-${KERNEL_VERSION}.tar.xz"

{
   "aaData": [
      [
         0,
         "sys_read",
         "(unsigned int fd, char __user *buf, size_t count)",
         "0x00",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         562
      ],
      [
         1,
         "sys_write",
         "(unsigned int fd, const char __user *buf, size_t count)",
         "0x01",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "const char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         577
      ],
      [
         2,
         "sys_open",
         "(const char __user *filename, int flags, umode_t mode)",
         "0x02",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "fs/fhandle.c",
         255
      ],
      [
         3,
         "sys_close",
         "(unsigned int fd)",
         "0x03",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         1088
      ],
      [
         4,
         "sys_newstat",
         "(const char __user *filename, struct stat __user *statbuf)",
         "0x04",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 4,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         266
      ],
      [
         5,
         "sys_newfstat",
         "(unsigned int fd, struct stat __user *statbuf)",
         "0x05",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 4,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         304
      ],
      [
         6,
         "sys_newlstat",
         "(const char __user *filename, struct stat __user *statbuf)",
         "0x06",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 4,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         277
      ],
      [
         7,
         "sys_poll",
         "(struct pollfd __user *ufds, unsigned int nfds, int timeout)",
         "0x07",
         {
            "type": "struct pollfd __user *ufds",
            "def": null
         },
         {
            "type": "unsigned int nfds",
            "def": null
         },
         {
            "type": "int timeout",
            "def": null
         },
         "",
         "",
         "fs/select.c",
         957
      ],
      [
         8,
         "sys_lseek",
         "(unsigned int fd, off_t offset, unsigned int whence)",
         "0x08",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "off_t offset",
            "def": null
         },
         {
            "type": "unsigned int whence",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         276
      ],
      [
         9,
         "sys_mmap",
         "( unsigned long addr, unsigned long len, int prot, int flags, int fd, long off)",
         "0x09",
         "param addr*",
         "",
         "",
         "",
         "",
         "arch/microblaze/kernel/sys_microblaze.c",
         36
      ],
      [
         10,
         "sys_mprotect",
         "(unsigned long start, size_t len, unsigned long prot)",
         "0x0a",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned long prot",
            "def": null
         },
         "",
         "",
         "mm/mprotect.c",
         335
      ],
      [
         11,
         "sys_munmap",
         "(unsigned long addr, size_t len)",
         "0x0b",
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "mm/mmap.c",
         2620
      ],
      [
         12,
         "sys_brk",
         "(unsigned long brk)",
         "0x0c",
         {
            "type": "unsigned long brk",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         285
      ],
      [
         13,
         "sys_rt_sigaction",
         "(int, const struct sigaction __user *, struct sigaction __user *, size_t)",
         "0x0d",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct sigaction __user *",
            "def": {
               "line": 99,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaction __user *",
            "def": {
               "line": 99,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "size_t",
            "def": null
         },
         "",
         "kernel/signal.c",
         3349
      ],
      [
         14,
         "sys_rt_sigprocmask",
         "(int how, sigset_t __user *set, sigset_t __user *oset, size_t sigsetsize)",
         "0x0e",
         {
            "type": "int how",
            "def": null
         },
         {
            "type": "sigset_t __user *set",
            "def": null
         },
         {
            "type": "sigset_t __user *oset",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "kernel/signal.c",
         2589
      ],
      [
         15,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         16,
         "sys_ioctl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x10",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg",
            "def": null
         },
         "",
         "",
         "fs/ioctl.c",
         613
      ],
      [
         17,
         "sys_pread64",
         "(unsigned int fd, char __user *buf, size_t count, loff_t pos)",
         "0x11",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "fs/read_write.c",
         594
      ],
      [
         18,
         "sys_pwrite64",
         "(unsigned int fd, const char __user *buf, size_t count, loff_t pos)",
         "0x12",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "const char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "fs/read_write.c",
         614
      ],
      [
         19,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x13",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         852
      ],
      [
         20,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x14",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         872
      ],
      [
         21,
         "sys_access",
         "(const char __user *filename, int mode)",
         "0x15",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         411
      ],
      [
         22,
         "sys_pipe",
         "(int __user *fildes)",
         "0x16",
         {
            "type": "int __user *fildes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/pipe.c",
         799
      ],
      [
         23,
         "sys_select",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timeval __user *tvp)",
         "0x17",
         {
            "type": "int n",
            "def": null
         },
         {
            "type": "fd_set __user *inp",
            "def": null
         },
         {
            "type": "fd_set __user *outp",
            "def": null
         },
         {
            "type": "fd_set __user *exp",
            "def": null
         },
         {
            "type": "struct timeval __user *tvp",
            "def": {
               "line": 15,
               "file": "include/uapi/linux/time.h"
            }
         },
         "fs/select.c",
         622
      ],
      [
         24,
         "sys_sched_yield",
         "(void)",
         "0x18",
         "",
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4205
      ],
      [
         25,
         "sys_mremap",
         "(unsigned long addr, unsigned long old_len, unsigned long new_len, unsigned long flags, unsigned long new_addr)",
         "0x19",
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long old_len",
            "def": null
         },
         {
            "type": "unsigned long new_len",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         {
            "type": "unsigned long new_addr",
            "def": null
         },
         "mm/mremap.c",
         472
      ],
      [
         26,
         "sys_msync",
         "(unsigned long start, size_t len, int flags)",
         "0x1a",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "mm/msync.c",
         31
      ],
      [
         27,
         "sys_mincore",
         "(unsigned long start, size_t len, unsigned char __user * vec)",
         "0x1b",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned char __user * vec",
            "def": null
         },
         "",
         "",
         "mm/mincore.c",
         220
      ],
      [
         28,
         "sys_madvise",
         "(unsigned long start, size_t len, int behavior)",
         "0x1c",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int behavior",
            "def": null
         },
         "",
         "",
         "mm/madvise.c",
         458
      ],
      [
         29,
         "sys_shmget",
         "(key_t key, size_t size, int flag)",
         "0x1d",
         {
            "type": "key_t key",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "",
         "ipc/shm.c",
         617
      ],
      [
         30,
         "sys_shmat",
         "(int shmid, char __user *shmaddr, int shmflg)",
         "0x1e",
         {
            "type": "int shmid",
            "def": null
         },
         {
            "type": "char __user *shmaddr",
            "def": null
         },
         {
            "type": "int shmflg",
            "def": null
         },
         "",
         "",
         "ipc/shm.c",
         1209
      ],
      [
         31,
         "sys_shmctl",
         "(int shmid, int cmd, struct shmid_ds __user *buf)",
         "0x1f",
         {
            "type": "int shmid",
            "def": null
         },
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "struct shmid_ds __user *buf",
            "def": {
               "line": 26,
               "file": "include/uapi/linux/shm.h"
            }
         },
         "",
         "",
         "ipc/shm.c",
         946
      ],
      [
         32,
         "sys_dup",
         "(unsigned int fildes)",
         "0x20",
         {
            "type": "unsigned int fildes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/file.c",
         865
      ],
      [
         33,
         "sys_dup2",
         "(unsigned int oldfd, unsigned int newfd)",
         "0x21",
         {
            "type": "unsigned int oldfd",
            "def": null
         },
         {
            "type": "unsigned int newfd",
            "def": null
         },
         "",
         "",
         "",
         "fs/file.c",
         850
      ],
      [
         34,
         "sys_pause",
         "(void)",
         "0x22",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3546
      ],
      [
         35,
         "sys_nanosleep",
         "(struct timespec __user *rqtp, struct timespec __user *rmtp)",
         "0x23",
         {
            "type": "struct timespec __user *rqtp",
            "def": null
         },
         {
            "type": "struct timespec __user *rmtp",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/hrtimer.c",
         1600
      ],
      [
         36,
         "sys_getitimer",
         "(int which, struct itimerval __user *value)",
         "0x24",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct itimerval __user *value",
            "def": {
               "line": 39,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "kernel/time/itimer.c",
         103
      ],
      [
         37,
         "sys_alarm",
         "(unsigned int seconds)",
         "0x25",
         {
            "type": "unsigned int seconds",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/timer.c",
         1433
      ],
      [
         38,
         "sys_setitimer",
         "(int which, struct itimerval __user *value, struct itimerval __user *ovalue)",
         "0x26",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct itimerval __user *value",
            "def": {
               "line": 39,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerval __user *ovalue",
            "def": {
               "line": 39,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "kernel/time/itimer.c",
         278
      ],
      [
         39,
         "sys_getpid",
         "(void)",
         "0x27",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         830
      ],
      [
         40,
         "sys_sendfile64",
         "(int out_fd, int in_fd, loff_t __user *offset, size_t count)",
         "0x28",
         {
            "type": "int out_fd",
            "def": null
         },
         {
            "type": "int in_fd",
            "def": null
         },
         {
            "type": "loff_t __user *offset",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "fs/read_write.c",
         1274
      ],
      [
         41,
         "sys_socket",
         "(int, int, int)",
         "0x29",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1222
      ],
      [
         42,
         "sys_connect",
         "(int, struct sockaddr __user *, int)",
         "0x2a",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 29,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1533
      ],
      [
         43,
         "sys_accept",
         "(int, struct sockaddr __user *, int __user *)",
         "0x2b",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 29,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1515
      ],
      [
         44,
         "sys_sendto",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int)",
         "0x2c",
         "param addr*",
         "",
         "",
         "",
         "",
         "net/socket.c",
         1628
      ],
      [
         45,
         "sys_recvfrom",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int __user *)",
         "0x2d",
         "param addr*",
         "",
         "",
         "",
         "",
         "net/socket.c",
         1684
      ],
      [
         46,
         "sys_sendmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x2e",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": {
               "line": 57,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1996
      ],
      [
         47,
         "sys_recvmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x2f",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": {
               "line": 57,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         2160
      ],
      [
         48,
         "sys_shutdown",
         "(int, int)",
         "0x30",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         1803
      ],
      [
         49,
         "sys_bind",
         "(int, struct sockaddr __user *, int)",
         "0x31",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 29,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1372
      ],
      [
         50,
         "sys_listen",
         "(int, int)",
         "0x32",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         1401
      ],
      [
         51,
         "sys_getsockname",
         "(int, struct sockaddr __user *, int __user *)",
         "0x33",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 29,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1565
      ],
      [
         52,
         "sys_getpeername",
         "(int, struct sockaddr __user *, int __user *)",
         "0x34",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 29,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1596
      ],
      [
         53,
         "sys_socketpair",
         "(int, int, int, int __user *)",
         "0x35",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "net/socket.c",
         1263
      ],
      [
         54,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user *optval, int optlen)",
         "0x36",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int optlen",
            "def": null
         },
         "net/socket.c",
         1739
      ],
      [
         55,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
         "0x37",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int __user *optlen",
            "def": null
         },
         "net/socket.c",
         1773
      ],
      [
         56,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         57,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         58,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         59,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         60,
         "sys_exit",
         "(int error_code)",
         "0x3c",
         {
            "type": "int error_code",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/exit.c",
         841
      ],
      [
         61,
         "sys_wait4",
         "(pid_t pid, int __user *stat_addr, int options, struct rusage __user *ru)",
         "0x3d",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int __user *stat_addr",
            "def": null
         },
         {
            "type": "int options",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": {
               "line": 23,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/exit.c",
         1584
      ],
      [
         62,
         "sys_kill",
         "(int pid, int sig)",
         "0x3e",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         2898
      ],
      [
         63,
         "sys_newuname",
         "(struct new_utsname __user *name)",
         "0x3f",
         {
            "type": "struct new_utsname __user *name",
            "def": {
               "line": 24,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1141
      ],
      [
         64,
         "sys_semget",
         "(key_t key, int nsems, int semflg)",
         "0x40",
         {
            "type": "key_t key",
            "def": null
         },
         {
            "type": "int nsems",
            "def": null
         },
         {
            "type": "int semflg",
            "def": null
         },
         "",
         "",
         "ipc/sem.c",
         572
      ],
      [
         65,
         "sys_semop",
         "(int semid, struct sembuf __user *sops, unsigned nsops)",
         "0x41",
         {
            "type": "int semid",
            "def": null
         },
         {
            "type": "struct sembuf __user *sops",
            "def": {
               "line": 38,
               "file": "include/uapi/linux/sem.h"
            }
         },
         {
            "type": "unsigned nsops",
            "def": null
         },
         "",
         "",
         "ipc/sem.c",
         2017
      ],
      [
         66,
         "sys_semctl",
         "(int semid, int semnum, int cmd, unsigned long arg)",
         "0x42",
         {
            "type": "int semid",
            "def": null
         },
         {
            "type": "int semnum",
            "def": null
         },
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg",
            "def": null
         },
         "",
         "ipc/sem.c",
         1577
      ],
      [
         67,
         "sys_shmdt",
         "(char __user *shmaddr)",
         "0x43",
         {
            "type": "char __user *shmaddr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "ipc/shm.c",
         1225
      ],
      [
         68,
         "sys_msgget",
         "(key_t key, int msgflg)",
         "0x44",
         {
            "type": "key_t key",
            "def": null
         },
         {
            "type": "int msgflg",
            "def": null
         },
         "",
         "",
         "",
         "ipc/msg.c",
         241
      ],
      [
         69,
         "sys_msgsnd",
         "(int msqid, struct msgbuf __user *msgp, size_t msgsz, int msgflg)",
         "0x45",
         {
            "type": "int msqid",
            "def": null
         },
         {
            "type": "struct msgbuf __user *msgp",
            "def": null
         },
         {
            "type": "size_t msgsz",
            "def": null
         },
         {
            "type": "int msgflg",
            "def": null
         },
         "",
         "ipc/msg.c",
         720
      ],
      [
         70,
         "sys_msgrcv",
         "(int msqid, struct msgbuf __user *msgp, size_t msgsz, long msgtyp, int msgflg)",
         "0x46",
         {
            "type": "int msqid",
            "def": null
         },
         {
            "type": "struct msgbuf __user *msgp",
            "def": null
         },
         {
            "type": "size_t msgsz",
            "def": null
         },
         {
            "type": "long msgtyp",
            "def": null
         },
         {
            "type": "int msgflg",
            "def": null
         },
         "ipc/msg.c",
         986
      ],
      [
         71,
         "sys_msgctl",
         "(int msqid, int cmd, struct msqid_ds __user *buf)",
         "0x47",
         {
            "type": "int msqid",
            "def": null
         },
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "struct msqid_ds __user *buf",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/msg.h"
            }
         },
         "",
         "",
         "ipc/msg.c",
         522
      ],
      [
         72,
         "sys_fcntl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x48",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg",
            "def": null
         },
         "",
         "",
         "fs/fcntl.c",
         356
      ],
      [
         73,
         "sys_flock",
         "(unsigned int fd, unsigned int cmd)",
         "0x49",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         "",
         "",
         "",
         "fs/locks.c",
         1899
      ],
      [
         74,
         "sys_fsync",
         "(unsigned int fd)",
         "0x4a",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/sync.c",
         220
      ],
      [
         75,
         "sys_fdatasync",
         "(unsigned int fd)",
         "0x4b",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/sync.c",
         225
      ],
      [
         76,
         "sys_truncate",
         "(const char __user *path, long length)",
         "0x4c",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "long length",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         140
      ],
      [
         77,
         "sys_ftruncate",
         "(unsigned int fd, unsigned long length)",
         "0x4d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned long length",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         199
      ],
      [
         78,
         "sys_getdents",
         "(unsigned int fd, struct linux_dirent __user *dirent, unsigned int count)",
         "0x4e",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct linux_dirent __user *dirent",
            "def": {
               "line": 137,
               "file": "fs/readdir.c"
            }
         },
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "fs/readdir.c",
         196
      ],
      [
         79,
         "sys_getcwd",
         "(char __user *buf, unsigned long size)",
         "0x4f",
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "unsigned long size",
            "def": null
         },
         "",
         "",
         "",
         "fs/dcache.c",
         3235
      ],
      [
         80,
         "sys_chdir",
         "(const char __user *filename)",
         "0x50",
         {
            "type": "const char __user *filename",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         416
      ],
      [
         81,
         "sys_fchdir",
         "(unsigned int fd)",
         "0x51",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         442
      ],
      [
         82,
         "sys_rename",
         "(const char __user *oldname, const char __user *newname)",
         "0x52",
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         4398
      ],
      [
         83,
         "sys_mkdir",
         "(const char __user *pathname, umode_t mode)",
         "0x53",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         3574
      ],
      [
         84,
         "sys_rmdir",
         "(const char __user *pathname)",
         "0x54",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         3700
      ],
      [
         85,
         "sys_creat",
         "(const char __user *pathname, umode_t mode)",
         "0x55",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         1050
      ],
      [
         86,
         "sys_link",
         "(const char __user *oldname, const char __user *newname)",
         "0x56",
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         4060
      ],
      [
         87,
         "sys_unlink",
         "(const char __user *pathname)",
         "0x57",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         3851
      ],
      [
         88,
         "sys_symlink",
         "(const char __user *old, const char __user *new)",
         "0x58",
         {
            "type": "const char __user *old",
            "def": null
         },
         {
            "type": "const char __user *new",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         3908
      ],
      [
         89,
         "sys_readlink",
         "(const char __user *path, char __user *buf, int bufsiz)",
         "0x59",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "int bufsiz",
            "def": null
         },
         "",
         "",
         "fs/stat.c",
         349
      ],
      [
         90,
         "sys_chmod",
         "(const char __user *filename, umode_t mode)",
         "0x5a",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         560
      ],
      [
         91,
         "sys_fchmod",
         "(unsigned int fd, umode_t mode)",
         "0x5b",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         529
      ],
      [
         92,
         "sys_chown",
         "(const char __user *filename, uid_t user, gid_t group)",
         "0x5c",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         639
      ],
      [
         93,
         "sys_fchown",
         "(unsigned int fd, uid_t user, gid_t group)",
         "0x5d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         650
      ],
      [
         94,
         "sys_lchown",
         "(const char __user *filename, uid_t user, gid_t group)",
         "0x5e",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         644
      ],
      [
         95,
         "sys_umask",
         "(int mask)",
         "0x5f",
         {
            "type": "int mask",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1646
      ],
      [
         96,
         "sys_gettimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0x60",
         {
            "type": "struct timeval __user *tv",
            "def": {
               "line": 15,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct timezone __user *tz",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/time.c",
         102
      ],
      [
         97,
         "sys_getrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0x61",
         {
            "type": "unsigned int resource",
            "def": null
         },
         {
            "type": "struct rlimit __user *rlim",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         1290
      ],
      [
         98,
         "sys_getrusage",
         "(int who, struct rusage __user *ru)",
         "0x62",
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": {
               "line": 23,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "",
         "",
         "kernel/sys.c",
         1624
      ],
      [
         99,
         "sys_sysinfo",
         "(struct sysinfo __user *info)",
         "0x63",
         {
            "type": "struct sysinfo __user *info",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         2332
      ],
      [
         100,
         "sys_times",
         "(struct tms __user *tbuf)",
         "0x64",
         {
            "type": "struct tms __user *tbuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         895
      ],
      [
         101,
         "sys_ptrace",
         "(long request, long pid, unsigned long addr, unsigned long data)",
         "0x65",
         {
            "type": "long request",
            "def": null
         },
         {
            "type": "long pid",
            "def": null
         },
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long data",
            "def": null
         },
         "",
         "kernel/ptrace.c",
         1032
      ],
      [
         102,
         "sys_getuid",
         "(void)",
         "0x66",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         858
      ],
      [
         103,
         "sys_syslog",
         "(int type, char __user *buf, int len)",
         "0x67",
         {
            "type": "int type",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "int len",
            "def": null
         },
         "",
         "",
         "kernel/printk/printk.c",
         1386
      ],
      [
         104,
         "sys_getgid",
         "(void)",
         "0x68",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         870
      ],
      [
         105,
         "sys_setuid",
         "(uid_t uid)",
         "0x69",
         {
            "type": "uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         533
      ],
      [
         106,
         "sys_setgid",
         "(gid_t gid)",
         "0x6a",
         {
            "type": "gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         386
      ],
      [
         107,
         "sys_geteuid",
         "(void)",
         "0x6b",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         864
      ],
      [
         108,
         "sys_getegid",
         "(void)",
         "0x6c",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         876
      ],
      [
         109,
         "sys_setpgid",
         "(pid_t pid, pid_t pgid)",
         "0x6d",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "pid_t pgid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         919
      ],
      [
         110,
         "sys_getppid",
         "(void)",
         "0x6e",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         847
      ],
      [
         111,
         "sys_getpgrp",
         "(void)",
         "0x6f",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1020
      ],
      [
         112,
         "sys_setsid",
         "(void)",
         "0x70",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1066
      ],
      [
         113,
         "sys_setreuid",
         "(uid_t ruid, uid_t euid)",
         "0x71",
         {
            "type": "uid_t ruid",
            "def": null
         },
         {
            "type": "uid_t euid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         462
      ],
      [
         114,
         "sys_setregid",
         "(gid_t rgid, gid_t egid)",
         "0x72",
         {
            "type": "gid_t rgid",
            "def": null
         },
         {
            "type": "gid_t egid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         329
      ],
      [
         115,
         "sys_getgroups",
         "(int gidsetsize, gid_t __user *grouplist)",
         "0x73",
         {
            "type": "int gidsetsize",
            "def": null
         },
         {
            "type": "gid_t __user *grouplist",
            "def": null
         },
         "",
         "",
         "",
         "kernel/groups.c",
         190
      ],
      [
         116,
         "sys_setgroups",
         "(int gidsetsize, gid_t __user *grouplist)",
         "0x74",
         {
            "type": "int gidsetsize",
            "def": null
         },
         {
            "type": "gid_t __user *grouplist",
            "def": null
         },
         "",
         "",
         "",
         "kernel/groups.c",
         227
      ],
      [
         117,
         "sys_setresuid",
         "(uid_t ruid, uid_t euid, uid_t suid)",
         "0x75",
         {
            "type": "uid_t ruid",
            "def": null
         },
         {
            "type": "uid_t euid",
            "def": null
         },
         {
            "type": "uid_t suid",
            "def": null
         },
         "",
         "",
         "kernel/sys.c",
         580
      ],
      [
         118,
         "sys_getresuid",
         "(uid_t __user *ruid, uid_t __user *euid, uid_t __user *suid)",
         "0x76",
         {
            "type": "uid_t __user *ruid",
            "def": null
         },
         {
            "type": "uid_t __user *euid",
            "def": null
         },
         {
            "type": "uid_t __user *suid",
            "def": null
         },
         "",
         "",
         "kernel/sys.c",
         645
      ],
      [
         119,
         "sys_setresgid",
         "(gid_t rgid, gid_t egid, gid_t sgid)",
         "0x77",
         {
            "type": "gid_t rgid",
            "def": null
         },
         {
            "type": "gid_t egid",
            "def": null
         },
         {
            "type": "gid_t sgid",
            "def": null
         },
         "",
         "",
         "kernel/sys.c",
         667
      ],
      [
         120,
         "sys_getresgid",
         "(gid_t __user *rgid, gid_t __user *egid, gid_t __user *sgid)",
         "0x78",
         {
            "type": "gid_t __user *rgid",
            "def": null
         },
         {
            "type": "gid_t __user *egid",
            "def": null
         },
         {
            "type": "gid_t __user *sgid",
            "def": null
         },
         "",
         "",
         "kernel/sys.c",
         719
      ],
      [
         121,
         "sys_getpgid",
         "(pid_t pid)",
         "0x79",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         990
      ],
      [
         122,
         "sys_setfsuid",
         "(uid_t uid)",
         "0x7a",
         {
            "type": "uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         746
      ],
      [
         123,
         "sys_setfsgid",
         "(gid_t gid)",
         "0x7b",
         {
            "type": "gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         785
      ],
      [
         124,
         "sys_getsid",
         "(pid_t pid)",
         "0x7c",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1027
      ],
      [
         125,
         "sys_capget",
         "(cap_user_header_t header, cap_user_data_t dataptr)",
         "0x7d",
         {
            "type": "cap_user_header_t header",
            "def": null
         },
         {
            "type": "cap_user_data_t dataptr",
            "def": null
         },
         "",
         "",
         "",
         "kernel/capability.c",
         149
      ],
      [
         126,
         "sys_capset",
         "(cap_user_header_t header, const cap_user_data_t data)",
         "0x7e",
         {
            "type": "cap_user_header_t header",
            "def": null
         },
         {
            "type": "const cap_user_data_t data",
            "def": null
         },
         "",
         "",
         "",
         "kernel/capability.c",
         223
      ],
      [
         127,
         "sys_rt_sigpending",
         "(sigset_t __user *set, size_t sigsetsize)",
         "0x7f",
         {
            "type": "sigset_t __user *set",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         2679
      ],
      [
         128,
         "sys_rt_sigtimedwait",
         "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct timespec __user *uts, size_t sigsetsize)",
         "0x80",
         {
            "type": "const sigset_t __user *uthese",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         {
            "type": "const struct timespec __user *uts",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "kernel/signal.c",
         2862
      ],
      [
         129,
         "sys_rt_sigqueueinfo",
         "(int pid, int sig, siginfo_t __user *uinfo)",
         "0x81",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3010
      ],
      [
         130,
         "sys_rt_sigsuspend",
         "(sigset_t __user *unewset, size_t sigsetsize)",
         "0x82",
         {
            "type": "sigset_t __user *unewset",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         3574
      ],
      [
         131,
         "sys_sigaltstack",
         "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
         "0x83",
         {
            "type": "const struct sigaltstack __user *uss",
            "def": {
               "line": 113,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaltstack __user *uoss",
            "def": {
               "line": 113,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         "",
         "",
         "",
         "kernel/signal.c",
         3206
      ],
      [
         132,
         "sys_utime",
         "(char __user *filename, struct utimbuf __user *times)",
         "0x84",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct utimbuf __user *times",
            "def": {
               "line": 6,
               "file": "include/uapi/linux/utime.h"
            }
         },
         "",
         "",
         "",
         "fs/utimes.c",
         27
      ],
      [
         133,
         "sys_mknod",
         "(const char __user *filename, umode_t mode, unsigned dev)",
         "0x85",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         {
            "type": "unsigned dev",
            "def": null
         },
         "",
         "",
         "fs/namei.c",
         3518
      ],
      [
         134,
         "not implemented",
         "",
         "0x86",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         135,
         "sys_personality",
         "(unsigned int personality)",
         "0x87",
         {
            "type": "unsigned int personality",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/exec_domain.c",
         50
      ],
      [
         136,
         "sys_ustat",
         "(unsigned dev, struct ustat __user *ubuf)",
         "0x88",
         {
            "type": "unsigned dev",
            "def": null
         },
         {
            "type": "struct ustat __user *ubuf",
            "def": {
               "line": 189,
               "file": "include/linux/types.h"
            }
         },
         "",
         "",
         "",
         "fs/statfs.c",
         228
      ],
      [
         137,
         "sys_statfs",
         "(const char __user * path, struct statfs __user *buf)",
         "0x89",
         {
            "type": "const char __user * path",
            "def": null
         },
         {
            "type": "struct statfs __user *buf",
            "def": {
               "line": 22,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "",
         "fs/statfs.c",
         172
      ],
      [
         138,
         "sys_fstatfs",
         "(unsigned int fd, struct statfs __user *buf)",
         "0x8a",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct statfs __user *buf",
            "def": {
               "line": 22,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "",
         "fs/statfs.c",
         193
      ],
      [
         139,
         "sys_sysfs",
         "(int option, unsigned long arg1, unsigned long arg2)",
         "0x8b",
         {
            "type": "int option",
            "def": null
         },
         {
            "type": "unsigned long arg1",
            "def": null
         },
         {
            "type": "unsigned long arg2",
            "def": null
         },
         "",
         "",
         "fs/filesystems.c",
         184
      ],
      [
         140,
         "sys_getpriority",
         "(int which, int who)",
         "0x8c",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         245
      ],
      [
         141,
         "sys_setpriority",
         "(int which, int who, int niceval)",
         "0x8d",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "int niceval",
            "def": null
         },
         "",
         "",
         "kernel/sys.c",
         175
      ],
      [
         142,
         "sys_sched_setparam",
         "(pid_t pid, struct sched_param __user *param)",
         "0x8e",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": {
               "line": 9,
               "file": "include/linux/sched.h"
            }
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         3815
      ],
      [
         143,
         "sys_sched_getparam",
         "(pid_t pid, struct sched_param __user *param)",
         "0x8f",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": {
               "line": 9,
               "file": "include/linux/sched.h"
            }
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         3889
      ],
      [
         144,
         "sys_sched_setscheduler",
         "(pid_t pid, int policy, struct sched_param __user *param)",
         "0x90",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int policy",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": {
               "line": 9,
               "file": "include/linux/sched.h"
            }
         },
         "",
         "",
         "kernel/sched/core.c",
         3798
      ],
      [
         145,
         "sys_sched_getscheduler",
         "(pid_t pid)",
         "0x91",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         3860
      ],
      [
         146,
         "sys_sched_get_priority_max",
         "(int policy)",
         "0x92",
         {
            "type": "int policy",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4414
      ],
      [
         147,
         "sys_sched_get_priority_min",
         "(int policy)",
         "0x93",
         {
            "type": "int policy",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4441
      ],
      [
         148,
         "sys_sched_rr_get_interval",
         "(pid_t pid, struct timespec __user *interval)",
         "0x94",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct timespec __user *interval",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         4470
      ],
      [
         149,
         "sys_mlock",
         "(unsigned long start, size_t len)",
         "0x95",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "mm/mlock.c",
         607
      ],
      [
         150,
         "sys_munlock",
         "(unsigned long start, size_t len)",
         "0x96",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "mm/mlock.c",
         643
      ],
      [
         151,
         "sys_mlockall",
         "(int flags)",
         "0x97",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         683
      ],
      [
         152,
         "sys_munlockall",
         "(void)",
         "0x98",
         "",
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         714
      ],
      [
         153,
         "sys_vhangup",
         "(void)",
         "0x99",
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         1107
      ],
      [
         154,
         "sys_modify_ldt",
         "(int, void __user *, unsigned long)",
         "0x9a",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "void __user *",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         155,
         "sys_pivot_root",
         "(const char __user *new_root, const char __user *put_old)",
         "0x9b",
         {
            "type": "const char __user *new_root",
            "def": null
         },
         {
            "type": "const char __user *put_old",
            "def": null
         },
         "",
         "",
         "",
         "fs/namespace.c",
         2936
      ],
      [
         156,
         "sys_sysctl",
         "(struct __sysctl_args __user *args)",
         "0x9c",
         {
            "type": "struct __sysctl_args __user *args",
            "def": {
               "line": 36,
               "file": "include/uapi/linux/sysctl.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sysctl_binary.c",
         1420
      ],
      [
         157,
         "sys_prctl",
         "(int option, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0x9d",
         {
            "type": "int option",
            "def": null
         },
         {
            "type": "unsigned long arg2",
            "def": null
         },
         {
            "type": "unsigned long arg3",
            "def": null
         },
         {
            "type": "unsigned long arg4",
            "def": null
         },
         {
            "type": "unsigned long arg5",
            "def": null
         },
         "kernel/sys.c",
         2052
      ],
      [
         158,
         "sys_arch_prctl",
         "(int, unsigned long)",
         "0x9e",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         159,
         "sys_adjtimex",
         "(struct timex __user *txc_p)",
         "0x9f",
         {
            "type": "struct timex __user *txc_p",
            "def": {
               "line": 64,
               "file": "include/uapi/linux/timex.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/time/time.c",
         214
      ],
      [
         160,
         "sys_setrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0xa0",
         {
            "type": "unsigned int resource",
            "def": null
         },
         {
            "type": "struct rlimit __user *rlim",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         1490
      ],
      [
         161,
         "sys_chroot",
         "(const char __user *filename)",
         "0xa1",
         {
            "type": "const char __user *filename",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         467
      ],
      [
         162,
         "sys_sync",
         "(void)",
         "0xa2",
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         102
      ],
      [
         163,
         "sys_acct",
         "(const char __user *name)",
         "0xa3",
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/acct.c",
         270
      ],
      [
         164,
         "sys_settimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0xa4",
         {
            "type": "struct timeval __user *tv",
            "def": {
               "line": 15,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct timezone __user *tz",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/time.c",
         189
      ],
      [
         165,
         "sys_mount",
         "(char __user *dev_name, char __user *dir_name, char __user *type, unsigned long flags, void __user *data)",
         "0xa5",
         {
            "type": "char __user *dev_name",
            "def": null
         },
         {
            "type": "char __user *dir_name",
            "def": null
         },
         {
            "type": "char __user *type",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         {
            "type": "void __user *data",
            "def": null
         },
         "fs/namespace.c",
         2852
      ],
      [
         166,
         "sys_umount",
         "(char __user *name, int flags)",
         "0xa6",
         {
            "type": "char __user *name",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/namespace.c",
         1560
      ],
      [
         167,
         "sys_swapon",
         "(const char __user *specialfile, int swap_flags)",
         "0xa7",
         {
            "type": "const char __user *specialfile",
            "def": null
         },
         {
            "type": "int swap_flags",
            "def": null
         },
         "",
         "",
         "",
         "mm/swapfile.c",
         2345
      ],
      [
         168,
         "sys_swapoff",
         "(const char __user *specialfile)",
         "0xa8",
         {
            "type": "const char __user *specialfile",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/swapfile.c",
         1802
      ],
      [
         169,
         "sys_reboot",
         "(int magic1, int magic2, unsigned int cmd, void __user *arg)",
         "0xa9",
         {
            "type": "int magic1",
            "def": null
         },
         {
            "type": "int magic2",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "void __user *arg",
            "def": null
         },
         "",
         "kernel/reboot.c",
         280
      ],
      [
         170,
         "sys_sethostname",
         "(char __user *name, int len)",
         "0xaa",
         {
            "type": "char __user *name",
            "def": null
         },
         {
            "type": "int len",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         1215
      ],
      [
         171,
         "sys_setdomainname",
         "(char __user *name, int len)",
         "0xab",
         {
            "type": "char __user *name",
            "def": null
         },
         {
            "type": "int len",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         1266
      ],
      [
         172,
         "sys_iopl",
         "(unsigned int)",
         "0xac",
         {
            "type": "unsigned int",
            "def": null
         },
         "",
         "",
         "",
         "",
         "arch/x86/kernel/ioport.c",
         96
      ],
      [
         173,
         "sys_ioperm",
         "(unsigned long, unsigned long, int)",
         "0xad",
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         174,
         "not implemented",
         "",
         "0xae",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         175,
         "sys_init_module",
         "(void __user *umod, unsigned long len, const char __user *uargs)",
         "0xaf",
         {
            "type": "void __user *umod",
            "def": null
         },
         {
            "type": "unsigned long len",
            "def": null
         },
         {
            "type": "const char __user *uargs",
            "def": null
         },
         "",
         "",
         "kernel/module.c",
         3408
      ],
      [
         176,
         "sys_delete_module",
         "(const char __user *name_user, unsigned int flags)",
         "0xb0",
         {
            "type": "const char __user *name_user",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "kernel/module.c",
         793
      ],
      [
         177,
         "not implemented",
         "",
         "0xb1",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         178,
         "not implemented",
         "",
         "0xb2",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         179,
         "sys_quotactl",
         "(unsigned int cmd, const char __user *special, qid_t id, void __user *addr)",
         "0xb3",
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "const char __user *special",
            "def": null
         },
         {
            "type": "qid_t id",
            "def": null
         },
         {
            "type": "void __user *addr",
            "def": null
         },
         "",
         "fs/quota/quota.c",
         760
      ],
      [
         180,
         "not implemented",
         "",
         "0xb4",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         181,
         "not implemented",
         "",
         "0xb5",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         182,
         "not implemented",
         "",
         "0xb6",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         183,
         "not implemented",
         "",
         "0xb7",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         184,
         "not implemented",
         "",
         "0xb8",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         185,
         "not implemented",
         "",
         "0xb9",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         186,
         "sys_gettid",
         "(void)",
         "0xba",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         836
      ],
      [
         187,
         "sys_readahead",
         "(int fd, loff_t offset, size_t count)",
         "0xbb",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "mm/readahead.c",
         562
      ],
      [
         188,
         "sys_setxattr",
         "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xbc",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "fs/xattr.c",
         390
      ],
      [
         189,
         "sys_lsetxattr",
         "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xbd",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "fs/xattr.c",
         397
      ],
      [
         190,
         "sys_fsetxattr",
         "(int fd, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xbe",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "fs/xattr.c",
         404
      ],
      [
         191,
         "sys_getxattr",
         "(const char __user *path, const char __user *name, void __user *value, size_t size)",
         "0xbf",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "fs/xattr.c",
         490
      ],
      [
         192,
         "sys_lgetxattr",
         "(const char __user *path, const char __user *name, void __user *value, size_t size)",
         "0xc0",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "fs/xattr.c",
         496
      ],
      [
         193,
         "sys_fgetxattr",
         "(int fd, const char __user *name, void __user *value, size_t size)",
         "0xc1",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "fs/xattr.c",
         502
      ],
      [
         194,
         "sys_listxattr",
         "(const char __user *path, char __user *list, size_t size)",
         "0xc2",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *list",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/xattr.c",
         572
      ],
      [
         195,
         "sys_llistxattr",
         "(const char __user *path, char __user *list, size_t size)",
         "0xc3",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *list",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/xattr.c",
         578
      ],
      [
         196,
         "sys_flistxattr",
         "(int fd, char __user *list, size_t size)",
         "0xc4",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "char __user *list",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/xattr.c",
         584
      ],
      [
         197,
         "sys_removexattr",
         "(const char __user *path, const char __user *name)",
         "0xc5",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "fs/xattr.c",
         637
      ],
      [
         198,
         "sys_lremovexattr",
         "(const char __user *path, const char __user *name)",
         "0xc6",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "fs/xattr.c",
         643
      ],
      [
         199,
         "sys_fremovexattr",
         "(int fd, const char __user *name)",
         "0xc7",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "fs/xattr.c",
         649
      ],
      [
         200,
         "sys_tkill",
         "(int pid, int sig)",
         "0xc8",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         2980
      ],
      [
         201,
         "sys_time",
         "(time_t __user *tloc)",
         "0xc9",
         {
            "type": "time_t __user *tloc",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         895
      ],
      [
         202,
         "sys_futex",
         "(u32 __user *uaddr, int op, u32 val, struct timespec __user *utime, u32 __user *uaddr2, u32 val3)",
         "0xca",
         "param addr*",
         "",
         "",
         "",
         "",
         "kernel/futex.c",
         2972
      ],
      [
         203,
         "sys_sched_setaffinity",
         "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
         "0xcb",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int len",
            "def": null
         },
         {
            "type": "unsigned long __user *user_mask_ptr",
            "def": null
         },
         "",
         "",
         "kernel/sched/core.c",
         4118
      ],
      [
         204,
         "sys_sched_getaffinity",
         "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
         "0xcc",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int len",
            "def": null
         },
         {
            "type": "unsigned long __user *user_mask_ptr",
            "def": null
         },
         "",
         "",
         "kernel/sched/core.c",
         4169
      ],
      [
         205,
         "not implemented",
         "",
         "0xcd",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         206,
         "sys_io_setup",
         "(unsigned nr_reqs, aio_context_t __user *ctx)",
         "0xce",
         {
            "type": "unsigned nr_reqs",
            "def": null
         },
         {
            "type": "aio_context_t __user *ctx",
            "def": null
         },
         "",
         "",
         "",
         "fs/aio.c",
         1307
      ],
      [
         207,
         "sys_io_destroy",
         "(aio_context_t ctx)",
         "0xcf",
         {
            "type": "aio_context_t ctx",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/aio.c",
         1343
      ],
      [
         208,
         "sys_io_getevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct timespec __user *timeout)",
         "0xd0",
         {
            "type": "aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "long min_nr",
            "def": null
         },
         {
            "type": "long nr",
            "def": null
         },
         {
            "type": "struct io_event __user *events",
            "def": {
               "line": 58,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         {
            "type": "struct timespec __user *timeout",
            "def": null
         },
         "fs/aio.c",
         1717
      ],
      [
         209,
         "sys_io_submit",
         "(aio_context_t, long, struct iocb __user * __user *)",
         "0xd1",
         {
            "type": "aio_context_t",
            "def": null
         },
         {
            "type": "long",
            "def": null
         },
         {
            "type": "struct iocb __user * __user *",
            "def": null
         },
         "",
         "",
         "fs/aio.c",
         1628
      ],
      [
         210,
         "sys_io_cancel",
         "(aio_context_t ctx_id, struct iocb __user *iocb, struct io_event __user *result)",
         "0xd2",
         {
            "type": "aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "struct iocb __user *iocb",
            "def": null
         },
         {
            "type": "struct io_event __user *result",
            "def": {
               "line": 58,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         "",
         "",
         "fs/aio.c",
         1665
      ],
      [
         211,
         "not implemented",
         "",
         "0xd3",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         212,
         "sys_lookup_dcookie",
         "(u64 cookie64, char __user *buf, size_t len)",
         "0xd4",
         {
            "type": "u64 cookie64",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "fs/dcookies.c",
         149
      ],
      [
         213,
         "sys_epoll_create",
         "(int size)",
         "0xd5",
         {
            "type": "int size",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         1807
      ],
      [
         214,
         "not implemented",
         "",
         "0xd6",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         215,
         "not implemented",
         "",
         "0xd7",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         216,
         "sys_remap_file_pages",
         "(unsigned long start, unsigned long size, unsigned long prot, unsigned long pgoff, unsigned long flags)",
         "0xd8",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "unsigned long size",
            "def": null
         },
         {
            "type": "unsigned long prot",
            "def": null
         },
         {
            "type": "unsigned long pgoff",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "mm/mmap.c",
         2630
      ],
      [
         217,
         "sys_getdents64",
         "(unsigned int fd, struct linux_dirent64 __user *dirent, unsigned int count)",
         "0xd9",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct linux_dirent64 __user *dirent",
            "def": {
               "line": 4,
               "file": "include/linux/dirent.h"
            }
         },
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "fs/readdir.c",
         277
      ],
      [
         218,
         "sys_set_tid_address",
         "(int __user *tidptr)",
         "0xda",
         {
            "type": "int __user *tidptr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         1195
      ],
      [
         219,
         "sys_restart_syscall",
         "(void)",
         "0xdb",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         2502
      ],
      [
         220,
         "sys_semtimedop",
         "(int semid, struct sembuf __user *sops, unsigned nsops, const struct timespec __user *timeout)",
         "0xdc",
         {
            "type": "int semid",
            "def": null
         },
         {
            "type": "struct sembuf __user *sops",
            "def": {
               "line": 38,
               "file": "include/uapi/linux/sem.h"
            }
         },
         {
            "type": "unsigned nsops",
            "def": null
         },
         {
            "type": "const struct timespec __user *timeout",
            "def": null
         },
         "",
         "ipc/sem.c",
         1782
      ],
      [
         221,
         "sys_fadvise64",
         "(int fd, loff_t offset, size_t len, int advice)",
         "0xdd",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int advice",
            "def": null
         },
         "",
         "mm/fadvise.c",
         157
      ],
      [
         222,
         "sys_timer_create",
         "(clockid_t which_clock, struct sigevent __user *timer_event_spec, timer_t __user * created_timer_id)",
         "0xde",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct sigevent __user *timer_event_spec",
            "def": {
               "line": 285,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         {
            "type": "timer_t __user * created_timer_id",
            "def": null
         },
         "",
         "",
         "kernel/time/posix-timers.c",
         595
      ],
      [
         223,
         "sys_timer_settime",
         "(timer_t timer_id, int flags, const struct itimerspec __user *new_setting, struct itimerspec __user *old_setting)",
         "0xdf",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "const struct itimerspec __user *new_setting",
            "def": {
               "line": 34,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerspec __user *old_setting",
            "def": {
               "line": 34,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "kernel/time/posix-timers.c",
         874
      ],
      [
         224,
         "sys_timer_gettime",
         "(timer_t timer_id, struct itimerspec __user *setting)",
         "0xe0",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         {
            "type": "struct itimerspec __user *setting",
            "def": {
               "line": 34,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         770
      ],
      [
         225,
         "sys_timer_getoverrun",
         "(timer_t timer_id)",
         "0xe1",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         806
      ],
      [
         226,
         "sys_timer_delete",
         "(timer_t timer_id)",
         "0xe2",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         937
      ],
      [
         227,
         "sys_clock_settime",
         "(clockid_t which_clock, const struct timespec __user *tp)",
         "0xe3",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "const struct timespec __user *tp",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1005
      ],
      [
         228,
         "sys_clock_gettime",
         "(clockid_t which_clock, struct timespec __user *tp)",
         "0xe4",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct timespec __user *tp",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1020
      ],
      [
         229,
         "sys_clock_getres",
         "(clockid_t which_clock, struct timespec __user *tp)",
         "0xe5",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct timespec __user *tp",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1061
      ],
      [
         230,
         "sys_clock_nanosleep",
         "(clockid_t which_clock, int flags, const struct timespec __user *rqtp, struct timespec __user *rmtp)",
         "0xe6",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "const struct timespec __user *rqtp",
            "def": null
         },
         {
            "type": "struct timespec __user *rmtp",
            "def": null
         },
         "",
         "kernel/time/posix-timers.c",
         1090
      ],
      [
         231,
         "sys_exit_group",
         "(int error_code)",
         "0xe7",
         {
            "type": "int error_code",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/exit.c",
         883
      ],
      [
         232,
         "sys_epoll_wait",
         "(int epfd, struct epoll_event __user *events, int maxevents, int timeout)",
         "0xe8",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *events",
            "def": {
               "line": 59,
               "file": "include/uapi/linux/eventpoll.h"
            }
         },
         {
            "type": "int maxevents",
            "def": null
         },
         {
            "type": "int timeout",
            "def": null
         },
         "",
         "fs/eventpoll.c",
         1961
      ],
      [
         233,
         "sys_epoll_ctl",
         "(int epfd, int op, int fd, struct epoll_event __user *event)",
         "0xe9",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "int op",
            "def": null
         },
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *event",
            "def": {
               "line": 59,
               "file": "include/uapi/linux/eventpoll.h"
            }
         },
         "",
         "fs/eventpoll.c",
         1820
      ],
      [
         234,
         "sys_tgkill",
         "(int tgid, int pid, int sig)",
         "0xea",
         {
            "type": "int tgid",
            "def": null
         },
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         2964
      ],
      [
         235,
         "sys_utimes",
         "(char __user *filename, struct timeval __user *utimes)",
         "0xeb",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct timeval __user *utimes",
            "def": {
               "line": 15,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "fs/utimes.c",
         231
      ],
      [
         236,
         "not implemented",
         "",
         "0xec",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         237,
         "sys_mbind",
         "(unsigned long start, unsigned long len, unsigned long mode, const unsigned long __user *nmask, unsigned long maxnode, unsigned flags)",
         "0xed",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/mempolicy.c",
         1301
      ],
      [
         238,
         "sys_set_mempolicy",
         "(int mode, const unsigned long __user *nmask, unsigned long maxnode)",
         "0xee",
         {
            "type": "int mode",
            "def": null
         },
         {
            "type": "const unsigned long __user *nmask",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         "",
         "",
         "mm/mempolicy.c",
         1323
      ],
      [
         239,
         "sys_get_mempolicy",
         "(int __user *policy, unsigned long __user *nmask, unsigned long maxnode, unsigned long addr, unsigned long flags)",
         "0xef",
         {
            "type": "int __user *policy",
            "def": null
         },
         {
            "type": "unsigned long __user *nmask",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "mm/mempolicy.c",
         1438
      ],
      [
         240,
         "sys_mq_open",
         "(const char __user *name, int oflag, umode_t mode, struct mq_attr __user *attr)",
         "0xf0",
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "int oflag",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         {
            "type": "struct mq_attr __user *attr",
            "def": {
               "line": 25,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "ipc/mqueue.c",
         778
      ],
      [
         241,
         "sys_mq_unlink",
         "(const char __user *name)",
         "0xf1",
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "ipc/mqueue.c",
         859
      ],
      [
         242,
         "sys_mq_timedsend",
         "(mqd_t mqdes, const char __user *msg_ptr, size_t msg_len, unsigned int msg_prio, const struct timespec __user *abs_timeout)",
         "0xf2",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const char __user *msg_ptr",
            "def": null
         },
         {
            "type": "size_t msg_len",
            "def": null
         },
         {
            "type": "unsigned int msg_prio",
            "def": null
         },
         {
            "type": "const struct timespec __user *abs_timeout",
            "def": null
         },
         "ipc/mqueue.c",
         954
      ],
      [
         243,
         "sys_mq_timedreceive",
         "(mqd_t mqdes, char __user *msg_ptr, size_t msg_len, unsigned int __user *msg_prio, const struct timespec __user *abs_timeout)",
         "0xf3",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "char __user *msg_ptr",
            "def": null
         },
         {
            "type": "size_t msg_len",
            "def": null
         },
         {
            "type": "unsigned int __user *msg_prio",
            "def": null
         },
         {
            "type": "const struct timespec __user *abs_timeout",
            "def": null
         },
         "ipc/mqueue.c",
         1074
      ],
      [
         244,
         "sys_mq_notify",
         "(mqd_t mqdes, const struct sigevent __user *notification)",
         "0xf4",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct sigevent __user *notification",
            "def": {
               "line": 285,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         "",
         "",
         "",
         "ipc/mqueue.c",
         1182
      ],
      [
         245,
         "sys_mq_getsetattr",
         "(mqd_t mqdes, const struct mq_attr __user *mqstat, struct mq_attr __user *omqstat)",
         "0xf5",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct mq_attr __user *mqstat",
            "def": {
               "line": 25,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         {
            "type": "struct mq_attr __user *omqstat",
            "def": {
               "line": 25,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "",
         "ipc/mqueue.c",
         1314
      ],
      [
         246,
         "sys_kexec_load",
         "(unsigned long entry, unsigned long nr_segments, struct kexec_segment __user *segments, unsigned long flags)",
         "0xf6",
         {
            "type": "unsigned long entry",
            "def": null
         },
         {
            "type": "unsigned long nr_segments",
            "def": null
         },
         {
            "type": "struct kexec_segment __user *segments",
            "def": {
               "line": 85,
               "file": "include/linux/kexec.h"
            }
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "kernel/kexec.c",
         1239
      ],
      [
         247,
         "sys_waitid",
         "(int which, pid_t pid, struct siginfo __user *infop, int options, struct rusage __user *ru)",
         "0xf7",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct siginfo __user *infop",
            "def": {
               "line": 19,
               "file": "arch/ia64/include/uapi/asm/siginfo.h"
            }
         },
         {
            "type": "int options",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": {
               "line": 23,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "kernel/exit.c",
         1516
      ],
      [
         248,
         "sys_add_key",
         "(const char __user *_type, const char __user *_description, const void __user *_payload, size_t plen, key_serial_t destringid)",
         "0xf8",
         {
            "type": "const char __user *_type",
            "def": null
         },
         {
            "type": "const char __user *_description",
            "def": null
         },
         {
            "type": "const void __user *_payload",
            "def": null
         },
         {
            "type": "size_t plen",
            "def": null
         },
         {
            "type": "key_serial_t destringid",
            "def": null
         },
         "security/keys/keyctl.c",
         60
      ],
      [
         249,
         "sys_request_key",
         "(const char __user *_type, const char __user *_description, const char __user *_callout_info, key_serial_t destringid)",
         "0xf9",
         {
            "type": "const char __user *_type",
            "def": null
         },
         {
            "type": "const char __user *_description",
            "def": null
         },
         {
            "type": "const char __user *_callout_info",
            "def": null
         },
         {
            "type": "key_serial_t destringid",
            "def": null
         },
         "",
         "security/keys/keyctl.c",
         164
      ],
      [
         250,
         "sys_keyctl",
         "(int cmd, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0xfa",
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg2",
            "def": null
         },
         {
            "type": "unsigned long arg3",
            "def": null
         },
         {
            "type": "unsigned long arg4",
            "def": null
         },
         {
            "type": "unsigned long arg5",
            "def": null
         },
         "security/keys/keyctl.c",
         1559
      ],
      [
         251,
         "sys_ioprio_set",
         "(int which, int who, int ioprio)",
         "0xfb",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "int ioprio",
            "def": null
         },
         "",
         "",
         "block/ioprio.c",
         61
      ],
      [
         252,
         "sys_ioprio_get",
         "(int which, int who)",
         "0xfc",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         "",
         "",
         "",
         "block/ioprio.c",
         178
      ],
      [
         253,
         "sys_inotify_init",
         "(void)",
         "0xfd",
         "",
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         694
      ],
      [
         254,
         "sys_inotify_add_watch",
         "(int fd, const char __user *path, u32 mask)",
         "0xfe",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "u32 mask",
            "def": null
         },
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         699
      ],
      [
         255,
         "sys_inotify_rm_watch",
         "(int fd, __s32 wd)",
         "0xff",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "__s32 wd",
            "def": null
         },
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         744
      ],
      [
         256,
         "sys_migrate_pages",
         "(pid_t pid, unsigned long maxnode, const unsigned long __user *from, const unsigned long __user *to)",
         "0x100",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         {
            "type": "const unsigned long __user *from",
            "def": null
         },
         {
            "type": "const unsigned long __user *to",
            "def": null
         },
         "",
         "mm/mempolicy.c",
         1342
      ],
      [
         257,
         "sys_openat",
         "(int dfd, const char __user *filename, int flags, umode_t mode)",
         "0x101",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "fs/open.c",
         1035
      ],
      [
         258,
         "sys_mkdirat",
         "(int dfd, const char __user * pathname, umode_t mode)",
         "0x102",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * pathname",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "fs/namei.c",
         3549
      ],
      [
         259,
         "sys_mknodat",
         "(int dfd, const char __user * filename, umode_t mode, unsigned dev)",
         "0x103",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         {
            "type": "unsigned dev",
            "def": null
         },
         "",
         "fs/namei.c",
         3476
      ],
      [
         260,
         "sys_fchownat",
         "(int dfd, const char __user *filename, uid_t user, gid_t group, int flag)",
         "0x104",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "fs/open.c",
         607
      ],
      [
         261,
         "sys_futimesat",
         "(int dfd, const char __user *filename, struct timeval __user *utimes)",
         "0x105",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct timeval __user *utimes",
            "def": {
               "line": 15,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "fs/utimes.c",
         203
      ],
      [
         262,
         "sys_newfstatat",
         "(int dfd, const char __user *filename, struct stat __user *statbuf, int flag)",
         "0x106",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 4,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "fs/stat.c",
         291
      ],
      [
         263,
         "sys_unlinkat",
         "(int dfd, const char __user * pathname, int flag)",
         "0x107",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * pathname",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "",
         "fs/namei.c",
         3840
      ],
      [
         264,
         "sys_renameat",
         "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname)",
         "0x108",
         {
            "type": "int olddfd",
            "def": null
         },
         {
            "type": "const char __user * oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user * newname",
            "def": null
         },
         "",
         "fs/namei.c",
         4392
      ],
      [
         265,
         "sys_linkat",
         "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, int flags)",
         "0x109",
         {
            "type": "int olddfd",
            "def": null
         },
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "fs/namei.c",
         3995
      ],
      [
         266,
         "sys_symlinkat",
         "(const char __user * oldname, int newdfd, const char __user * newname)",
         "0x10a",
         {
            "type": "const char __user * oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user * newname",
            "def": null
         },
         "",
         "",
         "fs/namei.c",
         3877
      ],
      [
         267,
         "sys_readlinkat",
         "(int dfd, const char __user *path, char __user *buf, int bufsiz)",
         "0x10b",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "int bufsiz",
            "def": null
         },
         "",
         "fs/stat.c",
         315
      ],
      [
         268,
         "sys_fchmodat",
         "(int dfd, const char __user * filename, umode_t mode)",
         "0x10c",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         542
      ],
      [
         269,
         "sys_faccessat",
         "(int dfd, const char __user *filename, int mode)",
         "0x10d",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         335
      ],
      [
         270,
         "sys_pselect6",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timespec __user *tsp, void __user *sig)",
         "0x10e",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/select.c",
         700
      ],
      [
         271,
         "sys_ppoll",
         "(struct pollfd __user *ufds, unsigned int nfds, struct timespec __user *tsp, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x10f",
         {
            "type": "struct pollfd __user *ufds",
            "def": null
         },
         {
            "type": "unsigned int nfds",
            "def": null
         },
         {
            "type": "struct timespec __user *tsp",
            "def": null
         },
         {
            "type": "const sigset_t __user *sigmask",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "fs/select.c",
         991
      ],
      [
         272,
         "sys_unshare",
         "(unsigned long unshare_flags)",
         "0x110",
         {
            "type": "unsigned long unshare_flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         1917
      ],
      [
         273,
         "sys_set_robust_list",
         "(struct robust_list_head __user *head, size_t len)",
         "0x111",
         {
            "type": "struct robust_list_head __user *head",
            "def": {
               "line": 69,
               "file": "include/uapi/linux/futex.h"
            }
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "kernel/futex.c",
         2716
      ],
      [
         274,
         "sys_get_robust_list",
         "(int pid, struct robust_list_head __user * __user *head_ptr, size_t __user *len_ptr)",
         "0x112",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "struct robust_list_head __user * __user *head_ptr",
            "def": {
               "line": 69,
               "file": "include/uapi/linux/futex.h"
            }
         },
         {
            "type": "size_t __user *len_ptr",
            "def": null
         },
         "",
         "",
         "kernel/futex.c",
         2738
      ],
      [
         275,
         "sys_splice",
         "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
         "0x113",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/splice.c",
         1677
      ],
      [
         276,
         "sys_tee",
         "(int fdin, int fdout, size_t len, unsigned int flags)",
         "0x114",
         {
            "type": "int fdin",
            "def": null
         },
         {
            "type": "int fdout",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "fs/splice.c",
         2010
      ],
      [
         277,
         "sys_sync_file_range",
         "(int fd, loff_t offset, loff_t nbytes, unsigned int flags)",
         "0x115",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "loff_t nbytes",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "fs/sync.c",
         277
      ],
      [
         278,
         "sys_vmsplice",
         "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
         "0x116",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *iov",
            "def": null
         },
         {
            "type": "unsigned long nr_segs",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "fs/splice.c",
         1631
      ],
      [
         279,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
         "0x117",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/migrate.c",
         1452
      ],
      [
         280,
         "sys_utimensat",
         "(int dfd, const char __user *filename, struct timespec __user *utimes, int flags)",
         "0x118",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct timespec __user *utimes",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/utimes.c",
         185
      ],
      [
         281,
         "sys_epoll_pwait",
         "(int epfd, struct epoll_event __user *events, int maxevents, int timeout, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x119",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         2007
      ],
      [
         282,
         "sys_signalfd",
         "(int ufd, sigset_t __user *user_mask, size_t sizemask)",
         "0x11a",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "sigset_t __user *user_mask",
            "def": null
         },
         {
            "type": "size_t sizemask",
            "def": null
         },
         "",
         "",
         "fs/signalfd.c",
         308
      ],
      [
         283,
         "sys_timerfd_create",
         "(int clockid, int flags)",
         "0x11b",
         {
            "type": "int clockid",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/timerfd.c",
         376
      ],
      [
         284,
         "sys_eventfd",
         "(unsigned int count)",
         "0x11c",
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventfd.c",
         445
      ],
      [
         285,
         "sys_fallocate",
         "(int fd, int mode, loff_t offset, loff_t len)",
         "0x11d",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "loff_t len",
            "def": null
         },
         "",
         "fs/open.c",
         318
      ],
      [
         286,
         "sys_timerfd_settime",
         "(int ufd, int flags, const struct itimerspec __user *utmr, struct itimerspec __user *otmr)",
         "0x11e",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "const struct itimerspec __user *utmr",
            "def": {
               "line": 34,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerspec __user *otmr",
            "def": {
               "line": 34,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "fs/timerfd.c",
         514
      ],
      [
         287,
         "sys_timerfd_gettime",
         "(int ufd, struct itimerspec __user *otmr)",
         "0x11f",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "struct itimerspec __user *otmr",
            "def": {
               "line": 34,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "fs/timerfd.c",
         532
      ],
      [
         288,
         "sys_accept4",
         "(int, struct sockaddr __user *, int __user *, int)",
         "0x120",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 29,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "int __user *",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "net/socket.c",
         1434
      ],
      [
         289,
         "sys_signalfd4",
         "(int ufd, sigset_t __user *user_mask, size_t sizemask, int flags)",
         "0x121",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "sigset_t __user *user_mask",
            "def": null
         },
         {
            "type": "size_t sizemask",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/signalfd.c",
         254
      ],
      [
         290,
         "sys_eventfd2",
         "(unsigned int count, int flags)",
         "0x122",
         {
            "type": "unsigned int count",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/eventfd.c",
         420
      ],
      [
         291,
         "sys_epoll_create1",
         "(int flags)",
         "0x123",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         1764
      ],
      [
         292,
         "sys_dup3",
         "(unsigned int oldfd, unsigned int newfd, int flags)",
         "0x124",
         {
            "type": "unsigned int oldfd",
            "def": null
         },
         {
            "type": "unsigned int newfd",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "fs/file.c",
         816
      ],
      [
         293,
         "sys_pipe2",
         "(int __user *fildes, int flags)",
         "0x125",
         {
            "type": "int __user *fildes",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/pipe.c",
         777
      ],
      [
         294,
         "sys_inotify_init1",
         "(int flags)",
         "0x126",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         669
      ],
      [
         295,
         "sys_preadv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
         "0x127",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "unsigned long pos_l",
            "def": null
         },
         {
            "type": "unsigned long pos_h",
            "def": null
         },
         "fs/read_write.c",
         898
      ],
      [
         296,
         "sys_pwritev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
         "0x128",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "unsigned long pos_l",
            "def": null
         },
         {
            "type": "unsigned long pos_h",
            "def": null
         },
         "fs/read_write.c",
         922
      ],
      [
         297,
         "sys_rt_tgsigqueueinfo",
         "(pid_t tgid, pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0x129",
         {
            "type": "pid_t tgid",
            "def": null
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         "",
         "kernel/signal.c",
         3051
      ],
      [
         298,
         "sys_perf_event_open",
         "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
         "0x12a",
         {
            "type": "struct perf_event_attr __user *attr_uptr",
            "def": {
               "line": 269,
               "file": "include/uapi/linux/perf_event.h"
            }
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int cpu",
            "def": null
         },
         {
            "type": "int group_fd",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "kernel/events/core.c",
         7873
      ],
      [
         299,
         "sys_recvmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct timespec __user *timeout)",
         "0x12b",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 68,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned int vlen",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         {
            "type": "struct timespec __user *timeout",
            "def": null
         },
         "net/socket.c",
         2276
      ],
      [
         300,
         "sys_fanotify_init",
         "(unsigned int flags, unsigned int event_f_flags)",
         "0x12c",
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "unsigned int event_f_flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/notify/fanotify/fanotify_user.c",
         690
      ],
      [
         301,
         "sys_fanotify_mark",
         "(int fanotify_fd, unsigned int flags, u64 mask, int fd, const char __user *pathname)",
         "0x12d",
         {
            "type": "int fanotify_fd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "u64 mask",
            "def": null
         },
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "fs/notify/fanotify/fanotify_user.c",
         800
      ],
      [
         302,
         "sys_prlimit64",
         "(pid_t pid, unsigned int resource, const struct rlimit64 __user *new_rlim, struct rlimit64 __user *old_rlim)",
         "0x12e",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int resource",
            "def": null
         },
         {
            "type": "const struct rlimit64 __user *new_rlim",
            "def": {
               "line": 49,
               "file": "include/uapi/linux/resource.h"
            }
         },
         {
            "type": "struct rlimit64 __user *old_rlim",
            "def": {
               "line": 49,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/sys.c",
         1448
      ],
      [
         303,
         "sys_name_to_handle_at",
         "(int dfd, const char __user *name, struct file_handle __user *handle, int __user *mnt_id, int flag)",
         "0x12f",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "struct file_handle __user *handle",
            "def": null
         },
         {
            "type": "int __user *mnt_id",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "fs/fhandle.c",
         92
      ],
      [
         304,
         "sys_open_by_handle_at",
         "(int mountdirfd, struct file_handle __user *handle, int flags)",
         "0x130",
         {
            "type": "int mountdirfd",
            "def": null
         },
         {
            "type": "struct file_handle __user *handle",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "fs/fhandle.c",
         255
      ],
      [
         305,
         "sys_clock_adjtime",
         "(clockid_t which_clock, struct timex __user *tx)",
         "0x131",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct timex __user *tx",
            "def": {
               "line": 64,
               "file": "include/uapi/linux/timex.h"
            }
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1038
      ],
      [
         306,
         "sys_syncfs",
         "(int fd)",
         "0x132",
         {
            "type": "int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/sync.c",
         149
      ],
      [
         307,
         "sys_sendmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags)",
         "0x133",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 68,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned int vlen",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "net/socket.c",
         2063
      ],
      [
         308,
         "sys_setns",
         "(int fd, int nstype)",
         "0x134",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int nstype",
            "def": null
         },
         "",
         "",
         "",
         "kernel/nsproxy.c",
         221
      ],
      [
         309,
         "sys_getcpu",
         "(unsigned __user *cpu, unsigned __user *node, struct getcpu_cache __user *cache)",
         "0x135",
         {
            "type": "unsigned __user *cpu",
            "def": null
         },
         {
            "type": "unsigned __user *node",
            "def": null
         },
         {
            "type": "struct getcpu_cache __user *cache",
            "def": {
               "line": 14,
               "file": "include/linux/getcpu.h"
            }
         },
         "",
         "",
         "kernel/sys.c",
         2253
      ],
      [
         310,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x136",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/process_vm_access.c",
         287
      ],
      [
         311,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x137",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/process_vm_access.c",
         294
      ],
      [
         312,
         "sys_kcmp",
         "(pid_t pid1, pid_t pid2, int type, unsigned long idx1, unsigned long idx2)",
         "0x138",
         {
            "type": "pid_t pid1",
            "def": null
         },
         {
            "type": "pid_t pid2",
            "def": null
         },
         {
            "type": "int type",
            "def": null
         },
         {
            "type": "unsigned long idx1",
            "def": null
         },
         {
            "type": "unsigned long idx2",
            "def": null
         },
         "kernel/kcmp.c",
         97
      ],
      [
         313,
         "sys_finit_module",
         "(int fd, const char __user *uargs, int flags)",
         "0x139",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *uargs",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "kernel/module.c",
         3428
      ],
      [
         314,
         "sys_sched_setattr",
         "(pid_t pid, struct sched_attr __user *attr, unsigned int flags)",
         "0x13a",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_attr __user *attr",
            "def": {
               "line": 110,
               "file": "include/linux/sched.h"
            }
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "kernel/sched/core.c",
         3826
      ],
      [
         315,
         "sys_sched_getattr",
         "(pid_t pid, struct sched_attr __user *attr, unsigned int size, unsigned int flags)",
         "0x13b",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_attr __user *attr",
            "def": {
               "line": 110,
               "file": "include/linux/sched.h"
            }
         },
         {
            "type": "unsigned int size",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "kernel/sched/core.c",
         3967
      ],
      [
         316,
         "sys_renameat2",
         "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, unsigned int flags)",
         "0x13c",
         {
            "type": "int olddfd",
            "def": null
         },
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "fs/namei.c",
         4248
      ],
      [
         317,
         "sys_seccomp",
         "(unsigned int op, unsigned int flags, const char __user *uargs)",
         "0x13d",
         {
            "type": "unsigned int op",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "const char __user *uargs",
            "def": null
         },
         "",
         "",
         "kernel/seccomp.c",
         866
      ],
      [
         318,
         "sys_getrandom",
         "(char __user *buf, size_t count, unsigned int flags)",
         "0x13e",
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "drivers/char/random.c",
         1523
      ],
      [
         319,
         "sys_memfd_create",
         "(const char __user *uname_ptr, unsigned int flags)",
         "0x13f",
         {
            "type": "const char __user *uname_ptr",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "mm/shmem.c",
         2913
      ],
      [
         320,
         "sys_kexec_file_load",
         "(int kernel_fd, int initrd_fd, unsigned long cmdline_len, const char __user *cmdline_ptr, unsigned long flags)",
         "0x140",
         {
            "type": "int kernel_fd",
            "def": null
         },
         {
            "type": "int initrd_fd",
            "def": null
         },
         {
            "type": "unsigned long cmdline_len",
            "def": null
         },
         {
            "type": "const char __user *cmdline_ptr",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "kernel/kexec.c",
         1384
      ],
      [
         321,
         "sys_bpf",
         "(int cmd, union bpf_attr *attr, unsigned int size)",
         "0x141",
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "union bpf_attr *attr",
            "def": null
         },
         {
            "type": "unsigned int size",
            "def": null
         },
         "",
         "",
         "kernel/bpf/syscall.c",
         551
      ],
      [
         322,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         323,
         "not implemented",
         "",
         "0x143",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         324,
         "not implemented",
         "",
         "0x144",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         325,
         "not implemented",
         "",
         "0x145",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         326,
         "not implemented",
         "",
         "0x146",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         327,
         "not implemented",
         "",
         "0x147",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         328,
         "compat_sys_rt_sigaction",
         "(int, const struct compat_sigaction __user *, struct compat_sigaction __user *, compat_size_t)",
         "0x148",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct compat_sigaction __user *",
            "def": {
               "line": 135,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "struct compat_sigaction __user *",
            "def": {
               "line": 135,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "compat_size_t",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         330,
         "compat_sys_ioctl",
         "(unsigned int fd, unsigned int cmd, compat_ulong_t arg)",
         "0x14a",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "compat_ulong_t arg",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         331,
         "compat_sys_readv",
         "(compat_ulong_t fd, const struct compat_iovec __user *vec, compat_ulong_t vlen)",
         "0x14b",
         {
            "type": "compat_ulong_t fd",
            "def": null
         },
         {
            "type": "const struct compat_iovec __user *vec",
            "def": {
               "line": 167,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "compat_ulong_t vlen",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         332,
         "compat_sys_writev",
         "(compat_ulong_t fd, const struct compat_iovec __user *vec, compat_ulong_t vlen)",
         "0x14c",
         {
            "type": "compat_ulong_t fd",
            "def": null
         },
         {
            "type": "const struct compat_iovec __user *vec",
            "def": {
               "line": 167,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "compat_ulong_t vlen",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         333,
         "compat_sys_recvfrom",
         "(int fd, void __user *buf, compat_size_t len, unsigned flags, struct sockaddr __user *addr, int __user *addrlen)",
         "0x14d",
         "param addr*",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         334,
         "compat_sys_sendmsg",
         "(int fd, struct compat_msghdr __user *msg, unsigned flags)",
         "0x14e",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_msghdr __user *msg",
            "def": {
               "line": 11,
               "file": "include/net/compat.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         335,
         "compat_sys_recvmsg",
         "(int fd, struct compat_msghdr __user *msg, unsigned int flags)",
         "0x14f",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_msghdr __user *msg",
            "def": {
               "line": 11,
               "file": "include/net/compat.h"
            }
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         337,
         "compat_sys_ptrace",
         "(compat_long_t request, compat_long_t pid, compat_long_t addr, compat_long_t data)",
         "0x151",
         {
            "type": "compat_long_t request",
            "def": null
         },
         {
            "type": "compat_long_t pid",
            "def": null
         },
         {
            "type": "compat_long_t addr",
            "def": null
         },
         {
            "type": "compat_long_t data",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         338,
         "compat_sys_rt_sigpending",
         "(compat_sigset_t __user *uset, compat_size_t sigsetsize)",
         "0x152",
         {
            "type": "compat_sigset_t __user *uset",
            "def": null
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         339,
         "compat_sys_rt_sigtimedwait",
         "(compat_sigset_t __user *uthese, struct compat_siginfo __user *uinfo, struct compat_timespec __user *uts, compat_size_t sigsetsize)",
         "0x153",
         {
            "type": "compat_sigset_t __user *uthese",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *uinfo",
            "def": {
               "line": 158,
               "file": "arch/arm64/include/asm/compat.h"
            }
         },
         {
            "type": "struct compat_timespec __user *uts",
            "def": {
               "line": 69,
               "file": "arch/arm64/include/asm/compat.h"
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         340,
         "compat_sys_rt_sigqueueinfo",
         "(compat_pid_t pid, int sig, struct compat_siginfo __user *uinfo)",
         "0x154",
         {
            "type": "compat_pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *uinfo",
            "def": {
               "line": 158,
               "file": "arch/arm64/include/asm/compat.h"
            }
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         341,
         "compat_sys_sigaltstack",
         "(const compat_stack_t __user *uss_ptr, compat_stack_t __user *uoss_ptr)",
         "0x155",
         {
            "type": "const compat_stack_t __user *uss_ptr",
            "def": null
         },
         {
            "type": "compat_stack_t __user *uoss_ptr",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         342,
         "compat_sys_timer_create",
         "(clockid_t which_clock, struct compat_sigevent __user *timer_event_spec, timer_t __user *created_timer_id)",
         "0x156",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct compat_sigevent __user *timer_event_spec",
            "def": {
               "line": 221,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "timer_t __user *created_timer_id",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         343,
         "compat_sys_mq_notify",
         "(mqd_t mqdes, const struct compat_sigevent __user *u_notification)",
         "0x157",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct compat_sigevent __user *u_notification",
            "def": {
               "line": 221,
               "file": "include/linux/compat.h"
            }
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         344,
         "compat_sys_kexec_load",
         "(compat_ulong_t entry, compat_ulong_t nr_segments, struct compat_kexec_segment __user *, compat_ulong_t flags)",
         "0x158",
         {
            "type": "compat_ulong_t entry",
            "def": null
         },
         {
            "type": "compat_ulong_t nr_segments",
            "def": null
         },
         {
            "type": "struct compat_kexec_segment __user *",
            "def": {
               "line": 104,
               "file": "include/linux/kexec.h"
            }
         },
         {
            "type": "compat_ulong_t flags",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         345,
         "compat_sys_waitid",
         "(int, compat_pid_t, struct compat_siginfo __user *, int, struct compat_rusage __user *)",
         "0x159",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "compat_pid_t",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *",
            "def": {
               "line": 158,
               "file": "arch/arm64/include/asm/compat.h"
            }
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct compat_rusage __user *",
            "def": {
               "line": 177,
               "file": "include/linux/compat.h"
            }
         },
         "not found",
         ""
      ],
      [
         346,
         "compat_sys_set_robust_list",
         "(struct compat_robust_list_head __user *head, compat_size_t len)",
         "0x15a",
         {
            "type": "struct compat_robust_list_head __user *head",
            "def": {
               "line": 281,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "compat_size_t len",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         347,
         "compat_sys_get_robust_list",
         "(int pid, compat_uptr_t __user *head_ptr, compat_size_t __user *len_ptr)",
         "0x15b",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "compat_uptr_t __user *head_ptr",
            "def": null
         },
         {
            "type": "compat_size_t __user *len_ptr",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         348,
         "compat_sys_vmsplice",
         "(int fd, const struct compat_iovec __user *, unsigned int nr_segs, unsigned int flags)",
         "0x15c",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const struct compat_iovec __user *",
            "def": {
               "line": 167,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "unsigned int nr_segs",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         349,
         "compat_sys_move_pages",
         "(pid_t pid, compat_ulong_t nr_pages, __u32 __user *pages, const int __user *nodes, int __user *status, int flags)",
         "0x15d",
         "param addr*",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         350,
         "compat_sys_preadv64",
         "(unsigned long fd, const struct compat_iovec __user *vec, unsigned long vlen, loff_t pos)",
         "0x15e",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct compat_iovec __user *vec",
            "def": {
               "line": 167,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         351,
         "compat_sys_pwritev64",
         "(unsigned long fd, const struct compat_iovec __user *vec, unsigned long vlen, loff_t pos)",
         "0x15f",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct compat_iovec __user *vec",
            "def": {
               "line": 167,
               "file": "include/linux/compat.h"
            }
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         352,
         "compat_sys_rt_tgsigqueueinfo",
         "(compat_pid_t tgid, compat_pid_t pid, int sig, struct compat_siginfo __user *uinfo)",
         "0x160",
         {
            "type": "compat_pid_t tgid",
            "def": null
         },
         {
            "type": "compat_pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *uinfo",
            "def": {
               "line": 158,
               "file": "arch/arm64/include/asm/compat.h"
            }
         },
         "",
         "not found",
         ""
      ],
      [
         353,
         "compat_sys_recvmmsg",
         "(int fd, struct compat_mmsghdr __user *mmsg, unsigned vlen, unsigned int flags, struct compat_timespec __user *timeout)",
         "0x161",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_mmsghdr __user *mmsg",
            "def": {
               "line": 21,
               "file": "include/net/compat.h"
            }
         },
         {
            "type": "unsigned vlen",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "struct compat_timespec __user *timeout",
            "def": {
               "line": 69,
               "file": "arch/arm64/include/asm/compat.h"
            }
         },
         "not found",
         ""
      ],
      [
         354,
         "compat_sys_sendmmsg",
         "(int fd, struct compat_mmsghdr __user *mmsg, unsigned vlen, unsigned int flags)",
         "0x162",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_mmsghdr __user *mmsg",
            "def": {
               "line": 21,
               "file": "include/net/compat.h"
            }
         },
         {
            "type": "unsigned vlen",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         355,
         "compat_sys_process_vm_readv",
         "(compat_pid_t pid, const struct compat_iovec __user *lvec, compat_ulong_t liovcnt, const struct compat_iovec __user *rvec, compat_ulong_t riovcnt, compat_ulong_t flags)",
         "0x163",
         "param addr*",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         356,
         "compat_sys_process_vm_writev",
         "(compat_pid_t pid, const struct compat_iovec __user *lvec, compat_ulong_t liovcnt, const struct compat_iovec __user *rvec, compat_ulong_t riovcnt, compat_ulong_t flags)",
         "0x164",
         "param addr*",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         357,
         "compat_sys_setsockopt",
         "(int fd, int level, int optname, char __user *optval, unsigned int optlen)",
         "0x165",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "unsigned int optlen",
            "def": null
         },
         "not found",
         ""
      ],
      [
         358,
         "compat_sys_getsockopt",
         "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
         "0x166",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int __user *optlen",
            "def": null
         },
         "not found",
         ""
      ],
      [
         359,
         "compat_sys_io_setup",
         "(unsigned nr_reqs, u32 __user *ctx32p)",
         "0x167",
         {
            "type": "unsigned nr_reqs",
            "def": null
         },
         {
            "type": "u32 __user *ctx32p",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         360,
         "compat_sys_io_submit",
         "(compat_aio_context_t ctx_id, int nr, u32 __user *iocb)",
         "0x168",
         {
            "type": "compat_aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "int nr",
            "def": null
         },
         {
            "type": "u32 __user *iocb",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ]
   ]
}

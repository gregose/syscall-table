{
   "aaData": [
      [
         0,
         "sys_restart_syscall",
         "(void)",
         "0x00",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         2475
      ],
      [
         1,
         "sys_exit",
         "(int error_code)",
         "0x01",
         {
            "type": "int error_code",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/exit.c",
         935
      ],
      [
         2,
         "sys_fork",
         "(void)",
         "0x02",
         "",
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         2116
      ],
      [
         3,
         "sys_read",
         "(unsigned int fd, char __user *buf, size_t count)",
         "0x03",
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
         566
      ],
      [
         4,
         "sys_write",
         "(unsigned int fd, const char __user *buf, size_t count)",
         "0x04",
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
         581
      ],
      [
         5,
         "sys_open",
         "(const char __user *filename, int flags, umode_t mode)",
         "0x05",
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
         257
      ],
      [
         6,
         "sys_close",
         "(unsigned int fd)",
         "0x06",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         1153
      ],
      [
         7,
         "sys_waitpid",
         "(pid_t pid, int __user *stat_addr, int options)",
         "0x07",
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
         "",
         "",
         "kernel/exit.c",
         1692
      ],
      [
         8,
         "sys_creat",
         "(const char __user *pathname, umode_t mode)",
         "0x08",
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
         1115
      ],
      [
         9,
         "sys_link",
         "(const char __user *oldname, const char __user *newname)",
         "0x09",
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
         4313
      ],
      [
         10,
         "sys_unlink",
         "(const char __user *pathname)",
         "0x0a",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4097
      ],
      [
         11,
         "sys_execve",
         "(const char __user *filename, const char __user *const __user *argv, const char __user *const __user *envp)",
         "0x0b",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "const char __user *const __user *argv",
            "def": null
         },
         {
            "type": "const char __user *const __user *envp",
            "def": null
         },
         "",
         "",
         "fs/exec.c",
         1919
      ],
      [
         12,
         "sys_chdir",
         "(const char __user *filename)",
         "0x0c",
         {
            "type": "const char __user *filename",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         434
      ],
      [
         13,
         "sys_time",
         "(time_t __user *tloc)",
         "0x0d",
         {
            "type": "time_t __user *tloc",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         903
      ],
      [
         14,
         "sys_mknod",
         "(const char __user *filename, umode_t mode, unsigned dev)",
         "0x0e",
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
         3785
      ],
      [
         15,
         "sys_chmod",
         "(const char __user *filename, umode_t mode)",
         "0x0f",
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
         575
      ],
      [
         16,
         "sys_lchown16",
         "(const char __user *filename, old_uid_t user, old_gid_t group)",
         "0x10",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "old_uid_t user",
            "def": null
         },
         {
            "type": "old_gid_t group",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         26
      ],
      [
         17,
         "not implemented",
         "",
         "0x11",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         18,
         "sys_stat",
         "(const char __user *filename, struct __old_kernel_stat __user *statbuf)",
         "0x12",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct __old_kernel_stat __user *statbuf",
            "def": {
               "line": 5,
               "file": "arch/arm/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         244
      ],
      [
         19,
         "sys_lseek",
         "(unsigned int fd, off_t offset, unsigned int whence)",
         "0x13",
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
         304
      ],
      [
         20,
         "sys_getpid",
         "(void)",
         "0x14",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         838
      ],
      [
         21,
         "sys_mount",
         "(char __user *dev_name, char __user *dir_name, char __user *type, unsigned long flags, void __user *data)",
         "0x15",
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
         3034
      ],
      [
         22,
         "sys_oldumount",
         "(char __user *name)",
         "0x16",
         {
            "type": "char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namespace.c",
         1728
      ],
      [
         23,
         "sys_setuid16",
         "(old_uid_t uid)",
         "0x17",
         {
            "type": "old_uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         51
      ],
      [
         24,
         "sys_getuid16",
         "(void)",
         "0x18",
         "",
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         201
      ],
      [
         25,
         "sys_stime",
         "(time_t __user *tptr)",
         "0x19",
         {
            "type": "time_t __user *tptr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/time.c",
         83
      ],
      [
         26,
         "sys_ptrace",
         "(long request, long pid, unsigned long addr, unsigned long data)",
         "0x1a",
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
         1121
      ],
      [
         27,
         "sys_alarm",
         "(unsigned int seconds)",
         "0x1b",
         {
            "type": "unsigned int seconds",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/itimer.c",
         285
      ],
      [
         28,
         "sys_fstat",
         "(unsigned int fd, struct __old_kernel_stat __user *statbuf)",
         "0x1c",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct __old_kernel_stat __user *statbuf",
            "def": {
               "line": 5,
               "file": "arch/arm/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         270
      ],
      [
         29,
         "sys_pause",
         "(void)",
         "0x1d",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3618
      ],
      [
         30,
         "sys_utime",
         "(char __user *filename, struct utimbuf __user *times)",
         "0x1e",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct utimbuf __user *times",
            "def": {
               "line": 7,
               "file": "include/uapi/linux/utime.h"
            }
         },
         "",
         "",
         "",
         "fs/utimes.c",
         24
      ],
      [
         31,
         "not implemented",
         "",
         "0x1f",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         32,
         "not implemented",
         "",
         "0x20",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         33,
         "sys_access",
         "(const char __user *filename, int mode)",
         "0x21",
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
         429
      ],
      [
         34,
         "sys_nice",
         "(int increment)",
         "0x22",
         {
            "type": "int increment",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         3852
      ],
      [
         35,
         "not implemented",
         "",
         "0x23",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         36,
         "sys_sync",
         "(void)",
         "0x24",
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         108
      ],
      [
         37,
         "sys_kill",
         "(pid_t pid, int sig)",
         "0x25",
         {
            "type": "pid_t pid",
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
         2953
      ],
      [
         38,
         "sys_rename",
         "(const char __user *oldname, const char __user *newname)",
         "0x26",
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
         4642
      ],
      [
         39,
         "sys_mkdir",
         "(const char __user *pathname, umode_t mode)",
         "0x27",
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
         3841
      ],
      [
         40,
         "sys_rmdir",
         "(const char __user *pathname)",
         "0x28",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         3944
      ],
      [
         41,
         "sys_dup",
         "(unsigned int fildes)",
         "0x29",
         {
            "type": "unsigned int fildes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/file.c",
         925
      ],
      [
         42,
         "sys_pipe",
         "(int __user *fildes)",
         "0x2a",
         {
            "type": "int __user *fildes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/pipe.c",
         861
      ],
      [
         43,
         "sys_times",
         "(struct tms __user *tbuf)",
         "0x2b",
         {
            "type": "struct tms __user *tbuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         903
      ],
      [
         44,
         "not implemented",
         "",
         "0x2c",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         45,
         "sys_brk",
         "(unsigned long brk)",
         "0x2d",
         {
            "type": "unsigned long brk",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         182
      ],
      [
         46,
         "sys_setgid16",
         "(old_gid_t gid)",
         "0x2e",
         {
            "type": "old_gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         41
      ],
      [
         47,
         "sys_getgid16",
         "(void)",
         "0x2f",
         "",
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         211
      ],
      [
         48,
         "sys_signal",
         "(int sig, __sighandler_t handler)",
         "0x30",
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "__sighandler_t handler",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         3601
      ],
      [
         49,
         "sys_geteuid16",
         "(void)",
         "0x31",
         "",
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         206
      ],
      [
         50,
         "sys_getegid16",
         "(void)",
         "0x32",
         "",
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         216
      ],
      [
         51,
         "sys_acct",
         "(const char __user *name)",
         "0x33",
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/acct.c",
         273
      ],
      [
         52,
         "sys_umount",
         "(char __user *name, int flags)",
         "0x34",
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
         1683
      ],
      [
         53,
         "not implemented",
         "",
         "0x35",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         54,
         "sys_ioctl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x36",
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
         692
      ],
      [
         55,
         "sys_fcntl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x37",
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
         448
      ],
      [
         56,
         "not implemented",
         "",
         "0x38",
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
         "sys_setpgid",
         "(pid_t pid, pid_t pgid)",
         "0x39",
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
         953
      ],
      [
         58,
         "not implemented",
         "",
         "0x3a",
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
         "sys_olduname",
         "(struct oldold_utsname __user *)",
         "0x3b",
         {
            "type": "struct oldold_utsname __user *",
            "def": {
               "line": 7,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1214
      ],
      [
         60,
         "sys_umask",
         "(int mask)",
         "0x3c",
         {
            "type": "int mask",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1754
      ],
      [
         61,
         "sys_chroot",
         "(const char __user *filename)",
         "0x3d",
         {
            "type": "const char __user *filename",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         482
      ],
      [
         62,
         "sys_ustat",
         "(unsigned dev, struct ustat __user *ubuf)",
         "0x3e",
         {
            "type": "unsigned dev",
            "def": null
         },
         {
            "type": "struct ustat __user *ubuf",
            "def": {
               "line": 197,
               "file": "include/linux/types.h"
            }
         },
         "",
         "",
         "",
         "fs/statfs.c",
         232
      ],
      [
         63,
         "sys_dup2",
         "(unsigned int oldfd, unsigned int newfd)",
         "0x3f",
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
         910
      ],
      [
         64,
         "sys_getppid",
         "(void)",
         "0x40",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         855
      ],
      [
         65,
         "sys_getpgrp",
         "(void)",
         "0x41",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1054
      ],
      [
         66,
         "sys_setsid",
         "(void)",
         "0x42",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1100
      ],
      [
         67,
         "sys_sigaction",
         "(int, const struct old_sigaction __user *, struct old_sigaction __user *)",
         "0x43",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct old_sigaction __user *",
            "def": {
               "line": 95,
               "file": "arch/powerpc/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct old_sigaction __user *",
            "def": {
               "line": 95,
               "file": "arch/powerpc/include/uapi/asm/signal.h"
            }
         },
         "",
         "",
         "arch/mips/kernel/signal.c",
         554
      ],
      [
         68,
         "sys_sgetmask",
         "(void)",
         "0x44",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3579
      ],
      [
         69,
         "sys_ssetmask",
         "(int newmask)",
         "0x45",
         {
            "type": "int newmask",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3585
      ],
      [
         70,
         "sys_setreuid16",
         "(old_uid_t ruid, old_uid_t euid)",
         "0x46",
         {
            "type": "old_uid_t ruid",
            "def": null
         },
         {
            "type": "old_uid_t euid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/uid16.c",
         46
      ],
      [
         71,
         "sys_setregid16",
         "(old_gid_t rgid, old_gid_t egid)",
         "0x47",
         {
            "type": "old_gid_t rgid",
            "def": null
         },
         {
            "type": "old_gid_t egid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/uid16.c",
         36
      ],
      [
         72,
         "sys_sigsuspend",
         "(int unused1, int unused2, old_sigset_t mask)",
         "0x48",
         {
            "type": "int unused1",
            "def": null
         },
         {
            "type": "int unused2",
            "def": null
         },
         {
            "type": "old_sigset_t mask",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3692
      ],
      [
         73,
         "sys_sigpending",
         "(old_sigset_t __user *set)",
         "0x49",
         {
            "type": "old_sigset_t __user *set",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3340
      ],
      [
         74,
         "sys_sethostname",
         "(char __user *name, int len)",
         "0x4a",
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
         1249
      ],
      [
         75,
         "sys_setrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0x4b",
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
         1602
      ],
      [
         76,
         "sys_old_getrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0x4c",
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
         1389
      ],
      [
         77,
         "sys_getrusage",
         "(int who, struct rusage __user *ru)",
         "0x4d",
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": {
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "",
         "",
         "kernel/sys.c",
         1728
      ],
      [
         78,
         "sys_gettimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0x4e",
         {
            "type": "struct timeval __user *tv",
            "def": {
               "line": 16,
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
         144
      ],
      [
         79,
         "sys_settimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0x4f",
         {
            "type": "struct timeval __user *tv",
            "def": {
               "line": 16,
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
         235
      ],
      [
         80,
         "sys_getgroups16",
         "(int gidsetsize, old_gid_t __user *grouplist)",
         "0x50",
         {
            "type": "int gidsetsize",
            "def": null
         },
         {
            "type": "old_gid_t __user *grouplist",
            "def": null
         },
         "",
         "",
         "",
         "kernel/uid16.c",
         153
      ],
      [
         81,
         "sys_setgroups16",
         "(int gidsetsize, old_gid_t __user *grouplist)",
         "0x51",
         {
            "type": "int gidsetsize",
            "def": null
         },
         {
            "type": "old_gid_t __user *grouplist",
            "def": null
         },
         "",
         "",
         "",
         "kernel/uid16.c",
         176
      ],
      [
         82,
         "sys_old_select",
         "(struct sel_arg_struct __user *arg)",
         "0x52",
         {
            "type": "struct sel_arg_struct __user *arg",
            "def": {
               "line": 778,
               "file": "fs/select.c"
            }
         },
         "",
         "",
         "",
         "",
         "fs/select.c",
         784
      ],
      [
         83,
         "sys_symlink",
         "(const char __user *old, const char __user *new)",
         "0x53",
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
         4154
      ],
      [
         84,
         "sys_lstat",
         "(const char __user *filename, struct __old_kernel_stat __user *statbuf)",
         "0x54",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct __old_kernel_stat __user *statbuf",
            "def": {
               "line": 5,
               "file": "arch/arm/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         257
      ],
      [
         85,
         "sys_readlink",
         "(const char __user *path, char __user *buf, int bufsiz)",
         "0x55",
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
         418
      ],
      [
         86,
         "sys_uselib",
         "(const char __user *library)",
         "0x56",
         {
            "type": "const char __user *library",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/exec.c",
         120
      ],
      [
         87,
         "sys_swapon",
         "(const char __user *specialfile, int swap_flags)",
         "0x57",
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
         3087
      ],
      [
         88,
         "sys_reboot",
         "(int magic1, int magic2, unsigned int cmd, void __user *arg)",
         "0x58",
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
         89,
         "sys_old_readdir",
         "(unsigned int, struct old_linux_dirent __user *, unsigned int)",
         "0x59",
         {
            "type": "unsigned int",
            "def": null
         },
         {
            "type": "struct old_linux_dirent __user *",
            "def": {
               "line": 79,
               "file": "fs/readdir.c"
            }
         },
         {
            "type": "unsigned int",
            "def": null
         },
         "",
         "",
         "fs/readdir.c",
         125
      ],
      [
         90,
         "sys_old_mmap",
         "(struct mmap_arg_struct __user *arg)",
         "0x5a",
         {
            "type": "struct mmap_arg_struct __user *arg",
            "def": {
               "line": 1526,
               "file": "mm/mmap.c"
            }
         },
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         1535
      ],
      [
         91,
         "sys_munmap",
         "(unsigned long addr, size_t len)",
         "0x5b",
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
         2735
      ],
      [
         92,
         "sys_truncate",
         "(const char __user *path, long length)",
         "0x5c",
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
         153
      ],
      [
         93,
         "sys_ftruncate",
         "(unsigned int fd, unsigned long length)",
         "0x5d",
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
         213
      ],
      [
         94,
         "sys_fchmod",
         "(unsigned int fd, umode_t mode)",
         "0x5e",
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
         544
      ],
      [
         95,
         "sys_fchown16",
         "(unsigned int fd, old_uid_t user, old_gid_t group)",
         "0x5f",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "old_uid_t user",
            "def": null
         },
         {
            "type": "old_gid_t group",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         31
      ],
      [
         96,
         "sys_getpriority",
         "(int which, int who)",
         "0x60",
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
         253
      ],
      [
         97,
         "sys_setpriority",
         "(int which, int who, int niceval)",
         "0x61",
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
         183
      ],
      [
         98,
         "not implemented",
         "",
         "0x62",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         99,
         "sys_statfs",
         "(const char __user * path, struct statfs __user *buf)",
         "0x63",
         {
            "type": "const char __user * path",
            "def": null
         },
         {
            "type": "struct statfs __user *buf",
            "def": {
               "line": 23,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "",
         "fs/statfs.c",
         176
      ],
      [
         100,
         "sys_fstatfs",
         "(unsigned int fd, struct statfs __user *buf)",
         "0x64",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct statfs __user *buf",
            "def": {
               "line": 23,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "",
         "fs/statfs.c",
         197
      ],
      [
         101,
         "sys_ioperm",
         "(unsigned long, unsigned long, int)",
         "0x65",
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
         102,
         "sys_socketcall",
         "(int call, unsigned long __user *args)",
         "0x66",
         {
            "type": "int call",
            "def": null
         },
         {
            "type": "unsigned long __user *args",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2426
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
         1541
      ],
      [
         104,
         "sys_setitimer",
         "(int which, struct itimerval __user *value, struct itimerval __user *ovalue)",
         "0x68",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct itimerval __user *value",
            "def": {
               "line": 40,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerval __user *ovalue",
            "def": {
               "line": 40,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "kernel/time/itimer.c",
         292
      ],
      [
         105,
         "sys_getitimer",
         "(int which, struct itimerval __user *value)",
         "0x69",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct itimerval __user *value",
            "def": {
               "line": 40,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "kernel/time/itimer.c",
         107
      ],
      [
         106,
         "sys_newstat",
         "(const char __user *filename, struct stat __user *statbuf)",
         "0x6a",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         333
      ],
      [
         107,
         "sys_newlstat",
         "(const char __user *filename, struct stat __user *statbuf)",
         "0x6b",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         344
      ],
      [
         108,
         "sys_newfstat",
         "(unsigned int fd, struct stat __user *statbuf)",
         "0x6c",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         371
      ],
      [
         109,
         "sys_uname",
         "(struct old_utsname __user *)",
         "0x6d",
         {
            "type": "struct old_utsname __user *",
            "def": {
               "line": 17,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1195
      ],
      [
         110,
         "sys_iopl",
         "(unsigned int)",
         "0x6e",
         {
            "type": "unsigned int",
            "def": null
         },
         "",
         "",
         "",
         "",
         "arch/x86/kernel/ioport.c",
         109
      ],
      [
         111,
         "sys_vhangup",
         "(void)",
         "0x6f",
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         1172
      ],
      [
         112,
         "not implemented",
         "",
         "0x70",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         113,
         "sys_vm86old",
         "(struct vm86_struct __user *)",
         "0x71",
         {
            "type": "struct vm86_struct __user *",
            "def": {
               "line": 97,
               "file": "arch/x86/include/uapi/asm/vm86.h"
            }
         },
         "",
         "",
         "",
         "",
         "arch/x86/kernel/vm86_32.c",
         209
      ],
      [
         114,
         "sys_wait4",
         "(pid_t pid, int __user *stat_addr, int options, struct rusage __user *ru)",
         "0x72",
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
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/exit.c",
         1673
      ],
      [
         115,
         "sys_swapoff",
         "(const char __user *specialfile)",
         "0x73",
         {
            "type": "const char __user *specialfile",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/swapfile.c",
         2526
      ],
      [
         116,
         "sys_sysinfo",
         "(struct sysinfo __user *info)",
         "0x74",
         {
            "type": "struct sysinfo __user *info",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         2475
      ],
      [
         117,
         "sys_ipc",
         "(unsigned int call, int first, unsigned long second, unsigned long third, void __user *ptr, long fifth)",
         "0x75",
         "param addr*",
         "",
         "",
         "",
         "",
         "ipc/syscall.c",
         17
      ],
      [
         118,
         "sys_fsync",
         "(unsigned int fd)",
         "0x76",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/sync.c",
         226
      ],
      [
         119,
         "sys_sigreturn",
         "(void)",
         "0x77",
         "",
         "",
         "",
         "",
         "",
         "arch/s390/kernel/signal.c",
         217
      ],
      [
         120,
         "sys_clone",
         "(unsigned long, unsigned long, int __user *, unsigned long, int __user *)",
         "0x78",
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "kernel/fork.c",
         2137
      ],
      [
         121,
         "sys_setdomainname",
         "(char __user *name, int len)",
         "0x79",
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
         1300
      ],
      [
         122,
         "sys_newuname",
         "(struct new_utsname __user *name)",
         "0x7a",
         {
            "type": "struct new_utsname __user *name",
            "def": {
               "line": 25,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1175
      ],
      [
         123,
         "sys_modify_ldt",
         "(int, void __user *, unsigned long)",
         "0x7b",
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
         124,
         "sys_adjtimex",
         "(struct timex __user *txc_p)",
         "0x7c",
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
         301
      ],
      [
         125,
         "sys_mprotect",
         "(unsigned long start, size_t len, unsigned long prot)",
         "0x7d",
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
         512
      ],
      [
         126,
         "sys_sigprocmask",
         "(int how, old_sigset_t __user *set, old_sigset_t __user *oset)",
         "0x7e",
         {
            "type": "int how",
            "def": null
         },
         {
            "type": "old_sigset_t __user *set",
            "def": null
         },
         {
            "type": "old_sigset_t __user *oset",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3373
      ],
      [
         127,
         "not implemented",
         "",
         "0x7f",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         128,
         "sys_init_module",
         "(void __user *umod, unsigned long len, const char __user *uargs)",
         "0x80",
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
         3816
      ],
      [
         129,
         "sys_delete_module",
         "(const char __user *name_user, unsigned int flags)",
         "0x81",
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
         954
      ],
      [
         130,
         "not implemented",
         "",
         "0x82",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         131,
         "sys_quotactl",
         "(unsigned int cmd, const char __user *special, qid_t id, void __user *addr)",
         "0x83",
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
         836
      ],
      [
         132,
         "sys_getpgid",
         "(pid_t pid)",
         "0x84",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1024
      ],
      [
         133,
         "sys_fchdir",
         "(unsigned int fd)",
         "0x85",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         460
      ],
      [
         134,
         "sys_bdflush",
         "(int func, long data)",
         "0x86",
         {
            "type": "int func",
            "def": null
         },
         {
            "type": "long data",
            "def": null
         },
         "",
         "",
         "",
         "fs/buffer.c",
         3354
      ],
      [
         135,
         "sys_sysfs",
         "(int option, unsigned long arg1, unsigned long arg2)",
         "0x87",
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
         186
      ],
      [
         136,
         "sys_personality",
         "(unsigned int personality)",
         "0x88",
         {
            "type": "unsigned int personality",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/exec_domain.c",
         51
      ],
      [
         137,
         "not implemented",
         "",
         "0x89",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         138,
         "sys_setfsuid16",
         "(old_uid_t uid)",
         "0x8a",
         {
            "type": "old_uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         103
      ],
      [
         139,
         "sys_setfsgid16",
         "(old_gid_t gid)",
         "0x8b",
         {
            "type": "old_gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/uid16.c",
         108
      ],
      [
         140,
         "sys_llseek",
         "(unsigned int fd, unsigned long offset_high, unsigned long offset_low, loff_t __user *result, unsigned int whence)",
         "0x8c",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned long offset_high",
            "def": null
         },
         {
            "type": "unsigned long offset_low",
            "def": null
         },
         {
            "type": "loff_t __user *result",
            "def": null
         },
         {
            "type": "unsigned int whence",
            "def": null
         },
         "fs/read_write.c",
         330
      ],
      [
         141,
         "sys_getdents",
         "(unsigned int fd, struct linux_dirent __user *dirent, unsigned int count)",
         "0x8d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct linux_dirent __user *dirent",
            "def": {
               "line": 152,
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
         213
      ],
      [
         142,
         "sys_select",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timeval __user *tvp)",
         "0x8e",
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
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
         },
         "fs/select.c",
         679
      ],
      [
         143,
         "sys_flock",
         "(unsigned int fd, unsigned int cmd)",
         "0x8f",
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
         1996
      ],
      [
         144,
         "sys_msync",
         "(unsigned long start, size_t len, int flags)",
         "0x90",
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
         32
      ],
      [
         145,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x91",
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
         1097
      ],
      [
         146,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x92",
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
         1103
      ],
      [
         147,
         "sys_getsid",
         "(pid_t pid)",
         "0x93",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1061
      ],
      [
         148,
         "sys_fdatasync",
         "(unsigned int fd)",
         "0x94",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/sync.c",
         231
      ],
      [
         149,
         "sys_sysctl",
         "(struct __sysctl_args __user *args)",
         "0x95",
         {
            "type": "struct __sysctl_args __user *args",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/sysctl.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sysctl_binary.c",
         1419
      ],
      [
         150,
         "sys_mlock",
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
         711
      ],
      [
         151,
         "sys_munlock",
         "(unsigned long start, size_t len)",
         "0x97",
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
         729
      ],
      [
         152,
         "sys_mlockall",
         "(int flags)",
         "0x98",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         790
      ],
      [
         153,
         "sys_munlockall",
         "(void)",
         "0x99",
         "",
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         821
      ],
      [
         154,
         "sys_sched_setparam",
         "(pid_t pid, struct sched_param __user *param)",
         "0x9a",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": {
               "line": 7,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         4422
      ],
      [
         155,
         "sys_sched_getparam",
         "(pid_t pid, struct sched_param __user *param)",
         "0x9b",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": {
               "line": 7,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         4496
      ],
      [
         156,
         "sys_sched_setscheduler",
         "(pid_t pid, int policy, struct sched_param __user *param)",
         "0x9c",
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
               "line": 7,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         "",
         "",
         "kernel/sched/core.c",
         4407
      ],
      [
         157,
         "sys_sched_getscheduler",
         "(pid_t pid)",
         "0x9d",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4467
      ],
      [
         158,
         "sys_sched_yield",
         "(void)",
         "0x9e",
         "",
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4813
      ],
      [
         159,
         "sys_sched_get_priority_max",
         "(int policy)",
         "0x9f",
         {
            "type": "int policy",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         5045
      ],
      [
         160,
         "sys_sched_get_priority_min",
         "(int policy)",
         "0xa0",
         {
            "type": "int policy",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         5072
      ],
      [
         161,
         "sys_sched_rr_get_interval",
         "(pid_t pid, struct timespec __user *interval)",
         "0xa1",
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
         5101
      ],
      [
         162,
         "sys_nanosleep",
         "(struct timespec __user *rqtp, struct timespec __user *rmtp)",
         "0xa2",
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
         1546
      ],
      [
         163,
         "sys_mremap",
         "(unsigned long addr, unsigned long old_len, unsigned long new_len, unsigned long flags, unsigned long new_addr)",
         "0xa3",
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
         523
      ],
      [
         164,
         "sys_setresuid16",
         "(old_uid_t ruid, old_uid_t euid, old_uid_t suid)",
         "0xa4",
         {
            "type": "old_uid_t ruid",
            "def": null
         },
         {
            "type": "old_uid_t euid",
            "def": null
         },
         {
            "type": "old_uid_t suid",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         56
      ],
      [
         165,
         "sys_getresuid16",
         "(old_uid_t __user *ruid, old_uid_t __user *euid, old_uid_t __user *suid)",
         "0xa5",
         {
            "type": "old_uid_t __user *ruid",
            "def": null
         },
         {
            "type": "old_uid_t __user *euid",
            "def": null
         },
         {
            "type": "old_uid_t __user *suid",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         62
      ],
      [
         166,
         "sys_vm86",
         "(unsigned long, unsigned long)",
         "0xa6",
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         "",
         "",
         "",
         "arch/x86/kernel/vm86_32.c",
         215
      ],
      [
         167,
         "not implemented",
         "",
         "0xa7",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         168,
         "sys_poll",
         "(struct pollfd __user *ufds, unsigned int nfds, int timeout)",
         "0xa8",
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
         1016
      ],
      [
         169,
         "not implemented",
         "",
         "0xa9",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         170,
         "sys_setresgid16",
         "(old_gid_t rgid, old_gid_t egid, old_gid_t sgid)",
         "0xaa",
         {
            "type": "old_gid_t rgid",
            "def": null
         },
         {
            "type": "old_gid_t egid",
            "def": null
         },
         {
            "type": "old_gid_t sgid",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         79
      ],
      [
         171,
         "sys_getresgid16",
         "(old_gid_t __user *rgid, old_gid_t __user *egid, old_gid_t __user *sgid)",
         "0xab",
         {
            "type": "old_gid_t __user *rgid",
            "def": null
         },
         {
            "type": "old_gid_t __user *egid",
            "def": null
         },
         {
            "type": "old_gid_t __user *sgid",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         86
      ],
      [
         172,
         "sys_prctl",
         "(int option, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0xac",
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
         2187
      ],
      [
         173,
         "sys_rt_sigreturn",
         "(void)",
         "0xad",
         "",
         "",
         "",
         "",
         "",
         "arch/arc/kernel/signal.c",
         154
      ],
      [
         174,
         "sys_rt_sigaction",
         "(int, const struct sigaction __user *, struct sigaction __user *, size_t)",
         "0xae",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct sigaction __user *",
            "def": {
               "line": 100,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaction __user *",
            "def": {
               "line": 100,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "size_t",
            "def": null
         },
         "",
         "kernel/signal.c",
         3421
      ],
      [
         175,
         "sys_rt_sigprocmask",
         "(int how, sigset_t __user *set, sigset_t __user *oset, size_t sigsetsize)",
         "0xaf",
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
         2569
      ],
      [
         176,
         "sys_rt_sigpending",
         "(sigset_t __user *set, size_t sigsetsize)",
         "0xb0",
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
         2659
      ],
      [
         177,
         "sys_rt_sigtimedwait",
         "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct timespec __user *uts, size_t sigsetsize)",
         "0xb1",
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
         2883
      ],
      [
         178,
         "sys_rt_sigqueueinfo",
         "(pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0xb2",
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
         "",
         "kernel/signal.c",
         3065
      ],
      [
         179,
         "sys_rt_sigsuspend",
         "(sigset_t __user *unewset, size_t sigsetsize)",
         "0xb3",
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
         3648
      ],
      [
         180,
         "sys_pread64",
         "(unsigned int fd, char __user *buf, size_t count, loff_t pos)",
         "0xb4",
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
         598
      ],
      [
         181,
         "sys_pwrite64",
         "(unsigned int fd, const char __user *buf, size_t count, loff_t pos)",
         "0xb5",
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
         618
      ],
      [
         182,
         "sys_chown16",
         "(const char __user *filename, old_uid_t user, old_gid_t group)",
         "0xb6",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "old_uid_t user",
            "def": null
         },
         {
            "type": "old_gid_t group",
            "def": null
         },
         "",
         "",
         "kernel/uid16.c",
         21
      ],
      [
         183,
         "sys_getcwd",
         "(char __user *buf, unsigned long size)",
         "0xb7",
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
         3443
      ],
      [
         184,
         "sys_capget",
         "(cap_user_header_t header, cap_user_data_t dataptr)",
         "0xb8",
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
         150
      ],
      [
         185,
         "sys_capset",
         "(cap_user_header_t header, const cap_user_data_t data)",
         "0xb9",
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
         224
      ],
      [
         186,
         "sys_sigaltstack",
         "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
         "0xba",
         {
            "type": "const struct sigaltstack __user *uss",
            "def": {
               "line": 114,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaltstack __user *uoss",
            "def": {
               "line": 114,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         "",
         "",
         "",
         "kernel/signal.c",
         3245
      ],
      [
         187,
         "sys_sendfile",
         "(int out_fd, int in_fd, off_t __user *offset, size_t count)",
         "0xbb",
         {
            "type": "int out_fd",
            "def": null
         },
         {
            "type": "int in_fd",
            "def": null
         },
         {
            "type": "off_t __user *offset",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "fs/read_write.c",
         1462
      ],
      [
         188,
         "not implemented",
         "",
         "0xbc",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         189,
         "not implemented",
         "",
         "0xbd",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         190,
         "sys_vfork",
         "(void)",
         "0xbe",
         "",
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         2128
      ],
      [
         191,
         "sys_getrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0xbf",
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
         1324
      ],
      [
         192,
         "sys_mmap_pgoff",
         "(unsigned long addr, unsigned long len, unsigned long prot, unsigned long flags, unsigned long fd, unsigned long pgoff)",
         "0xc0",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         1476
      ],
      [
         193,
         "sys_truncate64",
         "(const char __user *path, loff_t length)",
         "0xc1",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "loff_t length",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         227
      ],
      [
         194,
         "sys_ftruncate64",
         "(unsigned int fd, loff_t length)",
         "0xc2",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "loff_t length",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         232
      ],
      [
         195,
         "sys_stat64",
         "(const char __user *filename, struct stat64 __user *statbuf)",
         "0xc3",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat64 __user *statbuf",
            "def": {
               "line": 26,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         467
      ],
      [
         196,
         "sys_lstat64",
         "(const char __user *filename, struct stat64 __user *statbuf)",
         "0xc4",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat64 __user *statbuf",
            "def": {
               "line": 26,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         479
      ],
      [
         197,
         "sys_fstat64",
         "(unsigned long fd, struct stat64 __user *statbuf)",
         "0xc5",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "struct stat64 __user *statbuf",
            "def": {
               "line": 26,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         491
      ],
      [
         198,
         "sys_lchown",
         "(const char __user *filename, uid_t user, gid_t group)",
         "0xc6",
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
         659
      ],
      [
         199,
         "sys_getuid",
         "(void)",
         "0xc7",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         866
      ],
      [
         200,
         "sys_getgid",
         "(void)",
         "0xc8",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         878
      ],
      [
         201,
         "sys_geteuid",
         "(void)",
         "0xc9",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         872
      ],
      [
         202,
         "sys_getegid",
         "(void)",
         "0xca",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         884
      ],
      [
         203,
         "sys_setreuid",
         "(uid_t ruid, uid_t euid)",
         "0xcb",
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
         470
      ],
      [
         204,
         "sys_setregid",
         "(gid_t rgid, gid_t egid)",
         "0xcc",
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
         337
      ],
      [
         205,
         "sys_getgroups",
         "(int gidsetsize, gid_t __user *grouplist)",
         "0xcd",
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
         153
      ],
      [
         206,
         "sys_setgroups",
         "(int gidsetsize, gid_t __user *grouplist)",
         "0xce",
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
         207,
         "sys_fchown",
         "(unsigned int fd, uid_t user, gid_t group)",
         "0xcf",
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
         665
      ],
      [
         208,
         "sys_setresuid",
         "(uid_t ruid, uid_t euid, uid_t suid)",
         "0xd0",
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
         588
      ],
      [
         209,
         "sys_getresuid",
         "(uid_t __user *ruid, uid_t __user *euid, uid_t __user *suid)",
         "0xd1",
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
         653
      ],
      [
         210,
         "sys_setresgid",
         "(gid_t rgid, gid_t egid, gid_t sgid)",
         "0xd2",
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
         675
      ],
      [
         211,
         "sys_getresgid",
         "(gid_t __user *rgid, gid_t __user *egid, gid_t __user *sgid)",
         "0xd3",
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
         727
      ],
      [
         212,
         "sys_chown",
         "(const char __user *filename, uid_t user, gid_t group)",
         "0xd4",
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
         654
      ],
      [
         213,
         "sys_setuid",
         "(uid_t uid)",
         "0xd5",
         {
            "type": "uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         541
      ],
      [
         214,
         "sys_setgid",
         "(gid_t gid)",
         "0xd6",
         {
            "type": "gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         394
      ],
      [
         215,
         "sys_setfsuid",
         "(uid_t uid)",
         "0xd7",
         {
            "type": "uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         754
      ],
      [
         216,
         "sys_setfsgid",
         "(gid_t gid)",
         "0xd8",
         {
            "type": "gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         793
      ],
      [
         217,
         "sys_pivot_root",
         "(const char __user *new_root, const char __user *put_old)",
         "0xd9",
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
         3118
      ],
      [
         218,
         "sys_mincore",
         "(unsigned long start, size_t len, unsigned char __user * vec)",
         "0xda",
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
         224
      ],
      [
         219,
         "sys_madvise",
         "(unsigned long start, size_t len, int behavior)",
         "0xdb",
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
         793
      ],
      [
         220,
         "sys_getdents64",
         "(unsigned int fd, struct linux_dirent64 __user *dirent, unsigned int count)",
         "0xdc",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct linux_dirent64 __user *dirent",
            "def": {
               "line": 5,
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
         296
      ],
      [
         221,
         "sys_fcntl64",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0xdd",
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
         472
      ],
      [
         222,
         "not implemented",
         "",
         "0xde",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         223,
         "not implemented",
         "",
         "0xdf",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         224,
         "sys_gettid",
         "(void)",
         "0xe0",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         844
      ],
      [
         225,
         "sys_readahead",
         "(int fd, loff_t offset, size_t count)",
         "0xe1",
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
         576
      ],
      [
         226,
         "sys_setxattr",
         "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xe2",
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
         483
      ],
      [
         227,
         "sys_lsetxattr",
         "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xe3",
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
         490
      ],
      [
         228,
         "sys_fsetxattr",
         "(int fd, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xe4",
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
         497
      ],
      [
         229,
         "sys_getxattr",
         "(const char __user *path, const char __user *name, void __user *value, size_t size)",
         "0xe5",
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
         577
      ],
      [
         230,
         "sys_lgetxattr",
         "(const char __user *path, const char __user *name, void __user *value, size_t size)",
         "0xe6",
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
         583
      ],
      [
         231,
         "sys_fgetxattr",
         "(int fd, const char __user *name, void __user *value, size_t size)",
         "0xe7",
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
         589
      ],
      [
         232,
         "sys_listxattr",
         "(const char __user *path, char __user *list, size_t size)",
         "0xe8",
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
         653
      ],
      [
         233,
         "sys_llistxattr",
         "(const char __user *path, char __user *list, size_t size)",
         "0xe9",
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
         659
      ],
      [
         234,
         "sys_flistxattr",
         "(int fd, char __user *list, size_t size)",
         "0xea",
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
         665
      ],
      [
         235,
         "sys_removexattr",
         "(const char __user *path, const char __user *name)",
         "0xeb",
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
         718
      ],
      [
         236,
         "sys_lremovexattr",
         "(const char __user *path, const char __user *name)",
         "0xec",
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
         724
      ],
      [
         237,
         "sys_fremovexattr",
         "(int fd, const char __user *name)",
         "0xed",
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
         730
      ],
      [
         238,
         "sys_tkill",
         "(pid_t pid, int sig)",
         "0xee",
         {
            "type": "pid_t pid",
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
         3035
      ],
      [
         239,
         "sys_sendfile64",
         "(int out_fd, int in_fd, loff_t __user *offset, size_t count)",
         "0xef",
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
         1481
      ],
      [
         240,
         "sys_futex",
         "(u32 __user *uaddr, int op, u32 val, struct timespec __user *utime, u32 __user *uaddr2, u32 val3)",
         "0xf0",
         "param addr*",
         "",
         "",
         "",
         "",
         "kernel/futex.c",
         3519
      ],
      [
         241,
         "sys_sched_setaffinity",
         "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
         "0xf1",
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
         4725
      ],
      [
         242,
         "sys_sched_getaffinity",
         "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
         "0xf2",
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
         4777
      ],
      [
         243,
         "sys_set_thread_area",
         "(struct user_desc __user *)",
         "0xf3",
         {
            "type": "struct user_desc __user *",
            "def": {
               "line": 21,
               "file": "arch/x86/include/uapi/asm/ldt.h"
            }
         },
         "",
         "",
         "",
         "",
         "arch/mips/kernel/syscall.c",
         82
      ],
      [
         244,
         "sys_get_thread_area",
         "(struct user_desc __user *)",
         "0xf4",
         {
            "type": "struct user_desc __user *",
            "def": {
               "line": 21,
               "file": "arch/x86/include/uapi/asm/ldt.h"
            }
         },
         "",
         "",
         "",
         "",
         "arch/x86/kernel/tls.c",
         245
      ],
      [
         245,
         "sys_io_setup",
         "(unsigned nr_reqs, aio_context_t __user *ctx)",
         "0xf5",
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
         1354
      ],
      [
         246,
         "sys_io_destroy",
         "(aio_context_t ctx)",
         "0xf6",
         {
            "type": "aio_context_t ctx",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/aio.c",
         1423
      ],
      [
         247,
         "sys_io_getevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct timespec __user *timeout)",
         "0xf7",
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
               "line": 59,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         {
            "type": "struct timespec __user *timeout",
            "def": null
         },
         "fs/aio.c",
         1841
      ],
      [
         248,
         "sys_io_submit",
         "(aio_context_t, long, struct iocb __user * __user *)",
         "0xf8",
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
         1714
      ],
      [
         249,
         "sys_io_cancel",
         "(aio_context_t ctx_id, struct iocb __user *iocb, struct io_event __user *result)",
         "0xf9",
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
               "line": 59,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         "",
         "",
         "fs/aio.c",
         1789
      ],
      [
         250,
         "sys_fadvise64",
         "(int fd, loff_t offset, size_t len, int advice)",
         "0xfa",
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
         182
      ],
      [
         251,
         "not implemented",
         "",
         "0xfb",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         252,
         "sys_exit_group",
         "(int error_code)",
         "0xfc",
         {
            "type": "int error_code",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/exit.c",
         977
      ],
      [
         253,
         "sys_lookup_dcookie",
         "(u64 cookie64, char __user *buf, size_t len)",
         "0xfd",
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
         254,
         "sys_epoll_create",
         "(int size)",
         "0xfe",
         {
            "type": "int size",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         1999
      ],
      [
         255,
         "sys_epoll_ctl",
         "(int epfd, int op, int fd, struct epoll_event __user *event)",
         "0xff",
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
               "line": 76,
               "file": "include/uapi/linux/eventpoll.h"
            }
         },
         "",
         "fs/eventpoll.c",
         2012
      ],
      [
         256,
         "sys_epoll_wait",
         "(int epfd, struct epoll_event __user *events, int maxevents, int timeout)",
         "0x100",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *events",
            "def": {
               "line": 76,
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
         2168
      ],
      [
         257,
         "sys_remap_file_pages",
         "(unsigned long start, unsigned long size, unsigned long prot, unsigned long pgoff, unsigned long flags)",
         "0x101",
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
         2745
      ],
      [
         258,
         "sys_set_tid_address",
         "(int __user *tidptr)",
         "0x102",
         {
            "type": "int __user *tidptr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         1476
      ],
      [
         259,
         "sys_timer_create",
         "(clockid_t which_clock, struct sigevent __user *timer_event_spec, timer_t __user * created_timer_id)",
         "0x103",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct sigevent __user *timer_event_spec",
            "def": {
               "line": 281,
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
         572
      ],
      [
         260,
         "sys_timer_settime",
         "(timer_t timer_id, int flags, const struct itimerspec __user *new_setting, struct itimerspec __user *old_setting)",
         "0x104",
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
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerspec __user *old_setting",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "kernel/time/posix-timers.c",
         902
      ],
      [
         261,
         "sys_timer_gettime",
         "(timer_t timer_id, struct itimerspec __user *setting)",
         "0x105",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         {
            "type": "struct itimerspec __user *setting",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         739
      ],
      [
         262,
         "sys_timer_getoverrun",
         "(timer_t timer_id)",
         "0x106",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         776
      ],
      [
         263,
         "sys_timer_delete",
         "(timer_t timer_id)",
         "0x107",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         968
      ],
      [
         264,
         "sys_clock_settime",
         "(clockid_t which_clock, const struct timespec __user *tp)",
         "0x108",
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
         "kernel/time/posix-stubs.c",
         51
      ],
      [
         265,
         "sys_clock_gettime",
         "(clockid_t which_clock, struct timespec __user *tp)",
         "0x109",
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
         "kernel/time/posix-stubs.c",
         82
      ],
      [
         266,
         "sys_clock_getres",
         "(clockid_t which_clock, struct timespec __user *tp)",
         "0x10a",
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
         "kernel/time/posix-stubs.c",
         97
      ],
      [
         267,
         "sys_clock_nanosleep",
         "(clockid_t which_clock, int flags, const struct timespec __user *rqtp, struct timespec __user *rmtp)",
         "0x10b",
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
         "kernel/time/posix-stubs.c",
         116
      ],
      [
         268,
         "sys_statfs64",
         "(const char __user *path, size_t sz, struct statfs64 __user *buf)",
         "0x10c",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "size_t sz",
            "def": null
         },
         {
            "type": "struct statfs64 __user *buf",
            "def": {
               "line": 66,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "fs/statfs.c",
         185
      ],
      [
         269,
         "sys_fstatfs64",
         "(unsigned int fd, size_t sz, struct statfs64 __user *buf)",
         "0x10d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "size_t sz",
            "def": null
         },
         {
            "type": "struct statfs64 __user *buf",
            "def": {
               "line": 66,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "fs/statfs.c",
         206
      ],
      [
         270,
         "sys_tgkill",
         "(pid_t tgid, pid_t pid, int sig)",
         "0x10e",
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
         "",
         "",
         "kernel/signal.c",
         3019
      ],
      [
         271,
         "sys_utimes",
         "(char __user *filename, struct timeval __user *utimes)",
         "0x10f",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct timeval __user *utimes",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "fs/utimes.c",
         215
      ],
      [
         272,
         "sys_fadvise64_64",
         "(int fd, loff_t offset, loff_t len, int advice)",
         "0x110",
         {
            "type": "int fd",
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
         {
            "type": "int advice",
            "def": null
         },
         "",
         "mm/fadvise.c",
         29
      ],
      [
         273,
         "not implemented",
         "",
         "0x111",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         274,
         "sys_mbind",
         "(unsigned long start, unsigned long len, unsigned long mode, const unsigned long __user *nmask, unsigned long maxnode, unsigned flags)",
         "0x112",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/mempolicy.c",
         1323
      ],
      [
         275,
         "sys_get_mempolicy",
         "(int __user *policy, unsigned long __user *nmask, unsigned long maxnode, unsigned long addr, unsigned long flags)",
         "0x113",
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
         1460
      ],
      [
         276,
         "sys_set_mempolicy",
         "(int mode, const unsigned long __user *nmask, unsigned long maxnode)",
         "0x114",
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
         1345
      ],
      [
         277,
         "sys_mq_open",
         "(const char __user *name, int oflag, umode_t mode, struct mq_attr __user *attr)",
         "0x115",
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
               "line": 28,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "ipc/mqueue.c",
         847
      ],
      [
         278,
         "sys_mq_unlink",
         "(const char __user *name)",
         "0x116",
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "ipc/mqueue.c",
         857
      ],
      [
         279,
         "sys_mq_timedsend",
         "(mqd_t mqdes, const char __user *msg_ptr, size_t msg_len, unsigned int msg_prio, const struct timespec __user *abs_timeout)",
         "0x117",
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
         1183
      ],
      [
         280,
         "sys_mq_timedreceive",
         "(mqd_t mqdes, char __user *msg_ptr, size_t msg_len, unsigned int __user *msg_prio, const struct timespec __user *abs_timeout)",
         "0x118",
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
         1197
      ],
      [
         281,
         "sys_mq_notify",
         "(mqd_t mqdes, const struct sigevent __user *notification)",
         "0x119",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct sigevent __user *notification",
            "def": {
               "line": 281,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         "",
         "",
         "",
         "ipc/mqueue.c",
         1342
      ],
      [
         282,
         "sys_mq_getsetattr",
         "(mqd_t mqdes, const struct mq_attr __user *mqstat, struct mq_attr __user *omqstat)",
         "0x11a",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct mq_attr __user *mqstat",
            "def": {
               "line": 28,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         {
            "type": "struct mq_attr __user *omqstat",
            "def": {
               "line": 28,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "",
         "ipc/mqueue.c",
         1398
      ],
      [
         283,
         "sys_kexec_load",
         "(unsigned long entry, unsigned long nr_segments, struct kexec_segment __user *segments, unsigned long flags)",
         "0x11b",
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
               "line": 73,
               "file": "include/linux/kexec.h"
            }
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "kernel/kexec.c",
         195
      ],
      [
         284,
         "sys_waitid",
         "(int which, pid_t pid, struct siginfo __user *infop, int options, struct rusage __user *ru)",
         "0x11c",
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
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "kernel/exit.c",
         1596
      ],
      [
         285,
         "not implemented",
         "",
         "0x11d",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         286,
         "sys_add_key",
         "(const char __user *_type, const char __user *_description, const void __user *_payload, size_t plen, key_serial_t destringid)",
         "0x11e",
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
         62
      ],
      [
         287,
         "sys_request_key",
         "(const char __user *_type, const char __user *_description, const char __user *_callout_info, key_serial_t destringid)",
         "0x11f",
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
         158
      ],
      [
         288,
         "sys_keyctl",
         "(int cmd, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0x120",
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
         1641
      ],
      [
         289,
         "sys_ioprio_set",
         "(int which, int who, int ioprio)",
         "0x121",
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
         64
      ],
      [
         290,
         "sys_ioprio_get",
         "(int which, int who)",
         "0x122",
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
         175
      ],
      [
         291,
         "sys_inotify_init",
         "(void)",
         "0x123",
         "",
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         663
      ],
      [
         292,
         "sys_inotify_add_watch",
         "(int fd, const char __user *path, u32 mask)",
         "0x124",
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
         668
      ],
      [
         293,
         "sys_inotify_rm_watch",
         "(int fd, __s32 wd)",
         "0x125",
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
         725
      ],
      [
         294,
         "sys_migrate_pages",
         "(pid_t pid, unsigned long maxnode, const unsigned long __user *from, const unsigned long __user *to)",
         "0x126",
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
         1364
      ],
      [
         295,
         "sys_openat",
         "(int dfd, const char __user *filename, int flags, umode_t mode)",
         "0x127",
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
         1080
      ],
      [
         296,
         "sys_mkdirat",
         "(int dfd, const char __user * pathname, umode_t mode)",
         "0x128",
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
         3816
      ],
      [
         297,
         "sys_mknodat",
         "(int dfd, const char __user * filename, umode_t mode, unsigned dev)",
         "0x129",
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
         3741
      ],
      [
         298,
         "sys_fchownat",
         "(int dfd, const char __user *filename, uid_t user, gid_t group, int flag)",
         "0x12a",
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
         622
      ],
      [
         299,
         "sys_futimesat",
         "(int dfd, const char __user *filename, struct timeval __user *utimes)",
         "0x12b",
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
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "fs/utimes.c",
         187
      ],
      [
         300,
         "sys_fstatat64",
         "(int dfd, const char __user *filename, struct stat64 __user *statbuf, int flag)",
         "0x12c",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat64 __user *statbuf",
            "def": {
               "line": 26,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "fs/stat.c",
         502
      ],
      [
         301,
         "sys_unlinkat",
         "(int dfd, const char __user * pathname, int flag)",
         "0x12d",
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
         4086
      ],
      [
         302,
         "sys_renameat",
         "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname)",
         "0x12e",
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
         4636
      ],
      [
         303,
         "sys_linkat",
         "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, int flags)",
         "0x12f",
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
         4248
      ],
      [
         304,
         "sys_symlinkat",
         "(const char __user * oldname, int newdfd, const char __user * newname)",
         "0x130",
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
         4123
      ],
      [
         305,
         "sys_readlinkat",
         "(int dfd, const char __user *path, char __user *buf, int bufsiz)",
         "0x131",
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
         382
      ],
      [
         306,
         "sys_fchmodat",
         "(int dfd, const char __user * filename, umode_t mode)",
         "0x132",
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
         557
      ],
      [
         307,
         "sys_faccessat",
         "(int dfd, const char __user *filename, int mode)",
         "0x133",
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
         353
      ],
      [
         308,
         "sys_pselect6",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timespec __user *tsp, void __user *sig)",
         "0x134",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/select.c",
         759
      ],
      [
         309,
         "sys_ppoll",
         "(struct pollfd __user *ufds, unsigned int nfds, struct timespec __user *tsp, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x135",
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
         1050
      ],
      [
         310,
         "sys_unshare",
         "(unsigned long unshare_flags)",
         "0x136",
         {
            "type": "unsigned long unshare_flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         2320
      ],
      [
         311,
         "sys_set_robust_list",
         "(struct robust_list_head __user *head, size_t len)",
         "0x137",
         {
            "type": "struct robust_list_head __user *head",
            "def": {
               "line": 70,
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
         3262
      ],
      [
         312,
         "sys_get_robust_list",
         "(int pid, struct robust_list_head __user * __user *head_ptr, size_t __user *len_ptr)",
         "0x138",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "struct robust_list_head __user * __user *head_ptr",
            "def": {
               "line": 70,
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
         3284
      ],
      [
         313,
         "sys_splice",
         "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
         "0x139",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/splice.c",
         1382
      ],
      [
         314,
         "sys_sync_file_range",
         "(int fd, loff_t offset, loff_t nbytes, unsigned int flags)",
         "0x13a",
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
         283
      ],
      [
         315,
         "sys_tee",
         "(int fdin, int fdout, size_t len, unsigned int flags)",
         "0x13b",
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
         1718
      ],
      [
         316,
         "sys_vmsplice",
         "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
         "0x13c",
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
         1334
      ],
      [
         317,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
         "0x13d",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/migrate.c",
         1749
      ],
      [
         318,
         "sys_getcpu",
         "(unsigned __user *cpu, unsigned __user *node, struct getcpu_cache __user *cache)",
         "0x13e",
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
               "line": 15,
               "file": "include/linux/getcpu.h"
            }
         },
         "",
         "",
         "kernel/sys.c",
         2396
      ],
      [
         319,
         "sys_epoll_pwait",
         "(int epfd, struct epoll_event __user *events, int maxevents, int timeout, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x13f",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         2214
      ],
      [
         320,
         "sys_utimensat",
         "(int dfd, const char __user *filename, struct timespec __user *utimes, int flags)",
         "0x140",
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
         168
      ],
      [
         321,
         "sys_signalfd",
         "(int ufd, sigset_t __user *user_mask, size_t sizemask)",
         "0x141",
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
         304
      ],
      [
         322,
         "sys_timerfd_create",
         "(int clockid, int flags)",
         "0x142",
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
         387
      ],
      [
         323,
         "sys_eventfd",
         "(unsigned int count)",
         "0x143",
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventfd.c",
         483
      ],
      [
         324,
         "sys_fallocate",
         "(int fd, int mode, loff_t offset, loff_t len)",
         "0x144",
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
         336
      ],
      [
         325,
         "sys_timerfd_settime",
         "(int ufd, int flags, const struct itimerspec __user *utmr, struct itimerspec __user *otmr)",
         "0x145",
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
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerspec __user *otmr",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "fs/timerfd.c",
         535
      ],
      [
         326,
         "sys_timerfd_gettime",
         "(int ufd, struct itimerspec __user *otmr)",
         "0x146",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "struct itimerspec __user *otmr",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "fs/timerfd.c",
         553
      ],
      [
         327,
         "sys_signalfd4",
         "(int ufd, sigset_t __user *user_mask, size_t sizemask, int flags)",
         "0x147",
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
         250
      ],
      [
         328,
         "sys_eventfd2",
         "(unsigned int count, int flags)",
         "0x148",
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
         458
      ],
      [
         329,
         "sys_epoll_create1",
         "(int flags)",
         "0x149",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         1956
      ],
      [
         330,
         "sys_dup3",
         "(unsigned int oldfd, unsigned int newfd, int flags)",
         "0x14a",
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
         876
      ],
      [
         331,
         "sys_pipe2",
         "(int __user *fildes, int flags)",
         "0x14b",
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
         839
      ],
      [
         332,
         "sys_inotify_init1",
         "(int flags)",
         "0x14c",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         638
      ],
      [
         333,
         "sys_preadv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
         "0x14d",
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
         1109
      ],
      [
         334,
         "sys_pwritev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
         "0x14e",
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
         1129
      ],
      [
         335,
         "sys_rt_tgsigqueueinfo",
         "(pid_t tgid, pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0x14f",
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
         3106
      ],
      [
         336,
         "sys_perf_event_open",
         "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
         "0x150",
         {
            "type": "struct perf_event_attr __user *attr_uptr",
            "def": {
               "line": 308,
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
         9910
      ],
      [
         337,
         "sys_recvmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct timespec __user *timeout)",
         "0x151",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 69,
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
         2381
      ],
      [
         338,
         "sys_fanotify_init",
         "(unsigned int flags, unsigned int event_f_flags)",
         "0x152",
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
         712
      ],
      [
         339,
         "sys_fanotify_mark",
         "(int fanotify_fd, unsigned int flags, u64 mask, int fd, const char __user *pathname)",
         "0x153",
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
         820
      ],
      [
         340,
         "sys_prlimit64",
         "(pid_t pid, unsigned int resource, const struct rlimit64 __user *new_rlim, struct rlimit64 __user *old_rlim)",
         "0x154",
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
               "line": 50,
               "file": "include/uapi/linux/resource.h"
            }
         },
         {
            "type": "struct rlimit64 __user *old_rlim",
            "def": {
               "line": 50,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/sys.c",
         1555
      ],
      [
         341,
         "sys_name_to_handle_at",
         "(int dfd, const char __user *name, struct file_handle __user *handle, int __user *mnt_id, int flag)",
         "0x155",
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
         94
      ],
      [
         342,
         "sys_open_by_handle_at",
         "(int mountdirfd, struct file_handle __user *handle, int flags)",
         "0x156",
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
         257
      ],
      [
         343,
         "sys_clock_adjtime",
         "(clockid_t which_clock, struct timex __user *tx)",
         "0x157",
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
         1069
      ],
      [
         344,
         "sys_syncfs",
         "(int fd)",
         "0x158",
         {
            "type": "int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/sync.c",
         155
      ],
      [
         345,
         "sys_sendmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags)",
         "0x159",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 69,
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
         2165
      ],
      [
         346,
         "sys_setns",
         "(int fd, int nstype)",
         "0x15a",
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
         237
      ],
      [
         347,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x15b",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/process_vm_access.c",
         300
      ],
      [
         348,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x15c",
         "param addr*",
         "",
         "",
         "",
         "",
         "mm/process_vm_access.c",
         307
      ],
      [
         349,
         "sys_kcmp",
         "(pid_t pid1, pid_t pid2, int type, unsigned long idx1, unsigned long idx2)",
         "0x15d",
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
         152
      ],
      [
         350,
         "sys_finit_module",
         "(int fd, const char __user *uargs, int flags)",
         "0x15e",
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
         3836
      ],
      [
         351,
         "sys_sched_setattr",
         "(pid_t pid, struct sched_attr __user *attr, unsigned int flags)",
         "0x15f",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_attr __user *attr",
            "def": {
               "line": 57,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "kernel/sched/core.c",
         4433
      ],
      [
         352,
         "sys_sched_getattr",
         "(pid_t pid, struct sched_attr __user *attr, unsigned int size, unsigned int flags)",
         "0x160",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_attr __user *attr",
            "def": {
               "line": 57,
               "file": "include/uapi/linux/sched/types.h"
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
         4574
      ],
      [
         353,
         "sys_renameat2",
         "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, unsigned int flags)",
         "0x161",
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
         4493
      ],
      [
         354,
         "sys_seccomp",
         "(unsigned int op, unsigned int flags, const char __user *uargs)",
         "0x162",
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
         940
      ],
      [
         355,
         "sys_getrandom",
         "(char __user *buf, size_t count, unsigned int flags)",
         "0x163",
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
         1908
      ],
      [
         356,
         "sys_memfd_create",
         "(const char __user *uname_ptr, unsigned int flags)",
         "0x164",
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
         3658
      ],
      [
         357,
         "sys_bpf",
         "(int cmd, union bpf_attr *attr, unsigned int size)",
         "0x165",
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
         1453
      ],
      [
         358,
         "sys_execveat",
         "(int dfd, const char __user *filename, const char __user *const __user *argv, const char __user *const __user *envp, int flags)",
         "0x166",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "const char __user *const __user *argv",
            "def": null
         },
         {
            "type": "const char __user *const __user *envp",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "fs/exec.c",
         1927
      ],
      [
         359,
         "sys_socket",
         "(int, int, int)",
         "0x167",
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
         1312
      ],
      [
         360,
         "sys_socketpair",
         "(int, int, int, int __user *)",
         "0x168",
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
         1353
      ],
      [
         361,
         "sys_bind",
         "(int, struct sockaddr __user *, int)",
         "0x169",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 30,
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
         1462
      ],
      [
         362,
         "sys_connect",
         "(int, struct sockaddr __user *, int)",
         "0x16a",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 30,
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
         1623
      ],
      [
         363,
         "sys_listen",
         "(int, int)",
         "0x16b",
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
         1491
      ],
      [
         364,
         "sys_accept4",
         "(int, struct sockaddr __user *, int __user *, int)",
         "0x16c",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 30,
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
         1524
      ],
      [
         365,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
         "0x16d",
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
         1865
      ],
      [
         366,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user *optval, int optlen)",
         "0x16e",
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
         1831
      ],
      [
         367,
         "sys_getsockname",
         "(int, struct sockaddr __user *, int __user *)",
         "0x16f",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 30,
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
         1655
      ],
      [
         368,
         "sys_getpeername",
         "(int, struct sockaddr __user *, int __user *)",
         "0x170",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": {
               "line": 30,
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
         1686
      ],
      [
         369,
         "sys_sendto",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int)",
         "0x171",
         "param addr*",
         "",
         "",
         "",
         "",
         "net/socket.c",
         1718
      ],
      [
         370,
         "sys_sendmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x172",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": {
               "line": 58,
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
         2090
      ],
      [
         371,
         "sys_recvfrom",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int __user *)",
         "0x173",
         "param addr*",
         "",
         "",
         "",
         "",
         "net/socket.c",
         1774
      ],
      [
         372,
         "sys_recvmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x174",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": {
               "line": 58,
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
         2260
      ],
      [
         373,
         "sys_shutdown",
         "(int, int)",
         "0x175",
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
         1895
      ],
      [
         374,
         "sys_userfaultfd",
         "(int flags)",
         "0x176",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/userfaultfd.c",
         1924
      ],
      [
         375,
         "sys_membarrier",
         "(int cmd, int flags)",
         "0x177",
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/membarrier.c",
         150
      ],
      [
         376,
         "sys_mlock2",
         "(unsigned long start, size_t len, int flags)",
         "0x178",
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
         "mm/mlock.c",
         716
      ],
      [
         377,
         "sys_copy_file_range",
         "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
         "0x179",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/read_write.c",
         1621
      ],
      [
         378,
         "sys_preadv2",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h, rwf_t flags)",
         "0x17a",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/read_write.c",
         1117
      ],
      [
         379,
         "sys_pwritev2",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h, rwf_t flags)",
         "0x17b",
         "param addr*",
         "",
         "",
         "",
         "",
         "fs/read_write.c",
         1137
      ],
      [
         380,
         "sys_pkey_mprotect",
         "(unsigned long start, size_t len, unsigned long prot, int pkey)",
         "0x17c",
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
         {
            "type": "int pkey",
            "def": null
         },
         "",
         "mm/mprotect.c",
         520
      ],
      [
         381,
         "sys_pkey_alloc",
         "(unsigned long flags, unsigned long init_val)",
         "0x17d",
         {
            "type": "unsigned long flags",
            "def": null
         },
         {
            "type": "unsigned long init_val",
            "def": null
         },
         "",
         "",
         "",
         "mm/mprotect.c",
         526
      ],
      [
         382,
         "sys_pkey_free",
         "(int pkey)",
         "0x17e",
         {
            "type": "int pkey",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mprotect.c",
         556
      ],
      [
         383,
         "sys_statx",
         "(int dfd, const char __user *path, unsigned flags, unsigned mask, struct statx __user *buffer)",
         "0x17f",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         {
            "type": "unsigned mask",
            "def": null
         },
         {
            "type": "struct statx __user *buffer",
            "def": {
               "line": 99,
               "file": "include/uapi/linux/stat.h"
            }
         },
         "fs/stat.c",
         560
      ],
      [
         384,
         "sys_arch_prctl",
         "(int, unsigned long)",
         "0x180",
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
         "arch/x86/kernel/process_32.c",
         310
      ]
   ]
}

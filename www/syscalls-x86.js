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
         2502
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
         841
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
         1757
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
         562
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
         577
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
         255
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
         1088
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
         1627
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
         1050
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
         4060
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
         3851
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
         1704
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
         416
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
         895
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
         3518
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
         560
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
         24
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
               "line": 4,
               "file": "arch/arm/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         177
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
         276
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
         830
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
         2852
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
         1605
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
         49
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
         199
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
         82
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
         1032
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
         "kernel/time/timer.c",
         1433
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
               "line": 4,
               "file": "arch/arm/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         203
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
         3546
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
         411
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
         3145
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
         102
      ],
      [
         37,
         "sys_kill",
         "(int pid, int sig)",
         "0x25",
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
         4398
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
         3574
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
         3700
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
         865
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
         799
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
         895
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
         285
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
         39
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
         209
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
         3529
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
         204
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
         214
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
         270
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
         1560
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
         613
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
         356
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
         919
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
               "line": 6,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1180
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
         1646
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
         467
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
         850
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
         847
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
         1020
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
         1066
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
               "line": 94,
               "file": "arch/powerpc/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct old_sigaction __user *",
            "def": {
               "line": 94,
               "file": "arch/powerpc/include/uapi/asm/signal.h"
            }
         },
         "",
         "",
         "arch/mips/kernel/signal.c",
         315
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
         3507
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
         3513
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
         44
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
         34
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
         3618
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
         3283
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
         1215
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
         1490
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
         1307
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
         78,
         "sys_gettimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0x4e",
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
         79,
         "sys_settimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0x4f",
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
         151
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
         174
      ],
      [
         82,
         "sys_old_select",
         "(struct sel_arg_struct __user *arg)",
         "0x52",
         {
            "type": "struct sel_arg_struct __user *arg",
            "def": {
               "line": 719,
               "file": "fs/select.c"
            }
         },
         "",
         "",
         "",
         "",
         "fs/select.c",
         725
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
         3908
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
               "line": 4,
               "file": "arch/arm/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         190
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
         349
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
         108
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
         2345
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
               "line": 64,
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
         110
      ],
      [
         90,
         "sys_old_mmap",
         "(struct mmap_arg_struct __user *arg)",
         "0x5a",
         {
            "type": "struct mmap_arg_struct __user *arg",
            "def": {
               "line": 1450,
               "file": "mm/mmap.c"
            }
         },
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         1459
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
         2620
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
         140
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
         199
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
         529
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
         29
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
         245
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
         175
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
         2321
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
         109,
         "sys_uname",
         "(struct old_utsname __user *)",
         "0x6d",
         {
            "type": "struct old_utsname __user *",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1161
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
         96
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
         1107
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
               "line": 96,
               "file": "arch/x86/include/uapi/asm/vm86.h"
            }
         },
         "",
         "",
         "",
         "",
         "arch/x86/kernel/vm86_32.c",
         205
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
               "line": 23,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/exit.c",
         1584
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
         1802
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
         2332
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
         16
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
         220
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
         236
      ],
      [
         120,
         "sys_clone",
         "(unsigned long, unsigned long, int __user *, int, int __user *)",
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
            "type": "int",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "kernel/fork.c",
         1778
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
         1266
      ],
      [
         122,
         "sys_newuname",
         "(struct new_utsname __user *name)",
         "0x7a",
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
         214
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
         335
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
         3301
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
         3408
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
         793
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
         760
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
         990
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
         442
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
         3270
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
         184
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
         50
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
         101
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
         106
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
         302
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
               "line": 15,
               "file": "include/uapi/linux/time.h"
            }
         },
         "fs/select.c",
         622
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
         1899
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
         31
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
         852
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
         872
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
         1027
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
         225
      ],
      [
         149,
         "sys_sysctl",
         "(struct __sysctl_args __user *args)",
         "0x95",
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
         607
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
         643
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
         683
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
         714
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
         3860
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
         4205
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
         4414
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
         4441
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
         4470
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
         1600
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
         472
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
         54
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
         60
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
         230
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
         957
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
         77
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
         84
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
         2052
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
         100
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
         2589
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
         2679
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
         2862
      ],
      [
         178,
         "sys_rt_sigqueueinfo",
         "(int pid, int sig, siginfo_t __user *uinfo)",
         "0xb2",
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
         3574
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
         594
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
         614
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
         19
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
         3235
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
         149
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
         223
      ],
      [
         186,
         "sys_sigaltstack",
         "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
         "0xba",
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
         1255
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
         1769
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
         1290
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
         1399
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
         213
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
         218
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
               "line": 25,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         400
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
               "line": 25,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         412
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
               "line": 25,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "fs/stat.c",
         424
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
         644
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
         858
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
         870
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
         864
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
         876
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
         462
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
         329
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
         190
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
         227
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
         650
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
         580
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
         645
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
         667
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
         719
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
         639
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
         533
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
         386
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
         746
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
         785
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
         2936
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
         220
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
         458
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
         380
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
         836
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
         562
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
         390
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
         397
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
         404
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
         490
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
         496
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
         502
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
         572
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
         578
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
         584
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
         637
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
         643
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
         649
      ],
      [
         238,
         "sys_tkill",
         "(int pid, int sig)",
         "0xee",
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
         1274
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
         2972
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
         4118
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
         4169
      ],
      [
         243,
         "sys_set_thread_area",
         "(struct user_desc __user *)",
         "0xf3",
         {
            "type": "struct user_desc __user *",
            "def": {
               "line": 20,
               "file": "arch/x86/include/uapi/asm/ldt.h"
            }
         },
         "",
         "",
         "",
         "",
         "arch/mips/kernel/syscall.c",
         88
      ],
      [
         244,
         "sys_get_thread_area",
         "(struct user_desc __user *)",
         "0xf4",
         {
            "type": "struct user_desc __user *",
            "def": {
               "line": 20,
               "file": "arch/x86/include/uapi/asm/ldt.h"
            }
         },
         "",
         "",
         "",
         "",
         "arch/x86/kernel/tls.c",
         195
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
         1307
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
         1343
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
         1628
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
         157
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
         883
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
         1807
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
               "line": 59,
               "file": "include/uapi/linux/eventpoll.h"
            }
         },
         "",
         "fs/eventpoll.c",
         1820
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
         2630
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
         1195
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
         806
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
         937
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
         "kernel/time/posix-timers.c",
         1005
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
         "kernel/time/posix-timers.c",
         1020
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
         "kernel/time/posix-timers.c",
         1061
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
         "kernel/time/posix-timers.c",
         1090
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
               "line": 65,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "fs/statfs.c",
         181
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
               "line": 65,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "fs/statfs.c",
         202
      ],
      [
         270,
         "sys_tgkill",
         "(int tgid, int pid, int sig)",
         "0x10e",
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
         28
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
         1301
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
         1438
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
         1323
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
               "line": 25,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "ipc/mqueue.c",
         778
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
         859
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
         954
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
         1074
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
               "line": 23,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "kernel/exit.c",
         1516
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
         60
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
         164
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
         1559
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
         61
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
         178
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
         694
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
         699
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
         744
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
         1342
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
         1035
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
         3549
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
         3476
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
         607
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
               "line": 25,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "fs/stat.c",
         435
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
         3840
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
         4392
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
         3995
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
         3877
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
         315
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
         542
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
         335
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
         700
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
         991
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
         1917
      ],
      [
         311,
         "sys_set_robust_list",
         "(struct robust_list_head __user *head, size_t len)",
         "0x137",
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
         1677
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
         277
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
         2010
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
         1631
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
         1452
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
         2007
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
         185
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
         308
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
         376
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
         445
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
         318
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
         254
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
         420
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
         1764
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
         816
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
         777
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
         669
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
         898
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
         922
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
         3051
      ],
      [
         336,
         "sys_perf_event_open",
         "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
         "0x150",
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
         690
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
         800
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
         92
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
         255
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
         1038
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
         149
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
         221
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
         287
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
         294
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
         97
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
         3428
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
         4248
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
         866
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
         1523
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
         2913
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
         551
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
         1712
      ]
   ]
}

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
         2058
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
         1046
      ], 
      [
         2, 
         "sys_fork", 
         "(struct pt_regs *)", 
         "0x02", 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "arch/alpha/kernel/entry.S", 
         716
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
         391
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
         408
      ], 
      [
         5, 
         "sys_open", 
         "(const char __user *filename, int flags, int mode)", 
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
            "type": "int mode", 
            "def": null
         }, 
         "", 
         "", 
         "fs/open.c", 
         900
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
         969
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
         1771
      ], 
      [
         8, 
         "sys_creat", 
         "(const char __user *pathname, int mode)", 
         "0x08", 
         {
            "type": "const char __user *pathname", 
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
         933
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
         2520
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
         2352
      ], 
      [
         11, 
         "sys_execve", 
         "(char __user *, char __user *__user *, char __user *__user *, struct pt_regs *)", 
         "0x0b", 
         {
            "type": "char __user *", 
            "def": null
         }, 
         {
            "type": "char __user *__user *", 
            "def": null
         }, 
         {
            "type": "char __user *__user *", 
            "def": null
         }, 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "arch/alpha/kernel/entry.S", 
         925
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
         361
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
         "kernel/posix-timers.c", 
         855
      ], 
      [
         14, 
         "sys_mknod", 
         "(const char __user *filename, int mode, unsigned dev)", 
         "0x0e", 
         {
            "type": "const char __user *filename", 
            "def": null
         }, 
         {
            "type": "int mode", 
            "def": null
         }, 
         {
            "type": "unsigned dev", 
            "def": null
         }, 
         "", 
         "", 
         "fs/namei.c", 
         2067
      ], 
      [
         15, 
         "sys_chmod", 
         "(const char __user *filename, mode_t mode)", 
         "0x0f", 
         {
            "type": "const char __user *filename", 
            "def": null
         }, 
         {
            "type": "mode_t mode", 
            "def": null
         }, 
         "", 
         "", 
         "", 
         "fs/open.c", 
         507
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
         27
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
         "(char __user *filename, struct __old_kernel_stat __user *statbuf)", 
         "0x12", 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct __old_kernel_stat __user *statbuf", 
            "def": {
               "line": 4, 
               "file": "arch/arm/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         150
      ], 
      [
         19, 
         "sys_lseek", 
         "(unsigned int fd, off_t offset, unsigned int origin)", 
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
            "type": "unsigned int origin", 
            "def": null
         }, 
         "", 
         "", 
         "fs/read_write.c", 
         167
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
         "kernel/timer.c", 
         1337
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
         2118
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
         1171
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
         67
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
         212
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
         "kernel/time.c", 
         81
      ], 
      [
         26, 
         "sys_ptrace", 
         "(long request, long pid, long addr, long data)", 
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
            "type": "long addr", 
            "def": null
         }, 
         {
            "type": "long data", 
            "def": null
         }, 
         "", 
         "kernel/ptrace.c", 
         688
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
         "kernel/timer.c", 
         1314
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
               "file": "arch/arm/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         174
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
         2700
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
               "file": "include/linux/utime.h"
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
         356
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
         "kernel/sched.c", 
         4282
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
         98
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
         2317
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
         2765
      ], 
      [
         39, 
         "sys_mkdir", 
         "(const char __user *pathname, int mode)", 
         "0x27", 
         {
            "type": "const char __user *pathname", 
            "def": null
         }, 
         {
            "type": "int mode", 
            "def": null
         }, 
         "", 
         "", 
         "", 
         "fs/namei.c", 
         2130
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
         2244
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
         "fs/fcntl.c", 
         131
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
         1117
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
         896
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
         245
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
         51
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
         222
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
         2683
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
         217
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
         227
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
         274
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
         1132
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
         429
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
         921
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
               "file": "include/linux/utsname.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1132
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
         1460
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
         408
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
               "line": 200, 
               "file": "include/linux/types.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/statfs.c", 
         175
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
         "fs/fcntl.c", 
         116
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
         "kernel/timer.c", 
         1348
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
         1055
      ], 
      [
         67, 
         "sys_sigaction", 
         "(int sig, const struct old_sigaction __user *act, struct old_sigaction __user *oact)", 
         "0x43", 
         {
            "type": "int sig", 
            "def": null
         }, 
         {
            "type": "const struct old_sigaction __user *act", 
            "def": {
               "line": 117, 
               "file": "arch/arm/include/asm/signal.h"
            }
         }, 
         {
            "type": "struct old_sigaction __user *oact", 
            "def": {
               "line": 117, 
               "file": "arch/arm/include/asm/signal.h"
            }
         }, 
         "", 
         "", 
         "arch/mips/kernel/signal.c", 
         300
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
         2657
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
         2663
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
         59
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
         43
      ], 
      [
         72, 
         "sys_sigsuspend", 
         "(int history0, int history1, old_sigset_t mask)", 
         "0x48", 
         {
            "type": "int history0", 
            "def": null
         }, 
         {
            "type": "int history1", 
            "def": null
         }, 
         {
            "type": "old_sigset_t mask", 
            "def": null
         }, 
         "", 
         "", 
         "arch/s390/kernel/signal.c", 
         58
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
         2562
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
         1165
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
            "def": {
               "line": 41, 
               "file": "include/linux/resource.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1275
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
            "def": {
               "line": 41, 
               "file": "include/linux/resource.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1256
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
               "line": 22, 
               "file": "include/linux/resource.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1452
      ], 
      [
         78, 
         "sys_gettimeofday", 
         "(struct timeval __user *tv, struct timezone __user *tz)", 
         "0x4e", 
         {
            "type": "struct timeval __user *tv", 
            "def": {
               "line": 20, 
               "file": "include/linux/time.h"
            }
         }, 
         {
            "type": "struct timezone __user *tz", 
            "def": null
         }, 
         "", 
         "", 
         "", 
         "kernel/time.c", 
         101
      ], 
      [
         79, 
         "sys_settimeofday", 
         "(struct timeval __user *tv, struct timezone __user *tz)", 
         "0x4f", 
         {
            "type": "struct timeval __user *tv", 
            "def": {
               "line": 20, 
               "file": "include/linux/time.h"
            }
         }, 
         {
            "type": "struct timezone __user *tz", 
            "def": null
         }, 
         "", 
         "", 
         "", 
         "kernel/time.c", 
         185
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
         164
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
         187
      ], 
      [
         82, 
         "sys_old_select", 
         "(struct sel_arg_struct __user *arg)", 
         "0x52", 
         {
            "type": "struct sel_arg_struct __user *arg", 
            "def": {
               "line": 695, 
               "file": "fs/select.c"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "fs/select.c", 
         701
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
         2419
      ], 
      [
         84, 
         "sys_lstat", 
         "(char __user *filename, struct __old_kernel_stat __user *statbuf)", 
         "0x54", 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct __old_kernel_stat __user *statbuf", 
            "def": {
               "line": 4, 
               "file": "arch/arm/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         162
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
         311
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
         107
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
         1793
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
         "kernel/sys.c", 
         368
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
               "line": 61, 
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
         105
      ], 
      [
         90, 
         "sys_old_mmap", 
         "(struct mmap_arg_struct __user *arg)", 
         "0x5a", 
         {
            "type": "struct mmap_arg_struct __user *arg", 
            "def": {
               "line": 1132, 
               "file": "mm/mmap.c"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "mm/mmap.c", 
         1141
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
         2109
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
         127
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
         178
      ], 
      [
         94, 
         "sys_fchmod", 
         "(unsigned int fd, mode_t mode)", 
         "0x5e", 
         {
            "type": "unsigned int fd", 
            "def": null
         }, 
         {
            "type": "mode_t mode", 
            "def": null
         }, 
         "", 
         "", 
         "", 
         "fs/open.c", 
         436
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
         35
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
         216
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
         149
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
               "file": "arch/mips/include/asm/statfs.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/statfs.c", 
         102
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
               "file": "arch/mips/include/asm/statfs.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/statfs.c", 
         136
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
         2210
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
         "kernel/printk.c", 
         412
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
               "line": 263, 
               "file": "include/linux/time.h"
            }
         }, 
         {
            "type": "struct itimerval __user *ovalue", 
            "def": {
               "line": 263, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "", 
         "kernel/itimer.c", 
         279
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
               "line": 263, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/itimer.c", 
         103
      ], 
      [
         106, 
         "sys_newstat", 
         "(char __user *filename, struct stat __user *statbuf)", 
         "0x6a", 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct stat __user *statbuf", 
            "def": {
               "line": 4, 
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         237
      ], 
      [
         107, 
         "sys_newlstat", 
         "(char __user *filename, struct stat __user *statbuf)", 
         "0x6b", 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct stat __user *statbuf", 
            "def": {
               "line": 4, 
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         247
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
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         273
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
               "file": "include/linux/utsname.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1115
      ], 
      [
         110, 
         "sys_iopl", 
         "(unsigned int, struct pt_regs *)", 
         "0x6e", 
         {
            "type": "unsigned int", 
            "def": null
         }, 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "", 
         "not found", 
         ""
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
         1008
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
         "(struct vm86_struct __user *, struct pt_regs *)", 
         "0x71", 
         {
            "type": "struct vm86_struct __user *", 
            "def": {
               "line": 96, 
               "file": "arch/x86/include/asm/vm86.h"
            }
         }, 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "", 
         "not found", 
         ""
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
               "line": 22, 
               "file": "include/linux/resource.h"
            }
         }, 
         "", 
         "kernel/exit.c", 
         1726
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
         1533
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
         "kernel/timer.c", 
         1565
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
         221
      ], 
      [
         119, 
         "sys_sigreturn", 
         "(struct pt_regs *regs)", 
         "0x77", 
         {
            "type": "struct pt_regs *regs", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "arch/alpha/kernel/entry.S", 
         758
      ], 
      [
         120, 
         "sys_clone", 
         "(unsigned long, unsigned long, unsigned long, unsigned long, struct pt_regs *)", 
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
            "type": "unsigned long", 
            "def": null
         }, 
         {
            "type": "unsigned long", 
            "def": null
         }, 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "arch/alpha/kernel/entry.S", 
         733
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
         1214
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
               "file": "include/linux/utsname.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1097
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
               "file": "include/linux/timex.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "kernel/time.c", 
         206
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
         221
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
         2573
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
         2611
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
         720
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
         333
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
         382
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
         3278
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
         182
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
         191
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
         118
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
         126
      ], 
      [
         140, 
         "sys_llseek", 
         "(unsigned int fd, unsigned long offset_high, unsigned long offset_low, loff_t __user *result, unsigned int origin)", 
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
            "type": "unsigned int origin", 
            "def": null
         }, 
         "fs/read_write.c", 
         191
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
               "line": 135, 
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
         191
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
               "line": 20, 
               "file": "include/linux/time.h"
            }
         }, 
         "fs/select.c", 
         596
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
         1569
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
         711
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
         732
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
         226
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
               "file": "include/linux/sysctl.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "kernel/sysctl_binary.c", 
         1462
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
         491
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
         519
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
         556
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
         584
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
               "line": 46, 
               "file": "include/linux/sched.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sched.c", 
         4616
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
               "line": 46, 
               "file": "include/linux/sched.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sched.c", 
         4651
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
               "line": 46, 
               "file": "include/linux/sched.h"
            }
         }, 
         "", 
         "", 
         "kernel/sched.c", 
         4601
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
         "kernel/sched.c", 
         4625
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
         "kernel/sched.c", 
         4851
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
         "kernel/sched.c", 
         4989
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
         "kernel/sched.c", 
         5014
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sched.c", 
         5039
      ], 
      [
         162, 
         "sys_nanosleep", 
         "(struct timespec __user *rqtp, struct timespec __user *rmtp)", 
         "0xa2", 
         {
            "type": "struct timespec __user *rqtp", 
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         {
            "type": "struct timespec __user *rmtp", 
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/hrtimer.c", 
         1606
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
         510
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
         75
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
         84
      ], 
      [
         166, 
         "sys_vm86", 
         "(unsigned long, unsigned long, struct pt_regs *)", 
         "0xa6", 
         {
            "type": "unsigned long", 
            "def": null
         }, 
         {
            "type": "unsigned long", 
            "def": null
         }, 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "not found", 
         ""
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
         "(struct pollfd __user *ufds, unsigned int nfds, long timeout)", 
         "0xa8", 
         {
            "type": "struct pollfd __user *ufds", 
            "def": {
               "line": 31, 
               "file": "include/asm-generic/poll.h"
            }
         }, 
         {
            "type": "unsigned int nfds", 
            "def": null
         }, 
         {
            "type": "long timeout", 
            "def": null
         }, 
         "", 
         "", 
         "fs/select.c", 
         915
      ], 
      [
         169, 
         "sys_nfsservctl", 
         "(int cmd, struct nfsctl_arg __user *arg, void __user *res)", 
         "0xa9", 
         {
            "type": "int cmd", 
            "def": null
         }, 
         {
            "type": "struct nfsctl_arg __user *arg", 
            "def": {
               "line": 77, 
               "file": "include/linux/nfsd/syscall.h"
            }
         }, 
         {
            "type": "void __user *res", 
            "def": null
         }, 
         "", 
         "", 
         "fs/nfsctl.c", 
         86
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
         96
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
         106
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
         1466
      ], 
      [
         173, 
         "sys_rt_sigreturn", 
         "(struct pt_regs *)", 
         "0xad", 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "arch/alpha/kernel/entry.S", 
         771
      ], 
      [
         174, 
         "sys_rt_sigaction", 
         "(int sig, const struct sigaction __user *act, struct sigaction __user *oact, size_t sigsetsize)", 
         "0xae", 
         {
            "type": "int sig", 
            "def": null
         }, 
         {
            "type": "const struct sigaction __user *act", 
            "def": {
               "line": 123, 
               "file": "arch/alpha/include/asm/signal.h"
            }
         }, 
         {
            "type": "struct sigaction __user *oact", 
            "def": {
               "line": 123, 
               "file": "arch/alpha/include/asm/signal.h"
            }
         }, 
         {
            "type": "size_t sigsetsize", 
            "def": null
         }, 
         "", 
         "kernel/signal.c", 
         2624
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
         2111
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
         2171
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         {
            "type": "size_t sigsetsize", 
            "def": null
         }, 
         "", 
         "kernel/signal.c", 
         2242
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
         2404
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
         2710
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
         "not found", 
         ""
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
         "not found", 
         ""
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
         2104
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
         161
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
         235
      ], 
      [
         186, 
         "sys_sigaltstack", 
         "(const stack_t __user *, stack_t __user *, struct pt_regs *)", 
         "0xba", 
         {
            "type": "const stack_t __user *", 
            "def": null
         }, 
         {
            "type": "stack_t __user *", 
            "def": null
         }, 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "arch/alpha/kernel/signal.c", 
         199
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
         897
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
         "(struct pt_regs *)", 
         "0xbe", 
         {
            "type": "struct pt_regs *", 
            "def": {
               "line": 19, 
               "file": "arch/alpha/include/asm/ptrace.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "arch/alpha/kernel/entry.S", 
         746
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
            "def": {
               "line": 41, 
               "file": "include/linux/resource.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/sys.c", 
         1237
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
         1091
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
         "not found", 
         ""
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
         "not found", 
         ""
      ], 
      [
         195, 
         "sys_stat64", 
         "(char __user *filename, struct stat64 __user *statbuf)", 
         "0xc3", 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct stat64 __user *statbuf", 
            "def": {
               "line": 25, 
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         358
      ], 
      [
         196, 
         "sys_lstat64", 
         "(char __user *filename, struct stat64 __user *statbuf)", 
         "0xc4", 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct stat64 __user *statbuf", 
            "def": {
               "line": 25, 
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         369
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
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/stat.c", 
         380
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
         583
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
         "kernel/timer.c", 
         1359
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
         "kernel/timer.c", 
         1371
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
         "kernel/timer.c", 
         1365
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
         "kernel/timer.c", 
         1377
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
         594
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
         484
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
         203
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
         232
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
         602
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
         696
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
         746
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
         761
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
         800
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
         539
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
         655
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
         531
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
         819
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
         852
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
         2184
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
         256
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
         335
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
         273
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
         452
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
         "kernel/timer.c", 
         1493
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
         "not found", 
         ""
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
         279
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
         298
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
         317
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
         376
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
         390
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
         404
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
         449
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
         463
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
         477
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
         509
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
         527
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
         545
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
         2395
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
         916
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
         2605
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
         "kernel/sched.c", 
         4765
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
         "kernel/sched.c", 
         4817
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
               "file": "arch/x86/include/asm/ldt.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "arch/mips/kernel/syscall.c", 
         222
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
               "file": "arch/x86/include/asm/ldt.h"
            }
         }, 
         "", 
         "", 
         "", 
         "", 
         "not found", 
         ""
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
         1245
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
         1283
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
               "file": "include/linux/aio_abi.h"
            }
         }, 
         {
            "type": "struct timespec __user *timeout", 
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "fs/aio.c", 
         1808
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
         1711
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
               "file": "include/linux/aio_abi.h"
            }
         }, 
         "", 
         "", 
         "fs/aio.c", 
         1746
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
         "not found", 
         ""
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
         1087
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
         "not found", 
         ""
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
         1215
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
               "line": 47, 
               "file": "include/linux/eventpoll.h"
            }
         }, 
         "", 
         "fs/eventpoll.c", 
         1228
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
               "line": 47, 
               "file": "include/linux/eventpoll.h"
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
         1320
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
         "mm/fremap.c", 
         123
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
         920
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
               "line": 259, 
               "file": "include/asm-generic/siginfo.h"
            }
         }, 
         {
            "type": "timer_t __user * created_timer_id", 
            "def": null
         }, 
         "", 
         "", 
         "kernel/posix-timers.c", 
         522
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
               "line": 258, 
               "file": "include/linux/time.h"
            }
         }, 
         {
            "type": "struct itimerspec __user *old_setting", 
            "def": {
               "line": 258, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "kernel/posix-timers.c", 
         800
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
               "line": 258, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/posix-timers.c", 
         702
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
         "kernel/posix-timers.c", 
         732
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
         "kernel/posix-timers.c", 
         855
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/posix-timers.c", 
         941
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/posix-timers.c", 
         954
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "", 
         "", 
         "", 
         "kernel/posix-timers.c", 
         971
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         {
            "type": "struct timespec __user *rmtp", 
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "", 
         "kernel/posix-timers.c", 
         1001
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
               "line": 63, 
               "file": "arch/mips/include/asm/statfs.h"
            }
         }, 
         "", 
         "", 
         "fs/statfs.c", 
         118
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
               "line": 63, 
               "file": "arch/mips/include/asm/statfs.h"
            }
         }, 
         "", 
         "", 
         "fs/statfs.c", 
         154
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
         2383
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
               "line": 20, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/utimes.c", 
         219
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
         "not found", 
         ""
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
         "(unsigned long start, unsigned long len, unsigned long mode, unsigned long __user *nmask, unsigned long maxnode, unsigned flags)", 
         "0x112", 
         "param addr*", 
         "", 
         "", 
         "", 
         "", 
         "mm/mempolicy.c", 
         1232
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
         1348
      ], 
      [
         276, 
         "sys_set_mempolicy", 
         "(int mode, unsigned long __user *nmask, unsigned long maxnode)", 
         "0x114", 
         {
            "type": "int mode", 
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
         "", 
         "", 
         "mm/mempolicy.c", 
         1254
      ], 
      [
         277, 
         "sys_mq_open", 
         "(const char __user *name, int oflag, mode_t mode, struct mq_attr __user *attr)", 
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
            "type": "mode_t mode", 
            "def": null
         }, 
         {
            "type": "struct mq_attr __user *attr", 
            "def": {
               "line": 25, 
               "file": "include/linux/mqueue.h"
            }
         }, 
         "", 
         "ipc/mqueue.c", 
         673
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
         746
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "ipc/mqueue.c", 
         840
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "ipc/mqueue.c", 
         934
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
               "line": 259, 
               "file": "include/asm-generic/siginfo.h"
            }
         }, 
         "", 
         "", 
         "", 
         "ipc/mqueue.c", 
         1023
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
               "file": "include/linux/mqueue.h"
            }
         }, 
         {
            "type": "struct mq_attr __user *omqstat", 
            "def": {
               "line": 25, 
               "file": "include/linux/mqueue.h"
            }
         }, 
         "", 
         "", 
         "ipc/mqueue.c", 
         1154
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
               "line": 61, 
               "file": "include/linux/kexec.h"
            }
         }, 
         {
            "type": "unsigned long flags", 
            "def": null
         }, 
         "", 
         "kernel/kexec.c", 
         939
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
               "file": "arch/ia64/include/asm/siginfo.h"
            }
         }, 
         {
            "type": "int options", 
            "def": null
         }, 
         {
            "type": "struct rusage __user *ru", 
            "def": {
               "line": 22, 
               "file": "include/linux/resource.h"
            }
         }, 
         "kernel/exit.c", 
         1655
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
         57
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
         149
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
         1338
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
         "fs/ioprio.c", 
         76
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
         "fs/ioprio.c", 
         192
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
         680
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
         685
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
         726
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
         1273
      ], 
      [
         295, 
         "sys_openat", 
         "(int dfd, const char __user *filename, int flags, int mode)", 
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
            "type": "int mode", 
            "def": null
         }, 
         "", 
         "fs/open.c", 
         913
      ], 
      [
         296, 
         "sys_mkdirat", 
         "(int dfd, const char __user * pathname, int mode)", 
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
            "type": "int mode", 
            "def": null
         }, 
         "", 
         "", 
         "fs/namei.c", 
         2093
      ], 
      [
         297, 
         "sys_mknodat", 
         "(int dfd, const char __user * filename, int mode, unsigned dev)", 
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
            "type": "int mode", 
            "def": null
         }, 
         {
            "type": "unsigned dev", 
            "def": null
         }, 
         "", 
         "fs/namei.c", 
         2012
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
         558
      ], 
      [
         299, 
         "sys_futimesat", 
         "(int dfd, char __user *filename, struct timeval __user *utimes)", 
         "0x12b", 
         {
            "type": "int dfd", 
            "def": null
         }, 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct timeval __user *utimes", 
            "def": {
               "line": 20, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "", 
         "fs/utimes.c", 
         191
      ], 
      [
         300, 
         "sys_fstatat64", 
         "(int dfd, char __user *filename, struct stat64 __user *statbuf, int flag)", 
         "0x12c", 
         {
            "type": "int dfd", 
            "def": null
         }, 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct stat64 __user *statbuf", 
            "def": {
               "line": 25, 
               "file": "arch/alpha/include/asm/stat.h"
            }
         }, 
         {
            "type": "int flag", 
            "def": null
         }, 
         "", 
         "fs/stat.c", 
         391
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
         2341
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
         2671
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
         2470
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
         2377
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
         284
      ], 
      [
         306, 
         "sys_fchmodat", 
         "(int dfd, const char __user * filename, mode_t mode)", 
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
            "type": "mode_t mode", 
            "def": null
         }, 
         "", 
         "", 
         "fs/open.c", 
         474
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
         286
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
         675
      ], 
      [
         309, 
         "sys_ppoll", 
         "(struct pollfd __user *ufds, unsigned int nfds, struct timespec __user *tsp, const sigset_t __user *sigmask, size_t sigsetsize)", 
         "0x135", 
         {
            "type": "struct pollfd __user *ufds", 
            "def": {
               "line": 31, 
               "file": "include/asm-generic/poll.h"
            }
         }, 
         {
            "type": "unsigned int nfds", 
            "def": null
         }, 
         {
            "type": "struct timespec __user *tsp", 
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
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
         950
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
         1624
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
               "file": "include/linux/futex.h"
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
         2351
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
               "file": "include/linux/futex.h"
            }
         }, 
         {
            "type": "size_t __user *len_ptr", 
            "def": null
         }, 
         "", 
         "", 
         "kernel/futex.c", 
         2373
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
         1718
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
         "not found", 
         ""
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
         2061
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
         1692
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
         1075
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
         1621
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
         1373
      ], 
      [
         320, 
         "sys_utimensat", 
         "(int dfd, char __user *filename, struct timespec __user *utimes, int flags)", 
         "0x140", 
         {
            "type": "int dfd", 
            "def": null
         }, 
         {
            "type": "char __user *filename", 
            "def": null
         }, 
         {
            "type": "struct timespec __user *utimes", 
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         {
            "type": "int flags", 
            "def": null
         }, 
         "", 
         "fs/utimes.c", 
         173
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
         265
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
         164
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
         434
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
         "not found", 
         ""
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
               "line": 258, 
               "file": "include/linux/time.h"
            }
         }, 
         {
            "type": "struct itimerspec __user *otmr", 
            "def": {
               "line": 258, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "fs/timerfd.c", 
         194
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
               "line": 258, 
               "file": "include/linux/time.h"
            }
         }, 
         "", 
         "", 
         "", 
         "fs/timerfd.c", 
         252
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
         211
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
         409
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
         1187
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
         "fs/fcntl.c", 
         53
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
         1101
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
         640
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
         759
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
         784
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
         2437
      ], 
      [
         336, 
         "sys_perf_event_open", 
         "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)", 
         "0x150", 
         {
            "type": "struct perf_event_attr __user *attr_uptr", 
            "def": {
               "line": 166, 
               "file": "include/linux/perf_event.h"
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
         "kernel/perf_event.c", 
         5065
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
               "line": 72, 
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
            "def": {
               "line": 116, 
               "file": "include/linux/coda.h"
            }
         }, 
         "net/socket.c", 
         2168
      ]
   ]
}

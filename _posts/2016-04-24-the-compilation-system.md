---
title: 编译系统
category: 计算机理论
---

本文摘抄自[《深入理解计算机系统》](https://book.douban.com/subject/5333562/)

## 源代码

`hello.c`

~~~c
#include <stdio.h>

int main() {
  printf("hello, world\n");
}
~~~

## 编译系统

![the-compilation-system](/public/images/cs/the-compilation-system.png)

## 1. 预处理阶段 (Preprocessing phase) 
预处理（cpp）根据以字符 # 开头的命令，修改原始的 C 程序，生成扩展名为 .i 的文件。

~~~shell
$ gcc -E hello.c -o hello.i
~~~

## 2. 编译阶段 (Compilation phase) 
编译器（cc1）将文本文件 hello.i 翻译成文本文件 hello.s，它包含一个汇编语言程序。

~~~shell
$ gcc -S hello.i -o hello.s
~~~

## 3. 汇编阶段 (Assembly phase)

编译器（as）将 hello.s 翻译成机器语言指令，把这些指令打包成一种叫做**可重定位目标程序**（relocatable object program）的格式，并将结果保存在目标文件 hello.o 中。

~~~shell
$ as hello.s -o hello.o
~~~

## 4. 链接阶段 (Linking phase)

`printf` 函数是标准 C 库中的一个函数，在 `printf.o` 这个单独预编译好的目标文件中。连接器（ld）将 printf.o 和 hello.o 合并，结果得到 hello **可执行目标文件**。

~~~shell
$ gcc hello.o -o hello
~~~


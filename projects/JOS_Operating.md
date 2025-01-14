# JOSS Operating System Labs 1-4

As part of my operating systems course, I completed Labs 1-4 of the JOSS Operating System (OS) series, which are designed to teach fundamental OS concepts. These labs provided hands-on experience with key areas of operating system development, including process management, memory allocation, and file systems. Below, I detail what I learned and implemented in each lab.

## Lab 1: Bootstrapping the OS

In Lab 1, I explored the bootstrapping process, which is how an operating system is loaded into memory and starts executing. This involved:

- Writing a basic bootloader that initializes hardware and loads the OS kernel into memory.
- Understanding the transition from real mode to protected mode in x86 architecture.
- Implementing basic routines for setting up a minimal kernel and printing output to the screen.

This lab helped solidify my understanding of how a computer transitions from power-on to executing a full-fledged operating system.

## Lab 2: Process Management

Lab 2 focused on implementing process management features, such as context switching and scheduling. Key tasks included:

- Writing a round-robin scheduler to manage multiple processes.
- Implementing system calls for process creation and termination.
- Designing and debugging a basic process control block (PCB) structure to store process state.

This lab reinforced my understanding of how an OS multitasks by sharing CPU time among multiple processes.

## Lab 3: Memory Management

In Lab 3, I tackled memory management, specifically implementing a basic paging system. Key accomplishments included:

- Setting up page tables and configuring the memory management unit (MMU) to enable virtual memory.
- Allocating and deallocating memory using a simple allocator.
- Debugging issues related to page faults and ensuring memory isolation between processes.

This lab deepened my knowledge of how operating systems provide each process with its own virtual address space.

## Lab 4: File System Basics

Lab 4 introduced file systems, where I worked on creating a simple file system with essential functionality. Highlights of this lab were:

- Implementing basic file operations, such as open, read, write, and close.
- Designing a directory structure to manage files efficiently.
- Understanding how file metadata, such as file size and permissions, is stored and accessed.

This lab provided valuable insight into how file systems interact with storage devices and manage data persistence.

## Takeaways

These labs have been instrumental in developing my understanding of operating systems. Through hands-on implementation, I gained practical experience in areas such as process scheduling, memory virtualization, and file system design. The challenges of debugging low-level code and ensuring system stability taught me the importance of precision and careful planning in systems programming. Overall, these labs have significantly enhanced my ability to approach complex technical problems systematically.

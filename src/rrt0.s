.section .text.jmp, "ax", %progbits
.align 2

.global _start
_start:
	b trampoline
	.word __module_header - _start
	.ascii "HOMEBREW"

.section .text, "ax", %progbits
.align 2
trampoline:
	mov x2, lr // save previous function location to jump back
	b __nx_rrt0_entry
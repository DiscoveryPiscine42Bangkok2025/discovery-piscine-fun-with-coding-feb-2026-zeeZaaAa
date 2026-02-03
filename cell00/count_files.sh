#!/bin/bash
count=$(find . -maxdepth 1 ! -name "." | wc -l)
printf "%d" "$count"

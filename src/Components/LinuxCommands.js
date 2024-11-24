import React from 'react';
import LinuxCommandBox from './LinuxCommandBox'; // Import the reusable component
import './Linux_cmds.css';
import Collapse from './Collapse';

export default function Linux_Commands() {
    const text = "$: Primary Prompt\n>: Secondary Prompt";

    // Using map to handle \n
    const formattedText = text.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {item}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="container">
            <h1>Linux Commands</h1>
            <h3>Some Common Linux Commands</h3>
            <ol>
                <li><b>`cal`</b> displays the calender of current months and year by default.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li>`cal 2025` displays all the months of year 2025.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2="2025"
                    cmd3=""
                />
                <hr />
                <li>`cal 4 2025` will only display April Month of 2025 Year.</li>
                <LinuxCommandBox
                    title="Calendar cmd"
                    cmd1="cal"
                    cmd2="4 2025"
                    cmd3=""
                />
                <hr />
                <li>`date` will display current system date and time.</li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li>`date +%d` will display current day of the month. <b>(Ex: 27)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%d"
                    cmd3=""
                />
                <hr />
                <li>`date +%D` will display current date. <b>(Ex: MM/DD/YYYY)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%D"
                    cmd3=""
                />
                <hr />
                <li>`date +%m` will display current month number. <b>(Ex: 08)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%m"
                    cmd3=""
                />
                <hr />
                <li>`date +%M` will display current minutes. <b>(Ex: 40)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%M"
                    cmd3=""
                />
                <hr />
                <li>`date +%h` will display current month start name. <b>(Ex: Mar)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%h"
                    cmd3=""
                />
                <hr />
                <li>`date +%y` will display current year in small. <b>(Ex: 24)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%y"
                    cmd3=""
                />
                <hr />
                <li>`date +%Y` will display current year. <b>(Ex: 2024)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%Y"
                    cmd3=""
                />
                <hr />
                <li>`date +%H` will display current hour. <b>(Ex: 10)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%H"
                    cmd3=""
                />
                <hr />
                <li>`date +%S` will display current seconds. <b>(Ex: 44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%S"
                    cmd3=""
                />
                <hr />
                <li>`date +%T` will display current day time. <b>(Ex: 10:40:44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2="+%T"
                    cmd3=""
                />
                <hr />
                <li>`date +"%H:%M:%S"` will display current day time. <b>(Ex: 10:40:44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H:%M:%S"'
                    cmd3=""
                />
                <hr />
                <li>`date +%H-%M-%S` will display current day time. <b>(Ex: 10-40-44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H-%M-%S"'
                    cmd3=""
                />
                <hr />
                <li>`date +%H %M %S` will display current day time. <b>(Ex: 10 40 44)</b></li>
                <LinuxCommandBox
                    title="Date cmd"
                    cmd1="date"
                    cmd2='+"%H %M %S"'
                    cmd3=""
                />
            </ol>
            <hr />
            <Collapse title="Prompt Types" desc={formattedText}></Collapse>
            <hr />
            <ol>
                <h3>Display Commands</h3>
                <li><b>`echo`</b> displays the msg on screen as it is inputed.</li>
                <LinuxCommandBox
                    title="Display cmd"
                    cmd1="echo"
                    cmd2='"Hi! Xavier`s BCA & BSC Students"'
                    cmd3=""
                />
                <hr />
                <li>`echo -e` used to take input from user.</li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1="echo -e"
                    cmd2='"Enter the Number: \c"'
                    cmd3=""
                />
                <hr />
                <li>Using `echo` cmd for printing statements in new line without using escape statements.
                    <b><br></br>Ex: echo "FYBCA<br></br>SYBCA<br></br>TYBCA"</b>
                </li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1='echo "FYBCA'
                    cmd2=""
                    cmd3=""
                    noncommand1='SYBCA'
                    noncommand2='TYBCA"'
                />
                <hr />
                <li><b>`printf`</b> cmd is also used to display the output on screen</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1='printf "Hi,'
                    cmd2='%s"'
                    cmd3='"Mithil"'
                />
                <b>Output: Hi, Mithil</b>
                <hr />
                <li>`printf` when used with identifiers.</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1="printf"
                    cmd2='"Rollno: %5d \nName: %30s \n"'
                    cmd3="123 TYBCA"
                />
                <b><i>Output</i> <br></br>Rollno:&nbsp;&nbsp; 123 <br></br>
                    Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TYBCA
                </b>
                <hr />
                <li>`printf` when used with identifiers.</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1="printf"
                    cmd2='"Rollno: %-5d \nName: %-30s \n"'
                    cmd3="123 TYBCA"
                />
                <b><i>Output</i> <br></br>Rollno: 123 <br></br>
                    Name: TYBCA
                </b>
                <hr />
                <li>`printf` when used with identifiers to get the values in Octal & Hexa.</li>
                <LinuxCommandBox
                    title="printf cmd"
                    cmd1="printf"
                    cmd2='"The Octal of 255 is %o \nThe Hexa of 255 is %x\n"'
                    cmd3="255 255"
                />
                <b><i>Output</i> <br></br>The Octal of 255 is 377 <br></br>
                    The Hexa of 255 is ff
                </b>
            </ol>
            <hr />
            <ol>
                <Collapse title="Internal Command" desc="If the Command is internal the output will say that the command is shell builtin."></Collapse><br></br>
                <Collapse title="External Command" desc="For External Command, output will give a path."></Collapse>
            </ol>
            <hr />
            <ol>
                <h3>Script Command</h3>
                <li><b>`script`</b> command is used to start script (To Record the user session)</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="script"
                    cmd2=''
                    cmd3=""
                />
                <b><i>Output</i> <br></br>Script Started, file is typescript.<br></br>
                </b>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="exit"
                    cmd2=''
                    cmd3=""
                />
                <b>write `exit` to exit the script cmd</b>
                <hr />
                <li>`cat typescript` command is used to view recorded session</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="cat"
                    cmd2='typescript'
                    cmd3=""
                />
                <hr />
                <li>`script -a typescript` command is used to append new recording in typescript file</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="script"
                    cmd2='-a typescript'
                    cmd3=""
                />
                <hr />
                <li>`script newfile` will create a new record file</li>
                <LinuxCommandBox
                    title="script cmd"
                    cmd1="script"
                    cmd2='newfile'
                    cmd3=""
                />
                <hr />
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No</th>
                            <th scope="col">Key</th>
                            <th scope="col">Behaviour</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th scope="row">1</th>
                            <td>f / spacebar</td>
                            <td>Advances by one screen</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">2</th>
                            <td>b</td>
                            <td>Moves back one screen</td>
                        </tr>
                    </tbody>
                </table>
            </ol>
            <hr />
            <ol>
                <h3>Man Commands</h3>
                <li><b>`man`</b> command displays the documentation often called the man documentation -- of practically every command on the system.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='wc'
                    cmd3=""
                />
                <b>wc</b> - print newline, word, and byte counts for each file.<br></br>
                <hr />
                <li>`man -k wc` displays all the commands contains wc with one line description</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='-k wc'
                    cmd3=""
                />
                <b>man -k or apropos</b> searches the name section of all man pages that contains the keyword.<br></br>
                <b>-k option: </b> This option searches the given commands as a regular expression in all the manuals and it returns the manual pages with the section number in which it is found.<br></br>
                <hr />
                <li><b>`whatis wc`/`man -f wc`</b> displays what is wc with one life description.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="whatis"
                    cmd2='wc'
                    cmd3=""
                />
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='-f wc'
                    cmd3=""
                />
                <hr />
                <li><b>`whatis date`/`man -f date`</b> displays or set system date and time.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="whatis"
                    cmd2='date'
                    cmd3=""
                />
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="man"
                    cmd2='-f date'
                    cmd3=""
                />
                <hr />
                <li><b>`wc f1`</b> displays total lines, words and characters in f1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='f1'
                    cmd3=""
                />
                <b><i>Output: </i></b>
                <span>11 51 538 f1</span><br></br><span>(lines)(words)(characters)(fileName)</span>
                <hr />
                <li><b>`wc file1 f1`</b> displays total lines, words and characters of both the files.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='file1'
                    cmd3='f1'
                />
                <b><i>Output: </i></b><br></br>
                <span>6 6 41 file1</span><br></br><span>11 51 538 f1</span><br></br><span>17 57 579 total</span><br></br><span>(lines)(words)(characters)(fileName)</span>
                <hr />
                <li><b>`wc -l file1`</b> displays total numbers of lines in file1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='-l file1'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>6 file1</span>
                <hr />
                <li><b>`wc -w file1`</b> displays total numbers of words in file1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='-w file1'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>6 file1</span>
                <hr />
                <li><b>`wc -c file1`</b> displays total numbers of characters in file1 file.</li>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2='-c file1'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>538 file1</span>
                <hr />
                <li><b>`wc`</b> when you write only wc, then you can enter some text and you will get total lines, words, and characters you entered.</li>
                <b>Example: </b>
                <LinuxCommandBox
                    title="man cmd"
                    cmd1="wc"
                    cmd2=""
                    cmd3=""
                    noncommand1="today is tuesday "
                    noncommand2="today is secondary"
                />
                <b><i>Output: </i></b><span>2 6 30</span>
                <hr />
                <li><b>`passwd`</b> for changing the user password.</li>
                <LinuxCommandBox
                    title="passwd cmd"
                    cmd1="passwd"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`pwd`</b> for changing to current working directory.</li>
                <LinuxCommandBox
                    title="pwd cmd"
                    cmd1="pwd"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`ls`</b> will list out all the files and subdirectory which are present in the current directory.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`ls -x`</b> same as ls command.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-x"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -F`</b> is used to list directory contents while appending a special character at the end of each listed item to indicate its type. This makes it easier to differentiate between files, directories, and other special files at a glance.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-F"
                    cmd3=""
                />
                <b><i>Syntax: </i></b><span>directory/  executable*  symlink@  fifo|  socket=</span>
                <hr />
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th scope="row">1</th>
                            <td>/</td>
                            <td>Indicates a directory</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">2</th>
                            <td>*</td>
                            <td>Indicates an executable file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">3</th>
                            <td>@</td>
                            <td>Indicates a symbolic link</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">4</th>
                            <td>|</td>
                            <td>named Pipe</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">5</th>
                            <td>=</td>
                            <td>Indicates a socket</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">6</th>
                            <td>{">"}</td>
                            <td>Indicates a door</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <li><b>`ls -a`</b> displays all the files including hidden files.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-a"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -R`</b> displays entire directory tree structure.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-R"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -r`</b> displays reverse sorted order.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-r"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -l`</b> displays all the attributes of the file.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-l"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -file1` | `ls -dir1`</b> checks file/directory is present or not, if not it will raise error.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-file1"
                    cmd3=""
                />
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-dir1"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -d dir1`</b> list the name of directory if present.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-d"
                    cmd3="dir1"
                />
                <hr />
                <li><b>`ls -t`</b> display file with last modification time.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-t"
                    cmd3=""
                />
                <hr />
                <li><b>`ls -lt`</b> display with date and time from last modification.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-lt"
                    cmd3=""
                />
                <b><i>Output:</i></b><br></br><span>drwxr-xr-x 2 user group   4096 Aug  4 15:20 reports/<br></br>
                    -rw-r--r-- 1 user group  15045 Aug  3 14:22 notes.txt<br></br>
                    -rw-r--r-- 1 user group  25436 Aug  2 10:11 data.csv<br></br>
                    -rwxr-xr-x 1 user group 124576 Jul 29 11:45 script.sh<br></br>
                    -rw-r--r-- 1 user group  50032 Jul 28 09:15 presentation.pptx<br></br>
                </span>
                <hr />
                <li><b>`ls -lut`</b> is used to list directory contents while sorting the files based on the last access time, showing detailed information about each file.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-lut"
                    cmd3=""
                />
                <b><i>Output:</i></b><br></br><span>-rw-r--r--  1 user group  100 Aug  1 12:30 file1.txt<br></br>
                -rw-r--r--  1 user group  200 Jul 31 09:15 file2.txt<br></br>
                -rw-r--r--  1 user group  150 Jul 30 14:20 file3.txt<br></br>
                drwxr-xr-x  2 user group 4096 Jul 29 17:05 directory/<br></br>
                </span>
                <hr />
                <li><b>`ls -i`</b> is used to list the contents of a directory along with their inode numbers.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="-i"
                    cmd3=""
                />
                <b><i>Output:</i></b><br></br><span>131072 file1.txt<br></br>
                    131073 file2.txt<br></br>
                    131074 file3.txt<br></br>
                    131075 directory/<br></br>
                </span>
            </ol>
            <hr />
            <ol>
                <h3>Cat Command</h3>
                <li><b>`cat`</b> command is used to display content of file, create file, append to existing file, concatenate two files.</li>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`cat {">"} newfile`</b> will create new file.</li>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2="> newfile"
                    cmd3=""
                    noncommand1="this"
                    noncommand2="that"
                />
                <hr />
                <li><b>`cat {">>"} newfile`</b> will append to the file.</li>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2=">> newfile"
                    cmd3=""
                />
                <hr />
                <li><b>`cat newfile`</b> to display the newfile.</li>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2="newfile"
                    cmd3=""
                />
                <hr />
                <ul>
                    <li>Ordinary file is also known as Regular File.</li>
                    <li>New line character is also known as line feed.</li>
                    <li>OD (command) - Octal Dump</li>
                    <li>inode shortend from index node.</li>
                </ul>
                <hr />
                <li><b>`cat -n file1`</b> will display content with line number like 1, 2, 3.</li>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2="-n file1"
                    cmd3=""
                />
                <hr />
                <li><b>`cat -v`</b> If you have non printing ASCII characters in your input, you can use cat command with -v option to display these characters.</li>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2="-v"
                    cmd3=""
                />
                <hr />
                <li>To create a file we can also use echo command. (For small files only)</li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1="echo"
                    cmd2='"Good Morning"'
                    cmd3="> newf1_divb"
                />
                <ul>
                    <li><b>`cat newf1_divb`</b> to display the file content.</li>
                </ul>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2='newf1_divb'
                    cmd3=""
                />
                <b><i>Output: </i></b><span>Good Morning</span>
                <hr />
                <li>To append new text we can also use echo command.</li>
                <LinuxCommandBox
                    title="echo cmd"
                    cmd1="echo"
                    cmd2='"Div B"'
                    cmd3=">> newf1_divb"
                />
                <ul>
                    <li><b>`cat newf1_divb`</b> to display the file content.</li>
                </ul>
                <LinuxCommandBox
                    title="cat cmd"
                    cmd1="cat"
                    cmd2='newf1_divb'
                    cmd3=""
                />
                <b><i>Output: </i></b><span><br />Good Morning<br></br>Div B</span>
            </ol>
            <hr />
            <ol>
                <h3>Head & Tail Command</h3>
                <ul>
                <li>By Default <b>head</b> command will display <b><i>first</i></b> 10 lines from beginning of a file.</li>
                </ul>
                <hr />
                <li><b>`head emp1`</b> will display first 10 lines of emp1 file.</li>
                <LinuxCommandBox
                    title="head cmd"
                    cmd1="head"
                    cmd2="emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`head -3 emp1`</b> will display only 3 lines of emp1 file.</li>
                <LinuxCommandBox
                    title="head cmd"
                    cmd1="head"
                    cmd2="-3 emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`head -n 3 emp1`</b> will also display only 3 lines of emp1 file.</li>
                <LinuxCommandBox
                    title="head cmd"
                    cmd1="head"
                    cmd2="-n 3 emp1"
                    cmd3=""
                />
                <hr />
                <ul>
                <li>By Default <b>tail</b> command will display <b><i>last</i></b> 10 lines from beginning of a file, is used to display end of the file.</li>
                </ul>
                <hr />
                <li><b>`tail emp1`</b> will display last 10 lines from emp1 file.</li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`tail -3 emp1`</b> will display last 3 lines from emp1 file.</li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="-3 emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`tail -n +5 emp1`</b> output will display the content of the file from 5th line to the end of the file.</li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="-n +5 emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`tail -c -58 emp1`</b>
                    <ul>
                        <li><b>`-c`</b> will extract</li>
                        <li><b>`-58`</b> will extract only -58 bits characters</li>
                    </ul>
                </li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="-c -58 emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`tail -c +58 emp1`</b>
                    <ul>
                        <li><b>`+58`</b> will extract & display from 58 bits characters till end of the file.</li>
                    </ul>
                </li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="-c +58 emp1"
                    cmd3=""
                />
                <hr />
                <li><b>`tail -f`</b><span>used by system administrator. (interupt by ^c)</span>
                </li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="-f"
                    cmd3=""
                />
                <p>This option is mainly used by system administrator to monitor the growth of the log files written by many unix program as they are running. This option shows the last ten lines of a file and will update when new lines are added. As new lines are written to the log, the console will update with the new lines.</p>
                <p>The prompt doesn't return even after work is over so, we have to use the interupt key to abort this command. In general, the applications writes error messages to log files. You can use the -f option to check for the error messages as and when they appear in the log files.</p>
                <hr />
                <li><b>`tail -c 58 emp1` </b><span>will also display the same output as `tail -c -58 emp1`</span>
                </li>
                <LinuxCommandBox
                    title="tail cmd"
                    cmd1="tail"
                    cmd2="-c 58 emp1"
                    cmd3=""
                />
            </ol>
            <hr />
            <ol>
                <h3>Touch Command</h3>
                <li><b>`touch` </b>command
                <LinuxCommandBox
                    title="touch cmd"
                    cmd1="touch"
                    cmd2=""
                    cmd3=""
                />
                    <ul>
                        <li>Whenever you write to a file the type of last modification is updated in the files inode.</li>
                        <li>A Directory can be modified by changing it's entries by creating, removing and renaming in the directory.</li>
                        <li>An Access time indicates the last time someone reads, wrote or executed the file.</li>
                        <li>The time is different from the modification time that gets set only, when the contents of the file are changed.</li>
                        <li>For a directory the access time is changed by a read operation only, creating or removing a file or doing a cd to a directory does not change it's access time.</li>
                    </ul>
                </li>
                <br />
                <ul>
                    <li>Syntax: <b>touch</b> options expression filename(s)</li>
                    <li>options: -m (Modification time) <br />&emsp;&emsp;&emsp;&emsp;-a (Change access time)</li>
                    <li>(YYYY MM DD hh mm)</li>
                </ul>
                <hr />
                <li><b>`TOUCH`</b> COMMAND IS ALSO USED TO CREATE THE FILE.</li>
                <LinuxCommandBox
                    title="touch cmd"
                    cmd1="touch"
                    cmd2="filetouch1"
                    cmd3=""
                />
                <hr />
                <li><b>`touch -m filetouch1`</b> is used to update the modification time of a file named filetouch1</li>
                <LinuxCommandBox
                    title="touch cmd"
                    cmd1="touch"
                    cmd2="-m filetouch1"
                    cmd3=""
                />
                <hr />
                <li><b>`touch -a filetouch1`</b> is used to change the access time of a file named filetouch1</li>
                <LinuxCommandBox
                    title="touch cmd"
                    cmd1="touch"
                    cmd2="-a filetouch1"
                    cmd3=""
                />
            </ol>
            <hr />
            <h3>ls commands and rm commands</h3>
            <ol>
                <li><b>`ls f*`</b> will list out all the files having name starts with f.</li>
                <LinuxCommandBox
                    title="ls cmd"
                    cmd1="ls"
                    cmd2="f*"
                    cmd3=""
                />
                <div>
                    <p>The Metacharacters used to match filenames belong to a category called wild cards. <br />Example: *, ?</p>
                </div>
                <hr />
                <li><b>`echo *`</b> will list out all file names from current as well as subdirectory.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ehco"
                    cmd2="*"
                    cmd3=""
                />
                <hr />
                <li><b>`rm`</b> command is used to remove files.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="rm"
                    cmd2=""
                    cmd3=""
                />
                <hr />
                <li><b>`rm *.o`</b> will remove all the object(.obj) files.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="rm"
                    cmd2="*.o"
                    cmd3=""
                />
                <hr />
                <li><b>`rm * .o`</b> if space is there between .o and * then all the files will be deleted.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="rm"
                    cmd2="*"
                    cmd3=".o"
                />
                <hr />
                <li><b>`ls f?`</b> lists the files starts with f and has only two characters</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="f?"
                    cmd3=""
                />
                <div>
                    <p><b><i>Output: </i></b>f*, f1, f2, f3</p>
                </div>
                <hr />
                <li><b>`ls f[1234]`</b> will list all the files who's name has 2 characters and the second character is either 1, 2, 3 or 4.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="f[1234]"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>f1, f2, f3, f4</p>
                <hr />
                <li><b>`ls file[1234]`</b> will list all the files who's name has 5 characters and the fifth character is either 1, 2, 3 or 4.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="file[1234]"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>file1, file2, file3, file4</p>
                <hr />
                <li><b>`ls f[1-4]`</b> in this way we can pass range instead of writing all the characters.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="f[1-4]"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>f1, f2, f3, f4</p>
                <hr />
                <li><b>`ls [fF]*`</b> command will list all the files who's name starts with f or F.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="[fF]*"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>f1, f2, file3, file4, File1, File2</p>
                <hr />
                <li><b>`ls F[!1-4]`</b> here second character should not be between 1 to 4.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="F[!1-4]"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>File5, File6</p>
                <hr />
                <li><b>`ls *.sh`</b> list out all the files with .sh extension from current directory.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2="*.sh"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>prog1.sh, prog2.sh</p>
                <hr />
                <li><b>`ls .???*`</b> list out all the files who's extension equal to 3 or more.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2=".???*"
                    cmd3=""
                />
                <p><b><i>Output: </i></b>prog1.cpp, prog2.java</p>
            </ol>
            <hr />
            <h3>more or less commands</h3>
            <ol>
                <li><b>`more lshelp`</b> will display file lshelp page by page.</li>
                <LinuxCommandBox
                    title="more cmd"
                    cmd1="more"
                    cmd2="lshelp"
                    cmd3=""
                />
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No</th>
                            <th scope="col">Key</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th scope="row">1</th>
                            <td>F/spacebar</td>
                            <td>to move to the next page</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">2</th>
                            <td>b</td>
                            <td>to move to the previous page</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">3</th>
                            <td>.</td>
                            <td>dot cmd will repeat the last command</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">4</th>
                            <td>5f</td>
                            <td>to move to the 5th page from current page</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">5</th>
                            <td>q</td>
                            <td>quit the more or less command</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">6</th>
                            <td>h</td>
                            <td>will open help</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">7</th>
                            <td>v</td>
                            <td>will be open in vi editor to edit the file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">8</th>
                            <td>:x</td>
                            <td>to save edited file content</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">9</th>
                            <td>!cmd</td>
                            <td>any command written beside ! will executes that command</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">10</th>
                            <td>/pat</td>
                            <td>will start to search pattern from beginning to end of the file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">10</th>
                            <td>m</td>
                            <td>in patten search (to go to the next instance)</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">11</th>
                            <td>N</td>
                            <td>in patten search (to go to the previous instance)</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">12</th>
                            <td>?pat</td>
                            <td>also search but from end to beginning</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">13</th>
                            <td>j</td>
                            <td>to go down 1 line</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">14</th>
                            <td>k</td>
                            <td>to go up 1 line</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">15</th>
                            <td>G</td>
                            <td>take you to the end of the file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">16</th>
                            <td>1G/p</td>
                            <td>take you to the beginning of the file</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <li><b>`less lshelp`</b> will also displays the lshelp file.</li>
                <LinuxCommandBox
                    title="less cmd"
                    cmd1="less"
                    cmd2="lshelp"
                    cmd3=""
                />
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">No</th>
                            <th scope="col">Key</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                            <th scope="row">1</th>
                            <td>/list</td>
                            <td>will search list word from bottom of the file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">2</th>
                            <td>i</td>
                            <td>to insert in file</td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">3</th>
                            <td>esc</td>
                            <td>after insert to save the file</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <li><b>`ls -l | grep "^d" | wc -l`</b> displays all the directory which starts with d.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2='-l | grep "^d"'
                    cmd3="| wc -l"
                />
                <hr />
                <Collapse title="1 Mark MCQ" desc="Bash stands for Bourne Again Shell"></Collapse><br />
                <Collapse title="Basic Info" desc="/dev (all device files) and /bin/usr/bin (all commands file) and /home (user home directory)"></Collapse>
                <hr />
                <h3>mkdir and rmdir command</h3>
                <li><b>`mkdir`</b> used to create directory</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="mkdir xavier"
                    cmd2='xavier/BCA'
                    cmd3="xavier/BCA/FY xavier/BCA/SY xavier/BCA/TY"
                />
                <hr />
                <li><b>`ls -R`</b> to view created directory</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="ls"
                    cmd2='-R xavier'
                    cmd3=""
                />
                <hr />
                <li><b>`rmdir`</b> to remove an directory only if its empty.</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="rmdir xavier/BCA/FY xavier/BCA/SY xavier/BCA/TY"
                    cmd2='xavier/BCA'
                    cmd3="xavier"
                />
                <li>or <b>`rm -r xavier`</b> Entire directory even though directory is non empty. (capital R can also be used)</li>
                <LinuxCommandBox
                    title="bash"
                    cmd1="rm"
                    cmd2="-r xavier"
                    cmd3=""
                />
            </ol>
        </div>
    );
}
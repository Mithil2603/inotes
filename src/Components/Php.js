import React from 'react'
// import CodeBox from './CodeBox'
import LinuxCommandBox from './LinuxCommandBox'

export default function Php() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="title"><b>PHP Notes</b></h1>
          <hr />
          <h2 className="secondary-title"><b>What is PHP?</b></h2>
          <p className="text">
            <b>PHP</b> <span className='text-primary'>(Hypertext Preprocessor)</span> is a popular open-source scripting language primarily used for web development. It is a server-side scripting language, which means that it runs on a web server and generates dynamic content that can be sent to a client's web browser.
          </p>
          <p className="text">
            PHP was originally created by Ramus Lerdorf in 1994 and has since become one of the most widely used language for building websites and web applications. It is particularly well-suited for web development due to its simplicity, flexibility, and broad community support.
          </p>
          <h3 className="third-title"><b>Characteristics of PHP include:</b></h3>
          <div className="description1">
            <p className='text'>
              <ul><li><b>Syntax</b></li></ul>
              PHP Syntax is similar to C, Java, and other programming languages, making it relatively easy to learn and use.
            </p>
            <ul><li><b>Server-Side Scripting</b></li></ul>
            <p className='text'>
              PHP Scripts are executed on the server before the resulting HTML is sent to the client's browser, allowing dynamic generation of web content.
            </p>
            <ul><li><b>Integration</b></li></ul>
            <p className='text'>
              PHP can be embedded within HTML code making it easy to mix dynamic and static content.
            </p>
            <ul><li><b>Database Connectivity</b></li></ul>
            <p className='text'>
              PHP has extensive support for connecting to databases, enabling the creation of database-driven web application.
            </p>
            <ul><li><b>Cross-Platform Compatibility</b></li></ul>
            <p className='text'>
              PHP can run on various operating systems (Windows, Linux, MacOS) and be deployed on a wide range of web servers.
            </p>
            <ul><li><b>Large Community & Ecosystems</b></li></ul>
            <p className='text'>
              PHP has a vast community of developers, which means there are numerous libraries, frameworks (such as Laravel, Symfony, and CodeIgniter), and resources available to aid in development.
            </p>
            <ul><li><b>Open-Source Nature</b></li></ul>
            <p className='text'>
              PHP is an open-source language, which means it is freely available and continually evolving through contributions from the community.
            </p>
            <p className="text">
              PHP can be used to perform a wide range of web-related tasks, including handling from data, processing user input, interacting with databases, creating dynamic web pages, generating PDF's, working with files, and much more. It provides various built-in functions and extensive documentation to support developers in their projects.
            </p>
            <h3 className="third-title"><b>Introduction to Dynamic Web Content with PHP</b></h3>
            <p className="text">
              Dynamic Web Content refers to web pages that can change and adapt based on user input, database interactions, or other external factors. PHP is a widely used server side scripting language that enables the creation of dynamic web content. It allows developers to embed PHP code within HTML, interact with databases, process from data, and generate personalised web pages on the fly.
            </p>
            <p className="text"><b>How?</b></p>
            <ul><li><b>Server-Side Execution</b></li></ul>
            <p className='text'>
              PHP is executed on the server before the resulting HTML is sent to the client's web browser. This means that PHP code can perform complex computations, interact with databases, and generate customized content based on various factors.
            </p>
            <ul><li><b>Embedding PHP in HTML</b></li></ul>
            <p className='text'>
              PHP code can be seamlessly embedded within HTML files, allowing developers to mix dynamic and static content within a single file. This Integration enables the creation of dynamic web pages by combining HTML structures with PHP logic and data manipulation.
            </p>
            <ul><li><b>Interacting with Databases</b></li></ul>
            <p className='text'>
              PHP provides extensive support for connecting to databases such as MySQL, PostgreSQL, and others. Developers can use PHP's databases functions to query, insert, update, or delete data from the databases. This enables the creation of dynamic web applications that retrieve and display information from a database based on user requests.
            </p>
            <ul><li><b>Processing from Data</b></li></ul>
            <p className='text'>
              PHP is commonly used to handle form submissions on web pages. When a user submits the form. PHP can receieve the form data, validate & sanitize it, and perform future actions such as storing it in a database, sending emails, or generating a response based on the input received.
            </p>
            <ul><li><b>Conditional Logic and Loops</b></li></ul>
            <p className='text'>
              PHP allows developers to use Conditional Statements (eg. if-else, switch) and loops (eg. for, while) to execute different sections of code based on specific conditions or repeat certain tasks. The flexibility enables dynamic content generation based on different scenarios, user roles, or system states.
            </p>
            <ul><li><b>Session & Cookie Management</b></li></ul>
            <p className='text'>
              PHP provides mechanisms for managing user sessions and cookies. Sessions enables the storage of user-specific data across multiple page visits, while cookies allows the storage of user information on the client-side. These features are crucial for implementation user authentication, personalization, and maintaining stateful interactions.
            </p>
          </div>
          <hr />
          <h2 className="secondary-title"><b>Difference Between echo and print command</b></h2>
          <p className="text">
            <span className='text-primary'><b>echo</b></span> can output one or more strings. It is faster because it doesn't return a value. Even when generating HTML content, `echo` is often used because of its simplicity and speed.
          </p>
          <LinuxCommandBox
            title="php" cmd1='echo "Hello, ",' cmd2='"World",' cmd3='"!";' comments="// outputs: Hello, World!"
          ></LinuxCommandBox>
          <LinuxCommandBox
            title="php" cmd1='echo "<h1>Welcome to My Website<h1>";' noncommand1='echo "<p>This is a paragraph</p>"' cmd3=''
          ></LinuxCommandBox>
          <p className="text">
            <span className='text-primary'><b>print</b></span> can output only one string and always returns 1, so it can be used in expressions. If you need to store the result of the output operation (even though it's always 1), you would use `print`.
          </p>
          <LinuxCommandBox
            title="php" cmd1='if (print "Hello World!"){' cmd2='ehco " - Print was successful!";' cmd3='}' noncommand1='' comments=""
          ></LinuxCommandBox>
          <LinuxCommandBox
            title="php" cmd1='$result = print "Testing";' cmd2='' cmd3='' noncommand1='echo $result;' comments="// outputs: Testing1"
          ></LinuxCommandBox>
          <p className="text">
            <span className='text-primary'><b>print_r</b></span> prints the information about some variables in a more human-readable way.
          </p>
          <LinuxCommandBox
            title="php" cmd1='$a = array("red", "green", "blue");' cmd2='' cmd3='' noncommand1='print_r($a);' comments="// outputs: Array ( [0] => red [1] => green [2] => blue )"
          ></LinuxCommandBox>
          <hr />
          <h2 className="secondary-title"><b>Structure of PHP</b></h2>
          <p className="text">
            The Structure of a PHP script is the way the code is organized and written within a PHP file. PHP script are typically embedded with HTML code and are executed on the server, with the results sent back to the client as plain HTML. Here is an overview of the key elements that make up the structure of a PHP script.
            <ol>
              <b><li className="mt-4 my-2">PHP Tags</li></b>
              <ul className="mx-4">
                <li>PHP code is enclosed within special tags `{"<?php ... ?>"}`. This tells the server to treat the code inside as PHP code.</li>
                <li>Example:
                  <LinuxCommandBox
                    title="php" cmd1='<?php' cmd2='echo "Hello World";' cmd3='?>' noncommand1=''
                  ></LinuxCommandBox>
                </li>
              </ul>
              <b><li className="mt-4 my-2">Comments</li></b>
              <ul className='mx-4'>
                <li>Comments are used to explain the code and are ignored by the PHP engine during execution.</li>
                <li>Single-line comments: `// This is a single-line comment`</li>
                <li>Multi-line comments:
                  <LinuxCommandBox
                    title="php" cmd1='/*' cmd2='This is a multiline comment' cmd3='*/'
                  ></LinuxCommandBox>
                </li>
              </ul>
              <b><li className="mt-4 my-2">Variables and Data Types</li></b>
              <ul className="mx-4">
                <li>Variables in PHP are declared with a `$` sign followed by the variable name. PHP is a loosely typed language, so variables do not need explicit type definitions.</li>
                <li>Example:
                <LinuxCommandBox
                  title="php" cmd1='$name = John"' cmd2='' cmd3='' noncommand1='$age = 25' noncommand2='$price = 19.99'
                ></LinuxCommandBox>
                </li>
              </ul>
              <b><li className="mt-4 my-2">Control Structures</li></b>
              <ul className='mx-4'>
                <li>PHP supports typical control structures like `if`, `else`, `for`, `while`, `switch`, and more, to control the flow of the script.</li>
              </ul>
              <b><li className="mt-4 my-2">Functions</li></b>
              <ul className='mx-4'>
                <li>Functions in PHP are defined using the `function` keyword. They help to encapsulate code into reusable blocks.</li>
                <li>Example:
                <LinuxCommandBox
                  title="php" cmd1='function greet($name) {' cmd2='return "Hello, " . $name;' cmd3='}' noncommand1='echo greet("Alice");' noncommand2=''
                ></LinuxCommandBox>
                </li>
              </ul>
              <b><li className="mt-4 my-2">Arrays</li></b>
              <ul className='mx-4'>
                <li>Arrays are used to store multiple values in a single variable. PHP supports both indexed and associative arrays.</li>
                <li>Example:
                <LinuxCommandBox
                  title="php" cmd1='$fruits = array("Apple", "Banana", "Cherry"); // Indexed Array' cmd2='' cmd3='' noncommand1='$ages = array("John" => 25, "Alice" => 22); // Associative Array' noncommand2=''
                ></LinuxCommandBox>
                </li>
              </ul>
              <b><li className="mt-4 my-2">Inclusion of Files</li></b>
              <ul className='mx-4'>
                <li>PHP allows you to inculde other files using `include` or `require`. This is useful for organizing code into reusable components.</li>
                <li>Example:
                <LinuxCommandBox
                  title="php" cmd1="include 'header.php';" cmd2='' cmd3='' comments='// includes the header file' noncommand2=''
                ></LinuxCommandBox>
                </li>
              </ul>
              <b><li className="mt-4 my-2">Superglobals</li></b>
              <ul className='mx-4'>
                <li>PHP has several built-in global arrays called Superglobals, such as `$_GET`, `$_POST`, `$_SESSION`, `$_COOKIE` and `$_SERVER`, which are used to access request data, session data, cookies, and server information.</li>
              </ul>
            </ol>
          </p>
          <hr />
          <h2 className="secondary-title"><b>Constants in PHP</b></h2>
          <p className="text">
            Constants in PHP are identifiers (names) for simple values. Unlike variables, once a constant is defined, its value cannot be changed during the script's execution. Constants are case-sensitive by default, but you can make them case-insensitive by passing a third argument (`true`) to the `define()` function.
          </p>
          <p className="text">
            <div>Defining Constants:</div>
            <ul className='mx-4'>
              <li>Constants are defined using the `define()` function or the `const` keyword.</li>
              <LinuxCommandBox
                title="php" cmd1='define("PI", 3.14159);' noncommand1="echo PI;" comments="// outputs: 3.14159"
              ></LinuxCommandBox>
            </ul>
          </p>
          <h2 className="secondary-title mt-4"><b>Predefined Constants in PHP</b></h2>
          <p className="text">
            PHP comes with a number of predefined constants that are always available in all scopes throughout a script. These constants provide useful information and are often used to manage error reporting, file operations, PHP version checking, and more.
            <ul className="mx-4">
              <li>Constants in PHP are immutable values that, once set, cannot be changed. They are globally accessible and do not use a `$` sign.</li>
              <li>Predefined Constants include magic constants, error reporting, constants, version information, and file system constants that are built into PHP for common tasks and environment-specific details.</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  )
}

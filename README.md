# Unhandled Exception in Async Callback Causes Node.js Server to Hang

This repository demonstrates a common issue in Node.js where unhandled exceptions or blocking operations within asynchronous callbacks can cause the server to hang or become unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The provided `bug.js` uses `setTimeout` to simulate a long-running operation.  While not inherently problematic, in a real-world scenario, this could represent a database query, file I/O, or other potentially lengthy asynchronous task.  Without proper error handling and asynchronous flow management, this could lead to the server appearing unresponsive if an exception occurs during the timeout period. 

## Solution

The `bugSolution.js` demonstrates how to use `try...catch` blocks to handle potential errors that might occur during the asynchronous operation, and ensures the response is sent even if an error occurs.
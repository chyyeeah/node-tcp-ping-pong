# Ping Pong Net Servers

Create a tcp server that listens for ping events and responds pong.
The server should accept port input from the process.stdin separated by newline
For each port input generate a ping to the port specified.
Then output to standard out the port and SUCCESS/FAIL.

Your script should be started like node ./ping-pong.js <port> where port is the port to listen on.
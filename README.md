# node-playground
Playing with streams, child processes, file system, etc. in vs code.

## Guidelines
1. **Before** running ``` node delete-files-older-than-7-days.js ``` run ``` node create-test-files.js ```
2. Be **extremely** careful about running ``` node truncate-by-half.js ```
3. **Before** running ``` node read-dictionary.js ``` 
download [dictionary.txt](https://docs.oracle.com/javase/tutorial/collections/interfaces/examples/dictionary.txt) manually or run ``` ./download-dictionary-file.sh ```
4. Have **fun** with the servers! :zap:

## Guidelines in a sharp-looking table
| Preparation | Action |
| :---  | :---: |
| run ``` node create-test-files.js ``` | ``` node delete-files-older-than-7-days.js ``` |
| be sure you do **not** have anything important in `files/` directory | ``` node truncate-by-half.js ``` |
| download [dictionary.txt](https://docs.oracle.com/javase/tutorial/collections/interfaces/examples/dictionary.txt) or run ``` ./download-dictionary-file.sh ``` | ``` node read-dictionary.js ``` |
| fasten your *seatbelts* | ` node concurrent-server.js ` <br> ` node cluster-module-based-server.js ` <br> ` node single-process-based-server.js ` |
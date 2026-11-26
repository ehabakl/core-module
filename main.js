const { resolve } = require("node:dns")
const path = require("node:path")
const fs = require("node:fs")
const EventEmitter = require("node:events");
const os = require("node:os");
const zlib = require("node:zlib");
const { pipeline } = require("node:stream");
const http = require("node:http");


//1. Write a function that logs the current file path and directory.
// function logPathAndDirectory (){
//     console.log("Current file path:", __filename);
//     console.log("Current directory:", __dirname);
// }

// logPathAndDirectory()


//2. Write a function that takes a file path and returns its file name. 
// function getFileName(filePath) {
//     return path.basename(filePath);
// }

// console.log(getFileName("/user/files/report.pdf"));


// function buildPath(obj) {
//     return path.join(obj.dir, obj.name + obj.ext);
// }

// console.log(buildPath({
//     dir: "/folder",
//     name: "app",
//     ext: ".js"
// }));


// 4. Write a function that returns the file extension from a given file path. (0.5 Grade) 
// function getExtension(filePath) {
//     return path.extname(filePath);
// }

// console.log(getExtension("/user/files/report.js"));

// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade) 
// function getFileInfo(filePath) {
//     const parsedPath = path.parse(filePath);
//     console.log(parsedPath)

//     return {
//         Name: parsedPath.name,
//         Ext: parsedPath.ext
//     };
// }

// console.log(getFileInfo("/home/app/main.js"));

// 6. Write a function that checks whether a given path is absolute. (0.5 Grade) 
// function isAbsolute(myPath){
// return path.isAbsolute(myPath)
// }
// console.log(isAbsolute("/home/app/main.js"))

// 7. Write a function that joins multiple segments (0.5 Grade) 
// function joinPaths(...segments) {
//     return path.join(...segments);
// }

// console.log(joinPaths("src", "components", "App.js"));

// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// function resolveRelPath(relativePath){
//     return path.join(__dirname ,relativePath )
// }
// console.log(resolveRelPath("App.js"))

// //or
// function resolveRelPath(relativePath){
//     return path.resolve(relativePath )
// }
// console.log(resolveRelPath("App.js"))

// 9. Write a function that joins two paths. (0.5 Grade) 
// function joinPaths (path1,path2){
//     return path.join(path1,path2)
// }
// console.log(joinPaths("folder1" , "folder2/main.js"))

// 10. Write a function that deletes a file asynchronously. (0.5 Grade) 
// function deleteFile(filePath) {
//     fs.unlink(filePath, (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log("The file is deleted.");
//     });
// }
// deleteFile("file.txt");

// 11. Write a function that creates a folder synchronously. (0.5 Grade) 
// function createFolder(folderPath) {
//     try {
//         fs.mkdirSync(folderPath);
//         console.log("Success");
//     } catch (err) {
//         console.log(err);
//     }
// }

// createFolder("./myFolder");

// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade) 
// const eventEmiiter = new EventEmitter()
// eventEmiiter.on("start" , ()=>{
//     console.log("Welcome  User")
// })
// eventEmiiter.emit("start");


// 13. Emit a custom "login" event with a username parameter. (0.5 Grade) 
// const loginEmitter = new EventEmitter()
// loginEmitter.on("login" , (username)=>{
//     console.log(username)
// })
// loginEmitter.emit("login" , "myname")

// 14. Read a file synchronously and log its contents. (0.5 Grade) 
// function readFile(filePath) {
//     const content = fs.readFileSync(filePath, "utf-8");
//     console.log(content);
// }

// readFile("./myTextFile.txt");


// 15. Write asynchronously to a file. (0.5 Grade) 
// function writeFile(filePath, content) {
//     fs.writeFile(filePath, content, (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log("File saved successfully!");
//     });
// }
// writeFile("./async.txt", "Async save");


// 16. Check if a directory exists. (0.5 Grade) 

// function checkDirectory(dirPath) {
//     return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
// }

// console.log(checkDirectory("./myTextFile.txt"));
// console.log(checkDirectory("./folder1"));


// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade) 
// function getSystemInfo() {
//     return {
//         platform: os.platform(),
//         architecture: os.arch()
//     };
// }

// console.log(getSystemInfo());
 
// Assignment2 
//=============
 

// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade) 
// function readInChunks(filePath) {
    // const readableStream = fs.createReadStream(filePath, {
    //     encoding: "utf-8",
    //     highWaterMark: 10
    // });

    // readableStream.on("data", (chunk) => {
    //     console.log(chunk);
    // });

    // readableStream.on("end", () => {
    //     console.log("Finished reading");
    // });

    // readableStream.on("error", (err) => {
    //     console.log(err);
    // });

// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade) 
//     function copyFile(source, destination) {

//     const readableStream = fs.createReadStream(source);

//     const writableStream = fs.createWriteStream(destination);

//     readableStream.pipe(writableStream);

//     writableStream.on("finish", () => {
//         console.log("File copied using streams!");
//     });

//     readableStream.on("error", (err) => {
//         console.log(err);
//     });

//     writableStream.on("error", (err) => {
//         console.log(err);
//     });
// }
// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade) 

// function compressFile(source, destination) {

//     const readableStream = fs.createReadStream(source);

//     const gzip = zlib.createGzip();

//     const writableStream = fs.createWriteStream(destination);

//     pipeline(
//         readableStream,
//         gzip,
//         writableStream,
//         (err) => {
//             if (err) {
//                 console.log("Compression failed:", err);
//                 return;
//             }

//             console.log("File compressed successfully");
//         }
//     );
// }

//const usersFilePath = path.join(__dirname, "users.json");
const usersFilePath = path.join(__dirname, "users.json");

const server = http.createServer((req, res) => {

    if (req.url === "/users" && req.method === "POST") {

        let body = "";

        // 1. Receive request data
        req.on("data", (chunk) => {
            body += chunk;
        });

        // 2. After receiving all the data
        req.on("end", () => {

            const newUser = JSON.parse(body);

            // 3. Read existing users from JSON file
            fs.readFile(usersFilePath, "utf-8", (err, data) => {

                if (err) {
                    res.statusCode = 500;
                    return res.end("Error reading users file");
                }

                const users = JSON.parse(data);

                // 4. Check if email already exists
                const emailExists = users.some(
                    user => user.email === newUser.email
                );

                if (emailExists) {
                    res.statusCode = 400;
                    return res.end("Email already exists");
                }

                // 5. Add new user
                users.push(newUser);

                // 6. Write updated users back to JSON file
                fs.writeFile(
                    usersFilePath,
                    JSON.stringify(users, null, 2),
                    (err) => {

                        if (err) {
                            res.statusCode = 500;
                            return res.end("Error saving user");
                        }

                        res.statusCode = 201;
                        res.end("User added successfully");
                    }
                );
            });
        });
    }

    if (req.url.startsWith("/user/") && req.method === "PATCH") {

    // 1. Get ID from URL
    const userId = req.url.split("/")[2];

    let body = "";

    // 2. Receive request body
    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {

        const updatedData = JSON.parse(body);

        // 3. Read users from JSON file
        fs.readFile(usersFilePath, "utf-8", (err, data) => {

            if (err) {
                res.statusCode = 500;
                return res.end("Error reading users file");
            }

            const users = JSON.parse(data);

            // 4. Find user by ID
            const user = users.find(
                user => user.id === Number(userId)
            );

            if (!user) {
                res.statusCode = 404;
                return res.end("User not found");
            }

            // 5. Check duplicate email if email is being updated
            if (updatedData.email) {

                const emailExists = users.some(
                    existingUser =>
                        existingUser.email === updatedData.email &&
                        existingUser.id !== Number(userId)
                );

                if (emailExists) {
                    res.statusCode = 400;
                    return res.end("Email already exists");
                }
            }

            // 6. Update only the provided fields
            if (updatedData.name !== undefined) {
                user.name = updatedData.name;
            }

            if (updatedData.age !== undefined) {
                user.age = updatedData.age;
            }

            if (updatedData.email !== undefined) {
                user.email = updatedData.email;
            }

            // 7. Save updated users to JSON file
            fs.writeFile(
                usersFilePath,
                JSON.stringify(users, null, 2),
                (err) => {

                    if (err) {
                        res.statusCode = 500;
                        return res.end("Error updating user");
                    }

                    res.statusCode = 200;
                    res.end("User updated successfully");
                }
            );
        });
    });
}


if (req.url.startsWith("/user/") && req.method === "DELETE") {

    // 1. Get ID from URL
    const userId = req.url.split("/")[2];

    // 2. Read users from JSON file
    fs.readFile(usersFilePath, "utf-8", (err, data) => {

        if (err) {
            res.statusCode = 500;
            return res.end("Error reading users file");
        }

        const users = JSON.parse(data);

        // 3. Find the user by ID
        const userIndex = users.findIndex(
            user => user.id === Number(userId)
        );

        // 4. Check if user exists
        if (userIndex === -1) {
            res.statusCode = 404;
            return res.end("User not found");
        }

        // 5. Delete user from the array
        users.splice(userIndex, 1);

        // 6. Save updated users to JSON file
        fs.writeFile(
            usersFilePath,
            JSON.stringify(users, null, 2),
            (err) => {

                if (err) {
                    res.statusCode = 500;
                    return res.end("Error deleting user");
                }

                res.statusCode = 200;
                res.end("User deleted successfully");
            }
        );
    });
}


if (req.url === "/user" && req.method === "GET") {

    // 1. Read users from JSON file
    fs.readFile(usersFilePath, "utf-8", (err, data) => {

        if (err) {
            res.statusCode = 500;
            return res.end("Error reading users file");
        }

        // 2. Convert JSON text into JavaScript data
        const users = JSON.parse(data);

        // 3. Set response content type to JSON
        res.setHeader("Content-Type", "application/json");

        // 4. Send users to the client
        res.statusCode = 200;
        res.end(JSON.stringify(users));

    });
}


if (req.url.startsWith("/user/") && req.method === "GET") {

    // 1. Get ID from URL
    const userId = req.url.split("/")[2];

    // 2. Read users from JSON file
    fs.readFile(usersFilePath, "utf-8", (err, data) => {

        if (err) {
            res.statusCode = 500;
            return res.end("Error reading users file");
        }

        // 3. Convert JSON text into JavaScript data
        const users = JSON.parse(data);

        // 4. Find user by ID
        const user = users.find(
            user => user.id === Number(userId)
        );

        // 5. Check if user exists
        if (!user) {
            res.statusCode = 404;
            return res.end("User not found");
        }

        // 6. Send the user as JSON
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(user));

    });
}


});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});


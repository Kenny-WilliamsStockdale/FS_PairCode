const fs = require('fs');
const path = require('path');

// Creating files 
fs.writeFile('content.txt', 'This is my first file!',
(err) => {
    if (err) {
        throw err;
    };
    process.stdout.write('Success!')
}
);

// looking for file directory
const filePath = path.join(process.cwd(), 'content.txt');

// reading file from the read file directory
fs.readFile(filePath, (error, content) => {
    if (error) throw error;

    process.stdout.write(content)
})

// makes a list of files in the current directory similar to ls
fs.readdir(process.cwd(), (error, files) => {
    if (error) throw error;

    console.log(files)
})

// deleting a directory 
fs.rmdir(`${process.cwd()}/myFolder/`, { recursive: true },  (error) => { // recursive needs to be set to true to remove
    // the folder and the content. If you don't have recursive it will give an error
    if (error) throw error; 

    console.log('Folder/s deleted successfully')
})

//Rename the directories and files
// Directories
fs.rename(`${process.cwd()}/myFolder/`,`${process.cwd()}/myFolder2/`,  (error) => { 
    
    if (error) throw error; 

    console.log('\nDirectory renamed')
})

//Rename file
fs.rename(`${process.cwd()}/content.txt`,`${process.cwd()}/content2.txt`,  (error) => { 
    
    if (error) throw error; 

    console.log('\nFile renamed')
})

//Adding content to file
fs.appendFile(filePath, '\nBanana Pancake is good!', (error) => {
    if (error) throw error;

    console.log('New content added to file')
})
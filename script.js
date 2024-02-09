function getFileSize() {
    // Convert the file size to kilobytes (KB).
    var fileInput = document.getElementById('myFile');
    var file = fileInput.files[0];
    var fileSize = file.size; // size in bytes
  
    var sizeInKB = (fileSize / 1024).toFixed(2);
    var sizeStr = sizeInKB + " KB";
  
    document.getElementById('memory').innerHTML = "The file memory size is: " + sizeStr;
  
    // Check the file size and display a message
  }
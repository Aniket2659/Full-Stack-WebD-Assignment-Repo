function downloader(url){
    // downloader functon using promise
    console.log("Download started from the url :" , url )
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Downloading completed!")
            let data ="javaScript";
            if(url){
                res(data);
            }
            else{
                rej(data);
            }
        }, 4000);

    });
}

function fileWriting (data){
    //fileWriting function using promise
    console.log("File writing Process started with data: " , data);
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("file writing completed ");
            let filename = "file.text";
            if(data){
                res(filename);
            }else{
                rej(filename);
            }
        }, 2000);

    });
}

function uploadFile(fileName , newUrl){
    // file Uploading function using promise
    console.log("uploaing started with file name:" , fileName, "at newUrl:" , newUrl);
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log("Uploading of the file completed!");
            let uploadmesg = "Sucess";
            if(fileName){
                res(uploadmesg);
            }else{
                rej(uploadmesg);
            }
        }, 3000);
    });
}
const response = downloader("www.google.com");
response.then(function fullfillhandler(value){
    const fileWritingReponse = fileWriting(value);
    fileWritingReponse.then((value) => {
        const uploadFileResponse = uploadFile(value, "www.pwSkills.com");
        uploadFileResponse.then((value)=>{
            console.log("upload completed with status:", value);
        },(value)=>{
            console.log("upload rejected with status:" , value);
        });
    }, (value) => {
        console.log("uploding the file failed", value);
    });
}, function rejecthandler(value){
console.log("writing file failed", value);
});
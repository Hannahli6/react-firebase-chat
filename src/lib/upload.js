//1. turn this function into a promise because we want to return this
//   getDownloadURL so we can use it in the Login component in the try catch block
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
    //to prevent same avatar file name we will add a date to make it unique
    const date = new Date();
    const storageRef = ref(storage, `images/${date + file.name}`);
    
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
        },
        (error) => {
            reject("Something went wrong" + error.code);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
            });
        }
        );
    });
};

export default upload;

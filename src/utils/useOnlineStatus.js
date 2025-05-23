import { useEffect, useState } from "react";


const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);


    //check if online
    //using eventlistner
    useEffect(() =>{
        window.addEventListener("offline", () =>{
            setOnlineStatus(false);
  
        });

        window.addEventListener("online", () =>{
            setOnlineStatus(true);
  
        });

      }, []);


    // return boolean
    return onlineStatus;
};
export default useOnlineStatus;
 export const checkvalidateData = (email,password,name) =>
    {
        const isemailvalid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        const ispasswordvalid = /^[a-zA-Z]{8,}$/.test(password);
        const isnamevalid =/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)
         if(!isemailvalid) return "Email Id is not valid ";
         if(!ispasswordvalid) return "password is not valid";
         if(name&&!isnamevalid) return "name is not valid";
    return null;     
    };
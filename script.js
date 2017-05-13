// Page Scripts

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.type) {
        case "super-power":
            // console.log(document.getElementsByTagName("input"));
            var temp = document.getElementsByTagName("input");
            // console.log("Number of input tags in the screen is "+temp.length);
            for(i=0;i<temp.length;i++)
            {
                console.log(temp[i].id+"  ----  "+temp[i].name);
                if(temp[i].id.includes("name") || temp[i].name.includes("name"))
                    temp[i].value = "Aditya";
                else if(temp[i].id.includes("email") || temp[i].name.includes("email"))
                    temp[i].value= "aditya.pentyala@outlook.com"
                
            }
            document.getElementById("email").value = "Adityaxxx";
            // alert(document.getElementById("pass").value);
            break;
    }
});

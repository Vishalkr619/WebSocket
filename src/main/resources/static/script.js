var stompClient=null

function connect(){
        let socket=new SockJS("/server1")

        stompClient=Stomp.over(socket)

        stompClient.connect({},function(frame){

        console.log("Connected:"+frame)

        $("#name-form").addClass('d-none')

        $("#chat-room").removeClass('d-none')

        //subscribe
        stompClient.subscribe("/topic/return-to",function(response){

              showMessage(JSON.parse(response.body))


        })
        })
}

    function showMessage(message){

        $("#message-container-table").prepend(`<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`)

    }
    function sendMessage(){

        let jsonOb={
            name:localStorage.getItem("name"),
            content:$("#message-value").val()
        }

        //Send the message
        stompClient.send("/app/message",{},JSON.stringify(jsonOb));

        // Clear the input field after sending the message
            $("#message-value").val("");


    }




$(document).ready((e)=>{


   $("#login").click(()=>{

       let name=$("#name-value").val()
       localStorage.setItem("name",name)
       connect();
   })

   $("#send-btn").click(()=>{

        sendMessage()

   })

})
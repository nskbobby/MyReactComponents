import './DayNightTheme.css'


function DayNightTheme(){

    var date= new Date();
    var time=date.getHours();
    var theme={color:"red"}
    var message;
    if(time<12){
     message="good morning"
    }else if(time<18){
         message="good afternoon";
        theme.color="green";
}else {
     message="good evening";
    theme.color="blue";
}
return(
<h1 style={theme}>{message}</h1>
);
}

export default DayNightTheme;
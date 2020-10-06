<?php
if(isset($_POST["replay"])){

    $re=$_POST["replay"];
    if($re=="go"){

        $go[]="lets go";
    }
    if($re=="who is the pm of india"){
        $go[]="Narendra modi";
    }
       
    if(preg_match_all("/corona|korona/",$re)){

        if(preg_match_all("/[^symtoms][^sim]^[corona]|[korona]$/",$re)){
            $go[]="i have little bit information about corona.it is also called covid 19";
        }
        
        else if(preg_match_all("/dangerous|dengerous/" ,$re)){
            $go[]="yes it is ,but it can be contolledand and cured";
        }
        else if(preg_match_all("/symtoms|simtoms/" ,$re)){
            $go[]="as like virus sickness";
        }
        else if(preg_match_all("/scientific/",$re)){
            $go[]="covid 19";
        }
        else if(preg_match_all("/deaths|death|die|dies/",$re)){
            $go[]="more than 100k😢😢";
        }
       
    }
    if($re=="tell"){
        $go[]="ha tell me what is the matter";
    }

    if($re=="mimic"){
        $mimic=true;
        $go[]=" are you asking my version?";

      }
  if($re=="vr"){
      $go[]=" alpha 1.0.0";
  
  }
  if($re=="message"){
      $go[]="what message?";
  
  }
    if($re=="hi"){
         $go[]="hello";
      }
        if($re=="hello"){
         $go[]="hey";
      }
        if($re=="hey"){
         $go[]="hi";
      }
       
        if($re=="how are you"){
           $go[]="fine what about you";
           
       }
       if($re=="good"){
          $go[]="ha";  
  
       }
       if($re=="co"){
          $go[]="😠😠😠😠🤷‍♂️🤷‍♂️🤷‍♂️";  
          
  
       }
       if(preg_match_all("/what|name/",$re)){
           if($re=="name"){
            $go[]=" are you asking my name , if you ";
           }
           if(preg_match_all("/your|name/",$re)){
               $go[]=" my self Chatur";
           }
           
           if(preg_match_all("/[^name]^what|doing|know$/",$re))
           $go[]="chatting with you";
       }
      
      
}
echo json_encode(
    array(
        'go'=>$go
    )
    );   
?>

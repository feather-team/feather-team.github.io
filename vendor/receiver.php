<?php
error_reporting(0);

function mkdirs($path, $mod = 0777) {
    if (is_dir($path)) {
        return chmod($path, $mod);
    } else {
        $old = umask(0);

        if(mkdir($path, $mod, true) && is_dir($path)){
            umask($old);
            return true;
        } else { 
            return false;
        }
    }
} 

function getError($path){
    $str='Upload file {'.$path.'} failed:';

    switch ($code) {
        case 3: 
            $str .= "only part of the file is uploaded"; 
            break;
        
        case 2: 
        case 1: 
        case -2: 
            $str .= "file's size too bigger";
            break;
        
        case -4: 
            $str .= "create target directory failed"; 
            break;

        default: 
            $str .= "unknown error";
    }

    return $str;
}


function tryMoveFile($to){ 
    if(file_exists($to)){ 
        if(!unlink($to)){
            return "Delete {".$to."} failed"; 
        }  
    } else {
        $dir = dirname($to);
        if(!file_exists($dir)){ 
            if(!mkdirs($dir)) { 
                return "Create directory {" . $dir . "} failed, check your auth please!"; 
            }   
        }
    }   
    if(move_uploaded_file($_FILES["file"]["tmp_name"], $to)){ 
        return 0; 
    }else{ 
        $err=error_get_last();
        return 'Move file {'.$_FILES["file"]["tmp_name"]."} failed: ".$err['message'];  
    }     
}


if($_POST['to']){  
    $to = urldecode($_POST['to']); 
    if(is_dir($to)){ 
        echo '{'.$to.'} is a directory';
    } else if($_FILES["file"]["error"] > 0){ 
        echo getError($to,$_FILES["file"]["error"]); 
    } else { 
        if(tryMoveFile($to)){ 
            echo tryMoveFile($to);
        } 
        else{
            echo 0;
        }
    }
} else {
    echo 'I\'m ready for that, you know.';
}

<?php

namespace App\Exception;

use Exception;

class MediaUploadException extends Exception
{
    public function __construct(string $fileName)
    {
        $message = sprintf('There was an error uploading the file: %s', $fileName);
        parent::__construct($message);
    }
}

?>
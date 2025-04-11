<?php

namespace App\Enums;

use App\Traits\EnumUtils;

enum Role
{
    case PEMAIN;
    case ADMIN;
    case PENGEMBANG;

    use EnumUtils;
}

<?php

namespace App\Enums;

use App\Traits\EnumUtils;

enum Role
{
    case NORMAL;
    case ADMIN;
    case PENGEMBANG;

    use EnumUtils;
}

import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { Role } from "src/common/enums/role.enum";
import { AuthGuard } from "src/v1/api/auth/guard/auth.guard";
import { RolesGuard } from "src/v1/api/auth/guard/roles.guard";
import { Roles } from "./roles.decorator";
import { UserRole } from "../enums/user-role.enum";
import { UserRoles } from "./user-roles.decorator";

export function Auth(role: Role, userRole: UserRole = null) {
    return applyDecorators(
        Roles(role),
        UserRoles(userRole),
        UseGuards(AuthGuard, RolesGuard)
    )
}
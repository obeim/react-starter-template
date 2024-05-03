import Cookies from "js-cookie";

function hasPermission(
  permissions: string[] | null | undefined,
  userPermissions: string[]
) {
  if (
    permissions === null ||
    permissions === undefined ||
    permissions.length === 0
  ) {
    return true;
  }

  if (userPermissions && Array.isArray(userPermissions)) {
    return permissions.some((r) => userPermissions.indexOf(r) >= 0);
  }
}

function logoutHandler() {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
}

export default { hasPermission, logoutHandler };

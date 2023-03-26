import AuthService from "../services/AuthService.js";
export default function ($f7) {
  let router = this;
  let user = AuthService.user;
  if (user) {
    if($f7.to.path == '/auth/login'){
      $f7.reject();
      $f7.router.navigate("/");
      return false;
    }
    $f7.resolve();
    return true;
  } else {
    if($f7.to.path != '/auth/login'){
      $f7.reject();
      router.navigate("/auth/login",{reloadAll: true});
    }else{
      $f7.resolve();
    }
    return true;
  }
}
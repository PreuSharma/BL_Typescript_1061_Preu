
//Getters and setters allow controlled access to private or protected fields.
class User2 {
    private _password: string;
  
    constructor(password: string) {
      this._password = password;
    }
  
    get password(): string {
      return "****"; // Return masked password
    }
  
    set password(newPassword: string) {
      if (newPassword.length >= 8) {
        this._password = newPassword;
      } else {
        console.log("Password must be at least 8 characters long.");
      }
    }
  }
  
  const userr = new User2("secure123");
  console.log(userr.password); // Output: ****
  userr.password = "short";    // Output: Password must be at least 8 characters long.
  userr.password = "newsecure123"; // OK
  
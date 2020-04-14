using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Advensco.Base.Models.ViewModels
{
    public class UserVM
    {
    }
    public class LoginVM
    {
        public string Username { get; set; }
        //public string password { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public bool RememberMe { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }

    }
}
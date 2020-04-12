using Advensco.Base.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Advensco.Base.Controllers
{
    [RoutePrefix("api/User"),EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {

        private ApplicationUserManager _userManager;
        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }


        private ApplicationSignInManager _signInManager;
        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.Current.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }


        [HttpPost, Route("Login"), AllowAnonymous,]
        public async Task<HttpResponseMessage> Login(LoginVM objVM)
        {

            var response = new Response<object>();
            //{
            //    Status = ResponseStatusEnum.Sucess,
            //    Data = TokenManager.GenerateToken(objVM.Username)
            //};
            //return Request.CreateResponse(response);

            var result = await SignInManager.PasswordSignInAsync(objVM.Username, objVM.Password, objVM.RememberMe, shouldLockout: false);

            switch (result)
            {
                case SignInStatus.Success:
                    response.Status = ResponseStatusEnum.Sucess;
                    response.Data = TokenManager.GenerateToken(objVM.Username);
                    break;
                case SignInStatus.LockedOut:
                    response.Status = ResponseStatusEnum.Sucess;
                    response.Data = TokenManager.GenerateToken(objVM.Username);
                    break;

                case SignInStatus.RequiresVerification:
                    response.Status = ResponseStatusEnum.Sucess;
                    response.Data = TokenManager.GenerateToken(objVM.Username);
                    break;

                case SignInStatus.Failure:
                default:
                    response.Status = ResponseStatusEnum.Error;
                    response.Data = "Err";
                    break;
            }
            var tm = new TokenManager();
            return Request.CreateResponse(response);
        }

        [System.Web.Http.HttpPost, Route("Register")]
        public async Task<HttpResponseMessage> Register(User userToCreate)
        {


            var user = new ApplicationUser()
            {
                Id = Guid.NewGuid().ToString(),
                UserName = userToCreate.Email,
                Email = userToCreate.Email,
                FirstName = userToCreate.FirstName,
                LastName = userToCreate.LastName
            };
           // UOW.Users.Add(user);

            IdentityResult result = await  UserManager.CreateAsync(user, userToCreate.Password);

            if (result.Succeeded)
            {
                var res = new Response<object>
                {
                    Status = ResponseStatusEnum.Sucess,
                    Data = user.Id,
                    Message = "User Registered Successfully"
                };
                return Request.CreateResponse(res);
            }
            else
            {
                var err = result.Errors.Any() ? ((string[])result.Errors)[0] : "Error";
                return Request.CreateResponse(HttpStatusCode.InternalServerError, new Response()
                {
                    Status = ResponseStatusEnum.Error,
                    Data = err,
                });
            }
        }
    }
}

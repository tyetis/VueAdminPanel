using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VueWebApi.Data;
using VueWebApi.Providers;

namespace VueWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        ITokenProvider TokenProvider { get; set; }

        public AuthController(ITokenProvider tokenProvider)
        {
            TokenProvider = tokenProvider;
        }

        [HttpPost]
        public IActionResult Post(LoginModel model)
        {
            using (MssqllocaldbContext context = new MssqllocaldbContext())
            {
                User existUser = context.Users.FirstOrDefault(n => n.Email == model.Email && n.Password == model.Password);
                if (existUser != null)
                    return Ok(new
                    {
                        Token = TokenProvider.CreateToken(existUser.Id),
                        User = existUser
                    });
                else
                    return Unauthorized();
            }
        }

        [HttpGet("GetAccountInfo")]
        public IActionResult GetAccountInfo()
        {
            using (MssqllocaldbContext context = new MssqllocaldbContext())
            {
                User existUser = context.Users.FirstOrDefault(n => n.Id == TokenProvider.GetUserId);
                if (existUser != null)
                    return Ok(new
                    {
                        Token = TokenProvider.CreateToken(existUser.Id),
                        User = existUser
                    });
                else
                    return NotFound();
            }
        }

    }

    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VueWebApi.Data;

namespace VueWebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public List<User> Get()
        {
            using (MssqllocaldbContext context = new MssqllocaldbContext())
            {
                return context.Users.ToList();
            }
        }
        [HttpGet("{id}")]
        public User Get(int id)
        {
            using (MssqllocaldbContext context = new MssqllocaldbContext())
            {
                return context.Users.FirstOrDefault(n => n.Id == id);
            }
        }
        [HttpPost]
        public User Post(User user)
        {
            using (MssqllocaldbContext context = new MssqllocaldbContext())
            {
                if(user.Id == 0)
                    context.Users.Add(user);
                else
                {
                    User existUser = context.Users.FirstOrDefault(n => n.Id == user.Id);
                    existUser.Name = user.Name;
                    existUser.Email = user.Email;
                    existUser.Password = user.Password;
                    existUser.CreateDate = user.CreateDate;
                }
                context.SaveChanges();
                return user;
            }
        }
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            using (MssqllocaldbContext context = new MssqllocaldbContext())
            {
                User user = context.Users.FirstOrDefault(n => n.Id == id);
                context.Users.Remove(user);
                context.SaveChanges();
                return true;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using unipage.Models;

namespace unipage.Controllers
{
    public class UserController : ControllerBase
    {
        private ApplicationDbContext context;
        public UserController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [Route("{controller}/user")]
        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(context.UserModels);
        }
        [Route("{controller}/user")]
        [HttpPost]
        public IActionResult PostUser(UserModel user)
        {
            if (user == null)
            {
                return StatusCode(500);
            }
            // Some hardcoded model for test.
            // var user = new UserModel { Name = "Test User", Age = 18 };
            context.UserModels.Add(user);
            context.SaveChanges();
            return Ok(user);
        }
    }
}

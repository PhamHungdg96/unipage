namespace unipage.Controllers
{
    using unipage.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Cors;

    [EnableCors]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Sesamit17.Controllers
{
    public class EvenemangController : Controller
    {
        public IActionResult SupSittningen()
        {
            return View();
        }
    }
}
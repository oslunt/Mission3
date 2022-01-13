using Microsoft.AspNetCore.Mvc;
using Mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // Runs whenever the form is not submitted
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        // Runs when the form submits
        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}

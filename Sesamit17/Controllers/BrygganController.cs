using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sesamit17.Models;
using MimeKit;
using MailKit.Net.Smtp;

namespace Sesamit17.Controllers
{
    public class BrygganController : Controller
    {
        public IActionResult Bryggan()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Bryggan(EmailFormModel model)
        {
            if(ModelState.IsValid)
            {
                var mimeMessage = new MimeMessage();
                mimeMessage.From.Add(new MailboxAddress(model.FullName, "klubbmasteriet@sesamit.se"));
                mimeMessage.To.Add(new MailboxAddress("klubbmasteriet@sesamit.se", "klubbmasteriet@sesamit.se"));
                //mimeMessage.From.Add(new MailboxAddress(model.FullName, "it@sesamit.se"));
                //mimeMessage.To.Add(new MailboxAddress("it@sesamit.se", "it@sesamit.se"));
                mimeMessage.Subject = model.Subject;
                mimeMessage.Body = new TextPart("plain")
                {
                    Text = "From: " + model.Sender + " \n Phone: " + model.Phone + "\n Meddelande: \n" + model.Message,
                };
                using(var smtp = new SmtpClient())
                {
                    smtp.Connect("smtp.gmail.com", 587, false);
                    smtp.Authenticate("klubbmasteriet@sesamit.se", "Creativeslix123");
                    //smtp.Authenticate("it@sesamit.se", "SYSTEMVETARE123");
                    await smtp.SendAsync(mimeMessage);
                    ViewBag.Message = "Tack för ditt meddelande!";
                    return View(model);
                }
            }
            return View(model);
        }
    }
}
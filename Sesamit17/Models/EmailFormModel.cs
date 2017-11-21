using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sesamit17.Models
{
    public class EmailFormModel
    {
        [Required, Display(Name = "Förnamn & Efternamn")]
        public string FullName { get; set; }
        [Required, Display(Name = "Email"), EmailAddress]
        public string Sender { get; set; }
        [Required, Display(Name = "Meddelande")]
        public string Message { get; set; }
        [Required, Display(Name = "Telefonnummer")]
        public long Phone { get; set; }
        [Required, Display(Name = "Ämne")]
        public string Subject { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradeCalcModel
    {
        // Creates all the variables and makes sure there inputs can only be between 0 and 100
        [Range(0,100)]
        public int Assign { get; set; }
        [Range(0, 100)]
        public int GP { get; set; }
        [Range(0, 100)]
        public int Quiz { get; set; }
        [Range(0, 100)]
        public int Exam { get; set; }
        [Range(0, 100)]
        public int INTEX { get; set; }
    }
}

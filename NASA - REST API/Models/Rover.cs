using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NASA_REST_API.Models
{
    public abstract class Rover
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime EventDate { get; set; } = DateTime.MinValue;
        public int Quantity { get; set; }
        public string Wheel { get; set; }
        public string Speed { get; set; }
        public Double Weight { get; set; }
    }
}
